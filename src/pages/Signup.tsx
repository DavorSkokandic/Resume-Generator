import React from 'react';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api/client';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');   
    const nav = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await API.post('/auth/register', { email, password })
        nav('/login');
    }
    
    return (
        <form onSubmit={handleSubmit} className="…">
            <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" />
            <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" />
            <button type="submit">Sign Up</button>
        </form>
  );

}

export default Signup;
