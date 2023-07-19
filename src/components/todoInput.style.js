import styled from "styled-components";

export const PlanyourdaySection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  background: #000;
  overflow: hidden;
`;
export const PlanyourdayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-top: 60px;
  h1 {
    margin-top: -30px;
    color: white;
    font-family: Roboto;
  }
  span {
    font-family: Roboto;
    margin-top: -30px;
    color: white;
  }
`;
export const PlanyourdayTitleInput = styled.input`
  height: 20px;
  text-overflow: ellipsis;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  width: 400px;
`;
export const PlanyourdayContentInput = styled.textarea`
  overflow: visible;
  height: 12vh;
  text-overflow: ellipsis;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  width: 400px;
  resize: none;
`;
export const ClearBtn = styled.button`
  width: 160px;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #fff;
  background-color: black;
  color: #fff;
  &:hover {
    background-color: #fff;
    color: black;
  }
`;
export const AddBtn = styled.button`
  width: 160px;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #fff;
  &:hover {
    background-color: black;
    color: #fff;
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
`;
