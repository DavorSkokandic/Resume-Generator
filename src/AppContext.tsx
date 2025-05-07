// AppContent.tsx

import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/Header';
import AppRoutes from './routes';

const AppContent = () => {
  const location = useLocation();

  // Paths where you want to hide the header
  const hideHeaderOn = ['/builder', '/dashboard', '/signup'];
  const shouldHideHeader = hideHeaderOn.some(path => location.pathname.startsWith(path));

  return (
    <>
      {!shouldHideHeader && <Header />}
      <AppRoutes />
    </>
  );
};

export default AppContent;
