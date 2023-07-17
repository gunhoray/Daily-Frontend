import React, { useRef, useState, useEffect } from "react";
import {
  SignupPageSection,
  SignupPageContainer,
  SignupPageEmailInput,
  SignupPagePasswordInput,
  ButtonContainer,
  SigninBtn,
  XCircleIcon,
} from "./signupPageEl";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  //마운트시 이메일 포커스
  useEffect(() => {
    emailRef.current.focus();
  }, []);
  //home이동
  const onHomeHandler = () => {
    navigate("/");
  };
  //email,password값 저장
  const onInputChangeHandler = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  //비밀번호 이메일 값이 없을시 포커스
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
          <SigninBtn onClick={noWordCheck}>Signin</SigninBtn>
        </ButtonContainer>
        <XCircleIcon onClick={onHomeHandler} size="30px" />
      </SignupPageContainer>
    </SignupPageSection>
  );
};

export default SignupPage;
