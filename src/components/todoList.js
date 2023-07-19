import React from "react";
import { useState } from "react";
import TodoDetail from "./todoDetail";
import { useQuery } from "react-query";
import { getTodo, getComTodo } from "../api/api";
import {
  ShowtodolistSection,
  NotcompleteTodolistContainer,
  NotcompleteTodo,
  CompleteTodolistContainer,
  CompletedTodo,
  TodoTitle,
  TodoDeadline,
} from "./todoList.style";
const TodoList = () => {
  const [detailTodo, setDetailTodo] = useState(false); //모달 여닫기
  const [selectedTodoId, setSelectedTodoId] = useState(""); //데이터 props 해 줄 스테이트
  //incom투두 데이터
  const {
    isLoading: isTodoLoading,
    isError: isTodoError,
    data: todo,
  } = useQuery("todo", getTodo);

  //com투두 데이터
  const {
    isLoading: isComTodoLoading,
    isError: isComTodoError,
    data: comTodo,
  } = useQuery("comTodo", getComTodo);

  if (isTodoLoading || isComTodoLoading) {
    return <p>로딩중입니다....!</p>;
  }
  if (isTodoError || isComTodoError) {
    return <p>오류가 발생하였습니다...!</p>;
  }

  return (
    <ShowtodolistSection id="showTodoList">
      <NotcompleteTodolistContainer>
        {todo.todo
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
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
            setSelectedTodoId={setSelectedTodoId}
          />
        )}
      </NotcompleteTodolistContainer>

      <CompleteTodolistContainer>
        {comTodo.todo
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .filter((todopost) => todopost.isDone === true)
          .map(function (todopost) {
            return (
              <CompletedTodo
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
              </CompletedTodo>
            );
          })}
      </CompleteTodolistContainer>
    </ShowtodolistSection>
  );
};

export default TodoList;
