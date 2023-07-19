import styled from "styled-components";
import { BiXCircle } from "react-icons/bi";

export const TodoDetailSection = styled.div`
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
export const TodoDetailContainer = styled.div`
  position: relative;
  width: 300px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  padding-top: 10px;
`;
export const ExitButton = styled(BiXCircle)`
  top: 10px;
  right: 10px;
  cursor: pointer;
  margin-left: 98%;
  margin-bottom: 5px;
`;
export const TodoDetailTitle = styled.textarea`
  font-size: 18px;
  font-family: Roboto;
  font-weight: bold;
  border: none;
  width: 100%;
  margin-bottom: 10px;
  overflow: visible;
  resize: none;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
`;
export const TodoDetailContent = styled.textarea`
  font-size: 14px;
  border: none;
  font-family: Roboto;
  width: 100%;
  height: 100px;
  resize: none;
  margin-bottom: 20px;
  overflow: visible;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const DeleteButton = styled.button`
  font-size: 12px;
  width: 100px;
  padding: 5px;
  border-radius: 8px;
  border: 1px solid #fff;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
  &:hover {
    background-color: black;
    color: white;
  }
`;
export const CompletedButton = styled.button`
  font-size: 12px;
  width: 100px;
  padding: 5px;
  border-radius: 8px;
  border: 1px solid #fff;
  color: black;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  &:hover {
    background-color: black;
    color: #fff;
  }
`;
export const UpdateButton = styled.button`
  font-size: 12px;
  width: 100px;
  padding: 5px;
  border-radius: 8px;
  border: 1px solid #fff;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
  &:hover {
    background-color: black;
    color: white;
  }
`;
