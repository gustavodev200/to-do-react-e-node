import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Login from "./components/pages/Auth/Login";
import Register from "./components/pages/Auth/Register";

import { UserProvider } from "./context/UserContext";
import GlobalStyle from "./styles/globalStyles";
import EditTasks from "./components/EditTasks";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <UserProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<PrivateRoute />}>
              <Route path="/" element={<Home />} />
              <Route path="/:id" element={<EditTasks />} />
            </Route>
          </Routes>
        </UserProvider>
      </Router>
    </>
  );
}

export default App;
