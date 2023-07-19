import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { deleteTodo, editTodo, toggleTodo, completeUndoTodo } from "../api/api";
import { useQueryClient, useMutation } from "react-query";

const TodoDetailSection = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TodoDetailContainer = styled.div`
  position: relative;
  width: 300px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  padding-top: 10px;
`;
const ExitButton = styled.button`
  font-size: 10px;
  margin-left: 95%;
  margin-bottom: 10px;
`;
const TodoDetailTitle = styled.textarea`
  font-size: 18px;
  font-weight: bold;
  border: none;
  width: 100%;
  margin-bottom: 10px;
  overflow: visible;
`;
const TodoDetailContent = styled.textarea`
  font-size: 14px;
  border: none;
  width: 100%;
  height: 100px;
  resize: none;
  margin-bottom: 20px;
  overflow: visible;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;
const DeleteButton = styled.button`
  width: 160px;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #fff;
  &:hover {
    background-color: black;
    color: white;
  }
`;
const CompletedButton = styled.button`
  width: 160px;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #fff;
  background-color: black;
  color: #fff;
  &:hover {
    background-color: white;
    color: black;
  }
`;
const UpdateButton = styled.button`
  width: 160px;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #fff;
  &:hover {
    background-color: black;
    color: white;
  }
`;
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
    deleteTodoMutation.mutate(id);
    return setDetailTodo(false);
  };

  const completeDeleteHandler = (id) => {
    completeDeleteTodoMutation.mutate(id);
    return setDetailTodo(false);
  };

  const editHandler = () => {
    editTodoMutation.mutate({
      id: selectedTodoId.postId,
      title: updateTitle,
      content: updateContent,
    });
    return setDetailTodo(false);
  };

  const comEditHandler = () => {
    comEditTodoMutation.mutate({
      id: selectedTodoId.postId,
      title: updateTitle,
      content: updateContent,
    });
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
        >
          X
        </ExitButton>

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
