import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './containers/Home.js';
import Login from './containers/Login.js';
import Signup from './containers/Signup.js';
import Activate from './containers/Activate.js';
import ResetPassword from './containers/ResetPassword.js';
import ResetPasswordConfirm from './containers/ResetPasswordConfirm.js';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
        <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/reset-password" element={<ResetPassword />}/>
          <Route path="/activate/:uid/:token" element={<Activate />}/>
          <Route path="/password/reset/confirm/:uid/:token" element={<ResetPasswordConfirm />}/>
          </Route>
          
      </Routes>
    </BrowserRouter>
  );
}

export default App;
