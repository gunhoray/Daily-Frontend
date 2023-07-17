import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import TodoDetail from './todoDetail'
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
`
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
`
const NotcompleteTodo = styled.button`
width: 85%;
padding: 10px;
justify-content: center;
border-radius: 6px;
border: 1px solid;
background-color: #fff;
`
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
`
const CompletedTodo = styled.div`
width: 80%;
padding: 10px;
justify-content: center;
border-radius: 6px;
border: 1px solid;
color: #fff;
background-color: black;
`
const TodoTitle = styled.div`
font-size: 20px;
display: flex;
`
const TodoDeadline = styled.div`
font-size: 15px;
display: flex;
`
const ShowTodoList = () => {
  const [deatilTodo, setDetailTodo] = useState(false)
  
  const [todo, setTodo] = useState([])



  return (
    <ShowtodolistSection id="showTodoList">
      <NotcompleteTodolistContainer>

        {todo.map(function(todopost){
           return(<NotcompleteTodo onClick={()=>{setDetailTodo(true);}}>
             {/* <TodoTitle>Drive through the Night</TodoTitle> */}
             {todopost.title}
                   <br />
                   {/* <TodoDeadline> 2023.07.99 </TodoDeadline> */}
                   {todopost.content}
             </NotcompleteTodo>)
                })}
           {deatilTodo && <TodoDetail setDetailTodo={setDetailTodo}/>}

      <NotcompleteTodo onClick={()=>{setDetailTodo(true);}}>
      <TodoTitle>Drive through the Night</TodoTitle>
            <br />
            <TodoDeadline> 2023.07.99 </TodoDeadline>
      </NotcompleteTodo>
    {deatilTodo && <TodoDetail setDetailTodo={setDetailTodo}/>}

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
  )
}

export default ShowTodoList