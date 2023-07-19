import React, { useEffect, useRef, useState } from "react";
import { deleteTodo, editTodo, toggleTodo, completeUndoTodo } from "../api/api";
import { useQueryClient, useMutation } from "react-query";
import {
  TodoDetailSection,
  TodoDetailContainer,
  ExitButton,
  TodoDetailTitle,
  TodoDetailContent,
  ButtonContainer,
  DeleteButton,
  CompletedButton,
  UpdateButton,
} from "./todoDetail.style";
const TodoDetail = ({ setDetailTodo, selectedTodoId }) => {
  const [updateTitle, setUpdateTitle] = useState(selectedTodoId.title);
  const [updateContent, setUpdateContent] = useState(selectedTodoId.content);
  const todoDeatailTitle = useRef();
  const queryClient = useQueryClient();

  //모달오픈시 포커스
  useEffect(() => todoDeatailTitle.current.focus(), []);
  //삭제뮤테이션
  const deleteTodoMutation = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todo");
    },
  });
  //완료취소뮤테이션
  const completeDeleteTodoMutation = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("comTodo");
    },
  });
  //글수정뮤테이션
  const editTodoMutation = useMutation(editTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todo");
    },
  });
  //완료목록글수정뮤테이션
  const comEditTodoMutation = useMutation(editTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("comTodo");
    },
  });
  //토글값변경뮤테이션
  const toggleTodoMutation = useMutation(toggleTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("comTodo");
    },
  });
  //완료취소토글뮤테이션
  const undoToggleTodoMutation = useMutation(completeUndoTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todo");
    },
  });

  const deleteHandler = (id) => {
    if (window.confirm("정말 해당 일을 삭제하시겠습니까?") === true) {
      deleteTodoMutation.mutate(id);
    }
    return setDetailTodo(false);
  };

  const completeDeleteHandler = (id) => {
    if (window.confirm("정말 해당 일을 삭제하시겠습니까?") === true) {
      deleteTodoMutation.mutate(id);
    }
    completeDeleteTodoMutation.mutate(id);
    return setDetailTodo(false);
  };

  const editHandler = () => {
    // console.log("sending", id, title, content);
    if (window.confirm("정말 해당 일을 수정하시겠습니까?") === true) {
      editTodoMutation.mutate({
        id: selectedTodoId.postId,
        title: updateTitle,
        content: updateContent,
      });
    }
    return setDetailTodo(false);
  };
  const comEditHandler = () => {
    // console.log("sending", id, title, content);
    if (window.confirm("정말 해당 일을 수정하시겠습니까?") === true) {
      comEditTodoMutation.mutate({
        id: selectedTodoId.postId,
        title: updateTitle,
        content: updateContent,
      });
    }
    return setDetailTodo(false);
  };

  const toggleHandler = () => {
    const toggleTodo = (selectedTodoId.isDone = true);
    toggleTodoMutation.mutate({
      id: selectedTodoId.postId,
      isDone: toggleTodo,
    });
    return setDetailTodo(false);
  };

  const undoToggleHandler = () => {
    const toggleTodo = (selectedTodoId.isDone = false);
    undoToggleTodoMutation.mutate({
      id: selectedTodoId.postId,
      isDone: toggleTodo,
    });
    return setDetailTodo(false);
  };

  return (
    <TodoDetailSection>
      <TodoDetailContainer>
        <ExitButton
          onClick={() => {
            setDetailTodo(false);
          }}
        />

        <TodoDetailTitle
          ref={todoDeatailTitle}
          value={updateTitle}
          onChange={(e) => setUpdateTitle(e.target.value)}
        >
          {selectedTodoId.title}{" "}
        </TodoDetailTitle>
        <TodoDetailContent
          value={updateContent}
          onChange={(e) => setUpdateContent(e.target.value)}
        >
          {" "}
          {selectedTodoId.content}
        </TodoDetailContent>

        <ButtonContainer>
          {selectedTodoId.isDone === false ? (
            <DeleteButton onClick={() => deleteHandler(selectedTodoId.postId)}>
              Delete
            </DeleteButton>
          ) : (
            <DeleteButton
              onClick={() => completeDeleteHandler(selectedTodoId.postId)}
            >
              Delete
            </DeleteButton>
          )}
          {selectedTodoId.isDone === false ? (
            <UpdateButton
              onClick={() =>
                editHandler(selectedTodoId.postId, updateTitle, updateContent)
              }
            >
              Update
            </UpdateButton>
          ) : (
            <UpdateButton
              onClick={() =>
                comEditHandler(
                  selectedTodoId.postId,
                  updateTitle,
                  updateContent
                )
              }
            >
              Update
            </UpdateButton>
          )}
          {selectedTodoId.isDone === false ? (
            <CompletedButton
              onClick={() => toggleHandler(selectedTodoId.postId)}
            >
              Completed
            </CompletedButton>
          ) : (
            <CompletedButton
              onClick={() => undoToggleHandler(selectedTodoId.postId)}
            >
              Cancel
            </CompletedButton>
          )}
        </ButtonContainer>
      </TodoDetailContainer>
    </TodoDetailSection>
  );
};

export default TodoDetail;
