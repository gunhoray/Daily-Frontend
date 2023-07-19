import React, { useState } from "react";
import styled from "styled-components";
import { BiXCircle } from "react-icons/bi";
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
const ExitButton = styled(BiXCircle)`
  top: 10px;
  right: 10px;
  cursor: pointer;
  margin-left: 98%;
  margin-bottom: 5px;
`;
const TodoDetailTitle = styled.textarea`
  font-size: 18px;
  font-family: Roboto;
  font-weight: bold;
  border: none;
  width: 100%;
  margin-bottom: 10px;
  overflow: visible;
  resize: none;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
`;
const TodoDetailContent = styled.textarea`
  font-size: 14px;
  border: none;
  font-family: Roboto;
  width: 100%;
  height: 100px;
  resize: none;
  margin-bottom: 20px;
  overflow: visible;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const DeleteButton = styled.button`
  font-size: 12px;
  width: 100px;
  padding: 5px;
  border-radius: 8px;
  border: 1px solid #fff;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
  &:hover {
    background-color: black;
    color: white;
  }
`;
const CompletedButton = styled.button`
  font-size: 12px;
  width: 100px;
  padding: 5px;
  border-radius: 8px;
  border: 1px solid #fff;
  color: black;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  &:hover {
    background-color: black;
    color: #fff;
  }
`;
const UpdateButton = styled.button`
  font-size: 12px;
  width: 100px;
  padding: 5px;
  border-radius: 8px;
  border: 1px solid #fff;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
  &:hover {
    background-color: black;
    color: white;
  }
`;
const TodoDetail = ({ setDetailTodo, selectedTodoId }) => {
  const [updateTitle, setUpdateTitle] = useState(selectedTodoId.title);
  const [updateContent, setUpdateContent] = useState(selectedTodoId.content);

  const queryClient = useQueryClient();

  const deleteTodoMutation = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todo");
    },
  });
  const completeDeleteTodoMutation = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("comTodo");
    },
  });

  const editTodoMutation = useMutation(editTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todo");
    },
  });
  const comEditTodoMutation = useMutation(editTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("comTodo");
    },
  });

  const toggleTodoMutation = useMutation(toggleTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("comTodo");
    },
  });

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
          value={updateTitle}
          onChange={(e) => {
            setUpdateTitle(e.target.value);
          }}
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
