import React from 'react';
//import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import Header from './components/Header';
import "./output.css";


function App() {
  return (
   <BrowserRouter>
    <Header />
    <AppRoutes />
   </BrowserRouter>
  );
}

export default App;
