import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Login from "./components/pages/Auth/Login";
import Register from "./components/pages/Auth/Register";

import { UserProvider} from "./context/UserContext";
import GlobalStyle from "./styles/globalStyles";
import EditTasks from "./components/EditTasks";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <UserProvider>
          {/* <Navbar /> */}
          {/* <Container> */}
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<EditTasks />} />
          </Routes>
          {/* </Container> */}
        </UserProvider>
      </Router>
    </>
  );
}

export default App;
