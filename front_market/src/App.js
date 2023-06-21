/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Reset } from "./common/global/Reset";
import { Route, Routes } from 'react-router-dom';
import { Global } from '@emotion/react';
import './App.css';
import AuthRoute from './components/AuthRoute/AuthRoute';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Main from './pages/Main/Main';

function App() {
  return (
    <>
      <Global css={Reset} />
      <Routes>
        <Route path="/market/auth/register" element={<AuthRoute path="/market/auth/register" element={<Register/>}/>}/>
        <Route path="/market/auth/login" element={<AuthRoute path="/market/auth/login" element={<Login/>}/>}/>
        <Route path="/market/home" element={<AuthRoute path="/market/home" element={<Main/>}/>}/>
      </Routes>
      
    </>
  );
}

export default App;
