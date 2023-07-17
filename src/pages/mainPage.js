import React from "react";
import NavigationBar from "../components/navigationBar";
import Footer from "../components/footer";
import ShowYourProfile from "../components/showYourProfile";
import TodoInput from "../components/todoInput";
import TodoList from "../components/todoList";

const MainPage = () => {
  return (
    <>
      <NavigationBar />
      <TodoInput />
      <TodoList />
      <ShowYourProfile />
      <Footer />
    </>
  );
};

export default MainPage;
