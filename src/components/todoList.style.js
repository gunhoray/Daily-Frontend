import styled from "styled-components";

export const ShowtodolistSection = styled.div`
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
export const NotcompleteTodolistContainer = styled.div`
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
export const NotcompleteTodo = styled.button`
  width: 85%;
  padding: 10px;
  justify-content: center;
  border-radius: 6px;
  border: 1px solid #000;
  background-color: #fff;
  box-shadow: 5px 2px 10px rgba(0, 0, 0, 0.3);
  outline: none;
`;
export const CompleteTodolistContainer = styled.div`
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
export const CompletedTodo = styled.div`
  width: 80%;
  padding: 10px;
  justify-content: center;
  border-radius: 6px;
  border: 1px solid #fff;
  color: #fff;
  background-color: black;
  box-shadow: 5px 2px 10px rgba(0, 0, 0, 0.3);
  outline: none;
`;
export const TodoTitle = styled.div`
  font-size: 20px;
  display: block;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 100%;
  text-align: left;
`;
export const TodoDeadline = styled.div`
  font-size: 15px;
  display: flex;
`;
