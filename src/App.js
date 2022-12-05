import { Route, Routes } from "react-router";
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import UserDetail from "./pages/UserDetail.js";

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/detail/:id" element={<UserDetail></UserDetail>} />
      </Routes>
    </>
  );
}

export default App;
