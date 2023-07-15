import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./1. homepage/homePage";
import MainPage from "./1. mainpage/mainPage";
import SignupPage from "./1. signuppage/signupPage";

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient} >
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/main' element={<MainPage/>} />
          <Route path='/signup' element={<SignupPage/>} />
        </Routes>
    </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;

// HomePage
   // router /home

// MainPage
   // router /main
     //DetailModal 
     //AboutModal 

//SignupPage
   // router /signup
