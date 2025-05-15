import React, { createContext, useContext, useState,ReactNode,useEffect } from 'react';
import API from '../api/client';

interface AuthContextType {
    token: string | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [token, setToken]= useState<string | null>(()=> localStorage.getItem('token'));

    async function login(email:string, password:string){
        const {data} = await API.post('/auth/login', {email, password});
        localStorage.setItem('token', data.token);
        setToken(data.token);
    }

    function logout(){
        localStorage.removeItem('token');
        setToken(null);
    }

   return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}