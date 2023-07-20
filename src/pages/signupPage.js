import React, { useRef, useState, useEffect } from "react";
import {
  SignupPageSection,
  SignupPageContainer,
  SignupPageEmailInput,
  SignupPagePasswordInput,
  ButtonContainer,
  SigninBtn,
  XCircleIcon,
} from "./signupPage.styled";
import { useNavigate } from "react-router-dom";

/**
 * Sign-Up page를 구현하는 함수  
 * @returns Sign-Up page
 */ 
const SignupPage = () => {
  /**
   * 유저가 입력하는 email, password를 가지고 있는 state
   * @param {string} email SignupPageEmailInput으로 들어오는 값
   * @param {string} password SignupPagePasswordInput 들어오는 값
   */
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  /**
   * SignupPage가 열렸을 때, SignupPageEmailInput을 useRef로 메모리 저장해둔다
   */
  const emailRef = useRef();
  /**
   * SignupPage가 열렸을 때, SignupPagePasswordInput을 useRef로 메모리 저장해둔다
   */
  const passwordRef = useRef();
  /**
   * useNavigate hook을  navigate으로 정의한다.
   */
  const navigate = useNavigate();
  /**
   * SignupPage가 열렸을 때, SignupPageEmailInput에 포커스 한다.
   */
  useEffect(() => {
    emailRef.current.focus();
  }, []);
  /**
   * SignupPage에서 XCircleIcon를 통해 navigate으로 mainPage로 넘어간다.
   */
  const onHomeHandler = () => {
    navigate("/");
  };
  /**
   * SignupPageEmailInput, SignupPagePasswordInput에서 입력되는 값을 읽어 setState에 반영해주는 함수
   * @param {object} setState  event에서 name과 value를 가져와 반영한다.
   */
  const onInputChangeHandler = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  /**
   * SignupPageEmailInput, SignupPagePasswordInput 중에 빈값이 있다면 자동으로 포커스를 맞추어 주는 함수
   * @param {function} if state의 email 혹은 password가 1보다 작으면, 0 이면 focus를 맞추어 준다
   */
  const noWordCheck = () => {
    if (state.email < 1) {
      emailRef.current.focus();
      return;
    }
    if (state.password < 1) {
      passwordRef.current.focus();
      return;
    }
  };
  return (
    <SignupPageSection>
      <SignupPageContainer>
        <h1>Sign Up</h1>
        <span>Build your profile</span>
        <SignupPageEmailInput
          ref={emailRef}
          name="email"
          value={state.email}
          onChange={onInputChangeHandler}
          placeholder="Enter E-mail"
        />
        <SignupPagePasswordInput
          ref={passwordRef}
          type="password"
          name="password"
          value={state.password}
          onChange={onInputChangeHandler}
          placeholder="Enter Passwords"
        />
        <ButtonContainer>
          <SigninBtn onClick={noWordCheck}>Sign-In</SigninBtn>
        </ButtonContainer>
        <XCircleIcon onClick={onHomeHandler} size="30px" />
      </SignupPageContainer>
    </SignupPageSection>
  );
};

export default SignupPage;
