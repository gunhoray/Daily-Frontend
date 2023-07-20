import React from 'react'
import {
  NavigationbarSection,
  NavigationbarLogo,
  NavigationbarTitle,
  Showtodolist,
  Logout,
} from "./navigationBar.style";

/**
 * mainPage안의 navigation bar 컴포넌트를 구현하는 함수 
 * @returns NavigationBar component in mainPage 
 */
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