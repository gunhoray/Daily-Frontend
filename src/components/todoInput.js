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

const TodoInput = () => {
  const queryClient = useQueryClient();

  //투두추가뮤테이션
  const addMutation = useMutation(addTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todo");
    },
  });

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const titleHandler = (event) => {
    setTitle(event.target.value);
  };
  const contentHandler = (event) => {
    setContent(event.target.value);
  };

  const handleClear = () => {
    setTitle("");
    setContent("");
  };

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
