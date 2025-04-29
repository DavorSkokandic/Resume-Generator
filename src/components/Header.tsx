import {Link} from "react-router-dom";
import React from 'react';

function Header()
{ return(
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-[#EC5228]">ResumeCraft</Link>
          <nav className="flex items-center gap-6 text-[#3F7D58] font-medium">
            <Link to="/prices" className="hover:text-[#EC5228]">Plans & Pricing</Link>
            <Link to="/about" className="hover:text-[#EC5228]">About</Link>
            <Link to="/login" className="hover:text-[#EC5228]">Login</Link>
            <Link to="/builder" className="bg-[#3F7D58] text-white px-6 py-2 rounded-full hover:bg-[#2e6246] transition">
              Start Now
            </Link>
          </nav>
        </header>
)
}
export default Header;
