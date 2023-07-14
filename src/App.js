import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const queryClient = new QueryClient()

function App() {



  return (
    <QueryClientProvider client={queryClient} >
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/main' element={<Main/>} />
          <Route path='/signup' element={<SignUp/>} />
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
