import React from "react";
import NavigationBar from "./components/navigationBar";
import Footer from "./components/footer/footer";
import PlanYourDay from "./components/planYourDay";
import ShowTodoList from "./components/showTodoList";
import ShowYourProfile from "./components/showYourProfile";

const MainPage = () => {
  return (
    <>
      <NavigationBar />
      <PlanYourDay />
      <ShowTodoList />
      <ShowYourProfile />
      <Footer />
    </>
  );
};

export default MainPage;
