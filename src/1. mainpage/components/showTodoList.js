import React from 'react'

const ShowTodoList = () => {
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