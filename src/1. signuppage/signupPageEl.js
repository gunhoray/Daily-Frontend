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
  }
  span {
    font-family: Roboto;
    margin-top: -30px;
    color: #000;
  }
`;
export const SignupPageEmailInput = styled.input`
  height: 20px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.5);
  text-overflow: ellipsis;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  width: 400px;
  border: 1px solid #000;
  outline: none;
`;
export const SignupPagePasswordInput = styled.input`
  height: 20px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.5);
  text-overflow: ellipsis;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  width: 400px;
  border: 1px solid #000;
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
  border: 1px solid #000;
  background-color: #fff;
  color: #000;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;
export const XCircleIcon = styled(BiXCircle)`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;
