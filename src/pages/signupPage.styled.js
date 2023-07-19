import styled from "styled-components";
import { BiXCircle } from "react-icons/bi";

export const SignupPageSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #fff;
  position: relative;
`;
export const SignupPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 50%;
  h1 {
    margin-top: -30px;
    color: #000;
    font-family: Roboto;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  }
  span {
    font-family: Roboto;
    margin-top: -30px;
    color: #000;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  }
`;
export const SignupPageEmailInput = styled.input`
  height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  width: 400px;
  border: 1px groove;
  border-radius: 3px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  outline: none;
`;
export const SignupPagePasswordInput = styled.input`
  height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  width: 400px;
  border: 1px groove;
  border-radius: 3px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  outline: none;
`;
export const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
`;
export const SigninBtn = styled.button`
  width: 160px;
  padding: 12px;
  border-radius: 8px;
  background-color: black;
  color: #fff;
  border: 1px groove black;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  &:hover {
    background-color: #fff;
    color: black;
    border: 1px groove;
    border-radius: 8px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  }
`;
export const XCircleIcon = styled(BiXCircle)`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;
