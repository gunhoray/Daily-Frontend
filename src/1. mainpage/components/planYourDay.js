import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'

  const PlanyourdaySection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  background: #000;
`
const PlanyourdayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin-top: 60px;
h1{
margin-top: -30px;
color: white;
font-family: Roboto;
}
span{
font-family: Roboto;
margin-top: -30px;
color: white;
}
`
const PlanyourdayTitleInput = styled.input`
  height: 20px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.50);
  text-overflow: ellipsis;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  width: 400px;
`
const PlanyourdayContentInput = styled.input`
  height: 20px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.50);
  text-overflow: ellipsis;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  width: 400px;
`
const ClearBtn = styled.button`
width: 160px;
padding: 12px;
border-radius: 8px;
border: 1px solid #FFF;
background-color: black;
color: #FFF;
&:hover{
 background-color: #fff;
 color: black;
}
`
const AddBtn = styled.button`
width: 160px;
padding: 12px;
border-radius: 8px;
border: 1px solid #FFF;
&:hover{
 background-color: black;
 color: #FFF;
}
`;
const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
`;
const PlanYourDay = () => {

  const [todo, setTodo] = useState([])
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

  const addBtnHandler = (title,content) => {
  if (title === "" && content === "") {
      alert("emptiness is not a goal");
  } else {
      const newTodo = {
          id: todo.length,
          title: title,
          content: content,
          isDone: false,
      };
      setTodo([...todo,newTodo]);
  }

};
  console.log("todo", todo)
  return (
    <PlanyourdaySection id="planYourDay">
      <PlanyourdayContainer>

          <h1>Plan Your Day</h1>
          <span>What is up today?</span>
          <PlanyourdayTitleInput type="text" value={title} onChange={titleHandler} placeholder='Enter Title' />
          <PlanyourdayContentInput type="text" value={content} onChange={contentHandler} placeholder='Enter Content' />

          <ButtonContainer>
             <ClearBtn onClick={handleClear}>Clear</ClearBtn>
             <AddBtn onClick={addBtnHandler} >Add</AddBtn>
          </ButtonContainer>
      </PlanyourdayContainer>
    </PlanyourdaySection>
  )
}
export default PlanYourDay