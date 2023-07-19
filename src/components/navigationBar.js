import React from 'react'
import {
  NavigationbarSection,
  NavigationbarLogo,
  NavigationbarTitle,
  Showtodolist,
  Logout,
} from "./navigationBar.style";

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