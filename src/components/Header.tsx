import {Link} from "react-router-dom";

function Header()
{ return(
    <header className="bg-white shadow-md p-4 flex flex-row justify-between items-center sticky top-0 z-10">
        <Link to="/" className="text- font-bold text-blue-600">Resume Generator</Link>
        <nav className="space-x-4">
            
            <Link to="/about" className="text-gray-700 hover:text-blue-600 mr-10">About</Link>
            
            <Link to="/prices" className="text-gray-700 hover:text-blue-600 mx-9">Prices&Plans</Link>
            <Link to="/login" className="text-gray-700 hover:text-blue-600">Login</Link>
            <Link to="/builder" className="bg-blend-color text-gray-700 hover:text-blue-600 text-2xl border-2 ">Start Now </Link>
            
        </nav>
    </header>
)
}
export default Header;
