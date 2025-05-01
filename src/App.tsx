import React from 'react';
//import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import Header from './components/Header';
import "./output.css";
import { ResumeProvider } from './context/ResumeContext';


function App() {
  return (
    <ResumeProvider>
   <BrowserRouter>
    <Header />
    <AppRoutes />
   </BrowserRouter>
   </ResumeProvider>
  );
}

export default App;
