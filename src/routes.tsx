import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Builder from './pages/Builder';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Prices from './pages/Prices';
import ProtectedRoute from './components/ProtectedRoute';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route element={<ProtectedRoute />}>
      <Route path="/builder" element={<Builder />} />
      <Route path='/Dashboard' element={<Dashboard />}/>
      </Route>
      <Route path='/About' element={<About />} />
      <Route path='/Prices' element={<Prices />} />
    </Routes>
  );
}
// This code defines the routes for a React application using React Router.