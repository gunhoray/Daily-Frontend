import React from "react";
import { useNavigate } from "react-router-dom";
import { getquote } from "../api/api";
import { useQuery } from "react-query";
import {
  HomepageSection,
  HomepageContainer,
  Quote,
  HomepageEmailInput,
  HomepagePasswordInput,
  SignupBtn,
  LoginBtn,
  ButtonContainer,
} from "./loginPage.style";
/**
 * LoginPage를 구현하는 함수 입니다.
 * @returns Log-In page
 */
const LoginPage = () => {
  /**
   * useNavigate hook을 navigate으로 정의
   */
  const navigate = useNavigate();
  /**
   * LoginBtn의 onClick action으로 "/main":mainPage로 navigate하는 함수
   */
  const onLoginHandler = () => {
    navigate("/main");
  };
  /**
   * SignupBtn의 onClick action으로 "/signup":signupPage로 navigate하는 함수
   */
  const onSignupHandler = () => {
    navigate("/signup");
  };
  /**
   * 로그인 화면의 부제목인 명언을 가져오기 위한 query의 과정에 대한 state들을 가지고 있는 객체
   * @param {boolean} isLoading query를 통해 data를 가져오기 전까지 loading 상태를 처리하는 boolean
   * @param {boolean} isError query를 통해 data를 가져오기에 실패한 error 상태를 처리하는 boolean
   * @param {array} data query를 통한 성공적인 response, 필요한 quote 생성
   */
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
