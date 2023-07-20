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

/**
 * mainPage안에서 생성되었던 모든 todo를 list로 구성된 색션을 보여주는 함수 
 * @returns TodoList Section in mainPage
 */
const TodoList = () => {
  /**
   * TodoDetail modal을 열고 닫아주는 state
   * @param {boolean} detailTodo false를 initial value로 가지고 있는 state
   */
  const [detailTodo, setDetailTodo] = useState(false);
  /**
   * TodoDetail modal로 전해줄 todo의 data들을 가지고 있는 state
   * @param {object} selectedTodoId TodoDetail에서 활용될 선택된 todo의 id, title, content를 가지고 있다.
   */
  const [selectedTodoId, setSelectedTodoId] = useState("");
  /**
   * getTodo(미완료todos get) query의 과정에 대한 state들을 가지고 있는 객체
   * @param {boolean} isLoading query를 통해 data를 가져오기 전까지 loading 상태를 처리하는 boolean
   * @param {boolean} isError query를 통해 data를 가져오기에 실패한 error 상태를 처리하는 boolean
   * @param {array} data query를 통한 성공적인 response, 미완료 todo들
   */
  const {
    isLoading: isTodoLoading,
    isError: isTodoError,
    data: todo,
  } = useQuery("todo", getTodo);
  /**
   * getComTodo(완료todos get) query의 과정에 대한 state들을 가지고 있는 객체
   * @param {boolean} isLoading query를 통해 data를 가져오기 전까지 loading 상태를 처리하는 boolean
   * @param {boolean} isError query를 통해 data를 가져오기에 실패한 error 상태를 처리하는 boolean
   * @param {array} data query를 통한 성공적인 response, 완료 todo들
   */
  const {
    isLoading: isComTodoLoading,
    isError: isComTodoError,
    data: comTodo,
  } = useQuery("comTodo", getComTodo);
  /**
   * isTodoLoading 혹은 isComTodoLoading 중 하나가 true이면
   * @return '로딩중입니다....!'를 렌더
   */
  if (isTodoLoading || isComTodoLoading) {
    return <p>로딩중입니다....!</p>;
  }
  /**
   * isTodoError 혹은 isComTodoError 중 하나가 true이면
   * @return '오류가 발생하였습니다...!'를 렌더
   */
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
