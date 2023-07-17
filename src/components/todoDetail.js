import React from "react";
import styled from "styled-components";

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
const TodoDetailTitle = styled.input`
  font-size: 18px;
  font-weight: bold;
  border: none;
  width: 100%;
  margin-bottom: 10px;
`;
const TodoDetailContent = styled.input`
  font-size: 14px;
  border: none;
  width: 100%;
  height: 100px;
  resize: none;
  margin-bottom: 20px;
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
  console.log(selectedTodoId);
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

        <TodoDetailTitle placeholder={selectedTodoId.title} />
        <TodoDetailContent placeholder={selectedTodoId.content} />

        <ButtonContainer>
          <DeleteButton>Delete</DeleteButton>
          <UpdateButton>Update</UpdateButton>
          <CompletedButton>Completed</CompletedButton>
        </ButtonContainer>
      </TodoDetailContainer>
    </TodoDetailSection>
  );
};

export default TodoDetail;
