import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/loginPage";
import MainPage from "./pages/mainPage";
import SignupPage from "./pages/signupPage";

const queryClient = new QueryClient()
/**
 * react-router로 3개의 page들이 연동되어 있고 최상위 컴포넌트로서 QueryClientProvider를 가지고 있는 함수 
 * @returns App
 */
function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;

