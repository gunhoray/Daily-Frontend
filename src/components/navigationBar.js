import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {Link as Linkscroll} from 'react-scroll'

const NavigationbarSection = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  position: fixed;
  background-color: #fff;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 5;
`
const NavigationbarLogo = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: black;
  margin: 10px;
`
const NavigationbarTitle = styled(Linkscroll)`
  font-family: Roboto;
  font-weight: bold;
  margin: 0;
  flex-grow: 1;
  cursor: pointer;
`
const Showtodolist = styled(Linkscroll)`
  font-family: Roboto;
  font-size: 15px;
  margin-right: 10px;
  cursor: pointer;
`
const Logout = styled(Link)`
  font-family: Roboto;
  text-decoration-line: none;
  color: black;
  font-size: 15px;
  cursor: pointer;
  margin-right: 10px;
`;

const NavigationBar = () => {
  return (
   <NavigationbarSection>
   
    <NavigationbarLogo />
    <NavigationbarTitle to= "planYourDay">Daily</NavigationbarTitle>
   
    <Showtodolist to="showTodoList">List</Showtodolist>
    <Logout to="/">Log-Out</Logout>

   </NavigationbarSection>
  )
}

export default NavigationBar