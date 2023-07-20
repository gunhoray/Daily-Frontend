import styled from "styled-components";

export const HomepageSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #000;
`;

export const HomepageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  h1 {
    margin-top: -30px;
    color: white;
    font-family: Roboto;
  }
`;

export const Quote = styled.div`
  font-size: 16px;
  font-family: Roboto;
  color: white;
  margin: -30px 80px 0px 80px;
  text-align: center;
`;

export const HomepageEmailInput = styled.input`
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
`;

export const HomepagePasswordInput = styled.input`
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
`;

export const SignupBtn = styled.button`
  width: 160px;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #fff;
  background-color: black;
  color: #fff;
  &:hover {
    background-color: white;
    color: black;
  }
`;

export const LoginBtn = styled.button`
  width: 160px;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #fff;
  &:hover {
    background-color: black;
    color: white;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
`;
