import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom' 

const HomepageSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #000;
`
const HomepageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
h1{
margin-top: -30px;
color: white;
font-family: Roboto;
}
span{
font-family: Roboto;
margin-top: -30px;
color: white;
}
`
const HomepageEmailInput = styled.input`
  height: 20px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.50);
  text-overflow: ellipsis;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  width: 400px;
`
const HomepagePasswordInput = styled.input`
  height: 20px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.50);
  text-overflow: ellipsis;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  width: 400px;
`
const SignupBtn = styled.button`
width: 160px;
padding: 12px;
border-radius: 8px;
border: 1px solid #FFF;
background-color: black;
color: #FFF;
&:hover{
 background-color: white;
 color: black;
}
`
const LoginBtn = styled.button`
width: 160px;
padding: 12px;
border-radius: 8px;
border: 1px solid #FFF;
&:hover{
 background-color: black;
 color: white;
}
`;
const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
`;

const HomePage = () => {

  const navigate = useNavigate();
  const onLoginHandler = () => {
    navigate('/main'); 
  };
  const onSignupHandler = () => {
    navigate('/signup'); 
  };
 
  return (
    <HomepageSection>
      <HomepageContainer>
     
        <h1>Daily</h1>
        <span>The best plan makes the best day</span>
      <HomepageEmailInput placeholder='Enter your E-mail'/>
      <HomepagePasswordInput placeholder='Enter your Passwords'/>

      <ButtonContainer>
          <SignupBtn onClick={onSignupHandler}>Signup</SignupBtn>
          <LoginBtn onClick={onLoginHandler}>Login</LoginBtn>
        </ButtonContainer>

      </HomepageContainer>
    </HomepageSection>
  )
}

export default HomePage;