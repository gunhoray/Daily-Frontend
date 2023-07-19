import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { getquote } from "../api/api";
import { useQuery } from "react-query";

const HomepageSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #000;
`;

const HomepageContainer = styled.div`
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

const Quote = styled.div`
  font-size: 16px;
  font-family: Roboto;
  color: white;
  margin: -30px 80px 0px 80px;
  text-align: center;
`;

const HomepageEmailInput = styled.input`
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

const HomepagePasswordInput = styled.input`
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

const SignupBtn = styled.button`
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

const LoginBtn = styled.button`
  width: 160px;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #fff;
  &:hover {
    background-color: black;
    color: white;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
`;

const LoginPage = () => {
  const navigate = useNavigate();
  const onLoginHandler = () => {
    navigate("/main");
  };
  const onSignupHandler = () => {
    navigate("/signup");
  };

  const { isLoading, isError, data } = useQuery("quote", getquote);

  if (isLoading) {
    return <p>로딩중입니다....!</p>;
  }
  if (isError) {
    return <p>오류가 발생하였습니다...!</p>;
  }

  return (
    <HomepageSection>
      <HomepageContainer>
        <h1>Daily</h1>

        {data.map((item) => {
          return (
            <Quote key={item.category}>
              {item.quote} <br />
              By {item.author}
            </Quote>
          );
        })}

        <HomepageEmailInput placeholder="Enter your E-mail" />
        <HomepagePasswordInput placeholder="Enter your Passwords" />

        <ButtonContainer>
          <SignupBtn onClick={onSignupHandler}>Signup</SignupBtn>
          <LoginBtn onClick={onLoginHandler}>Login</LoginBtn>
        </ButtonContainer>
      </HomepageContainer>
    </HomepageSection>
  );
};

export default LoginPage;
