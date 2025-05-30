import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Builder from './pages/Builder';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Prices from './pages/Prices';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/builder" element={<Builder />} />
      <Route path='/About' element={<About />} />
      <Route path='/Prices' element={<Prices />} />
      <Route path='/Dashboard' element={<Dashboard />}/>
    </Routes>
  );
}
// This code defines the routes for a React application using React Router.