import React from "react";
import { useState } from "react";
import { useQueryClient, useMutation } from "react-query";
import { addTodo } from "../api/api";
import {
  PlanyourdaySection,
  PlanyourdayContainer,
  PlanyourdayTitleInput,
  PlanyourdayContentInput,
  ClearBtn,
  AddBtn,
  ButtonContainer,
} from "./todoInput.style";

/**
 * mainPage안의 TodoInput에서 user가 원하는 새로운 todo를 생성하는 컴포넌트를 구현하는 함수 
 * @returns TodoInput Section in mainPage 
 */
const TodoInput = () => {
  /**
   * useQueryClinet를 queryClient로 정의
   */
  const queryClient = useQueryClient();
  /**
   * todo 추가 뮤테이션 : addBtnHandler에서 addMutation을 newTodo(새롭게 생성된 todo)를 가지고 mutate
   * @param {function} addTodo api("/")에 post request
   * @param {object} onSuccess key:onSuccess와 value:todoList의 query-key인 todo를 가지고 invalidate 하는 함수
   */
  const addMutation = useMutation(addTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todo");
    },
  });
  /**
   * 생성된 title를 가지고 있는 state
   * @param {string} title 빈값을 기본값으로 가지고 있다가, 생성된 title를 가지는 state
   */
  const [title, setTitle] = useState("");
  /**
   * 생성된 content를 가지고 있는 state
   * @param {string} content 빈값을 기본값으로 가지고 있다가, 생성된 content를 가지는 state
   */
  const [content, setContent] = useState("");
  /**
   * 입력되는 title 읽어 state에 반영: giving informaiton to title state from the users that was newly typed from title Input by setTitle
   * @param {function} setTitle title Input의 event
   */
  const titleHandler = (event) => {
    setTitle(event.target.value);
  };
  /**
   * 입력되는 content 읽어 state에 반영: giving informaiton to content state from the users that was newly typed from content Input by setContent
   * @param {function} setContent content Input의 event
   */
  const contentHandler = (event) => {
    setContent(event.target.value);
  };
  /**
   * clear 버튼 : with the user's confirm, clearing Inputs to delete typed information with one click
   * @param {string} setTitle title을 가지는 state
   * @param {string} setContent content를 가지는 state
   */
  const handleClear = () => {
    if (window.confirm("입력하시던 일을 삭제하시겠습니까?") === true) {
      setTitle("");
      setContent("");
    }
  };
  /**
   * Add 버튼 : Adding new todo that was created by the user by calling addMutation
   * @param {object} newTodo 새롭게 생성된 title, content와 미완료 상태인 isDone:false를 가지고 있다.
   * @param {string} setTitle title을 가지는 state
   * @param {string} setContent content를 가지는 state
   */
  const addBtnHandler = () => {
    if (title === "" && content === "") {
      alert("emptiness is not a goal");
    } else {
      const newTodo = {
        title: title,
        content: content,
        isDone: false,
      };
      addMutation.mutate(newTodo);
      setTitle("");
      setContent("");
    }
  };

  return (
    <PlanyourdaySection id="planYourDay">
      <PlanyourdayContainer>
        <h1>Plan Your Day</h1>
        <span>What is up today?</span>
        <PlanyourdayTitleInput
          type="text"
          value={title}
          onChange={titleHandler}
          placeholder="Enter Title"
        />
        <PlanyourdayContentInput
          type="text"
          value={content}
          onChange={contentHandler}
          placeholder="Enter Content"
        />

        <ButtonContainer>
          <ClearBtn onClick={handleClear}>Clear</ClearBtn>
          <AddBtn onClick={addBtnHandler}>Add</AddBtn>
        </ButtonContainer>
      </PlanyourdayContainer>
    </PlanyourdaySection>
  );
};
export default TodoInput;
