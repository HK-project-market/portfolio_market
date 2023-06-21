/** @jsxImportSource @emotion/react */
import { Global } from '@emotion/react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Reset } from "./common/global/Reset";
import AuthRoute from './components/AuthRoute/AuthRoute';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import Register from './pages/Register/Register';

function App() {
  return (
    <>
      <Global css={Reset} />
      <Routes>
        <Route path="/" element={<AuthRoute path="/" element={<Main/>}/>}/>
        <Route path="/market/auth/register" element={<AuthRoute path="/market/auth/register" element={<Register/>}/>}/>
        <Route path="/market/auth/login" element={<AuthRoute path="/market/auth/login" element={<Login/>}/>}/>
        <Route path="/market/home" element={<AuthRoute path="/market/home" element={<Main/>}/>}/>
      </Routes>
      
    </>
  );
}

export default App;
