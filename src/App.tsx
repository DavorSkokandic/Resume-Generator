import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import Header from './components/Header';
import "./output.css";
import { ResumeProvider } from './context/ResumeContext';
import AppContent from './AppContext';


function App() {
  return (
    <ResumeProvider>
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
   </ResumeProvider>
  );
}

export default App;
