import React from "react";
import styled from "styled-components";
import { useState } from "react";
import TodoDetail from "./todoDetail";
import { useQuery } from "react-query";
import { getTodo } from "../api/api";

const ShowtodolistSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  height: auto;
  min-height: 100vh;
  @media (max-width: 800px) {
    flex-direction: column;
    margin: 40px;
    gap: 20px;
  }
`;
const NotcompleteTodolistContainer = styled.div`
  display: flex;
  height: 70vh;
  width: 80%;
  max-width: 500px;
  padding: 20px 0px;
  flex-direction: column;
  overflow: scroll;
  align-items: center;
  gap: 20px;
  border-radius: 6px;
  background-color: #fff;
  margin-right: 10px;
  @media (max-width: 800px) {
    width: 100%;
    margin-right: 0;
  }
`;
const NotcompleteTodo = styled.button`
  width: 85%;
  padding: 10px;
  justify-content: center;
  border-radius: 6px;
  border: 1px solid;
  background-color: #fff;
`;
const CompleteTodolistContainer = styled.div`
  display: flex;
  height: 70vh;
  overflow: scroll;
  width: 80%;
  max-width: 500px;
  padding: 20px 0px;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  border-radius: 6px;
  margin-left: 10px;
  @media (max-width: 800px) {
    width: 100%;
    margin-left: 0;
  }
`;
const CompletedTodo = styled.div`
  width: 80%;
  padding: 10px;
  justify-content: center;
  border-radius: 6px;
  border: 1px solid;
  color: #fff;
  background-color: black;
`;
const TodoTitle = styled.div`
  font-size: 20px;
  display: flex;
`;
const TodoDeadline = styled.div`
  font-size: 15px;
  display: flex;
`;
const TodoList = () => {
  const [detailTodo, setDetailTodo] = useState(false);
  const [selectedTodoId, setSelectedTodoId] = useState("");

  const { isLoading, isError, data } = useQuery("todo", getTodo);

  if (isLoading) {
    return <p>로딩중입니다....!</p>;
  }
  if (isError) {
    return <p>오류가 발생하였습니다...!</p>;
  }
  console.log("data", data.todo);
  return (
    <ShowtodolistSection id="showTodoList">
      <NotcompleteTodolistContainer>
        {data.todo
          .filter((todopost) => todopost.isDone === false)
          .map(function (todopost) {
            return (
              <NotcompleteTodo
                key={todopost.postId}
                onClick={() => {
                  setDetailTodo(true);
                  setSelectedTodoId(todopost);
                }}
              >
                <TodoTitle> {todopost.title}</TodoTitle>
                <br />
                <TodoDeadline>
                  {new Date(todopost.createdAt).toLocaleString("ko-KR", {
                    timeZone: "Asia/Seoul",
                  })}
                </TodoDeadline>
              </NotcompleteTodo>
            );
          })}

        {detailTodo && (
          <TodoDetail
            selectedTodoId={selectedTodoId}
            setDetailTodo={setDetailTodo}
          />
        )}
      </NotcompleteTodolistContainer>

      <CompleteTodolistContainer>
        <CompletedTodo>
          <div>Drive through the Night</div>
          <br />
          <div> 2023.07.99 </div>
        </CompletedTodo>
        <CompletedTodo>
          <div>Pass to Homie</div>
          <br />
          <div> 2023.08.99 </div>
        </CompletedTodo>
        <CompletedTodo>
          <div>Trust your Homies</div>
          <br />
          <div> 2023.17.99 </div>
        </CompletedTodo>
      </CompleteTodolistContainer>
    </ShowtodolistSection>
  );
};

export default TodoList;