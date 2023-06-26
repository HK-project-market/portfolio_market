/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Reset } from "./common/global/Reset";
import AuthRoute from './components/AuthRoute/AuthRoute';
import WriteBoard from './pages/Board/WriteBoard';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import Register from './pages/Register/Register';

const container = css`
    display: flex;
    align-items: center;
    justify-content: center;

    margin: auto;

    width: 88%;
    height: 100%;
    border: 1px solid #121212;

`;

function App() {
  return (
    <div css={container}>
      <Global css={Reset} />
      <Routes>
        <Route path="/" element={<AuthRoute path="/" element={<Main/>}/>}/>
        <Route path="/auth/register" element={<AuthRoute path="/auth/register" element={<Register/>}/>}/>
        <Route path="/auth/login" element={<AuthRoute path="/auth/login" element={<Login/>}/>}/>
        <Route path="/auth/home" element={<AuthRoute path="/auth/home" element={<Main/>}/>}/>
        <Route path="/market/write/board" element={<AuthRoute path="/market/write/board" element={<WriteBoard/>}/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
