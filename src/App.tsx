import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import "./output.css";
import { ResumeProvider } from './context/ResumeContext';
import AppContent from './AppContext';
import { AuthProvider } from './context/authContext';


function App() {
  return (
    <AuthProvider>
      <ResumeProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
    </ResumeProvider>
   </AuthProvider>
  );
}

export default App;
