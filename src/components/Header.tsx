import {Link} from "react-router-dom";

function Header()
{ return(
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">Resume Generator</Link>
        <nav className="space-x-4">
            <Link to="builder" className="text-gray-700 hover:text-blue-600">Builder</Link>
            <Link to="/dashboard" className="text-gray-700 hover:text-blue-600">Dashboard</Link>
            <Link to="/checkout" className="text-gray-700 hover:text-blue-600">Checkout</Link>
            <Link to="/login" className="text-gray-700 hover:text-blue-600">Login</Link>
            <Link to="/signup" className="text-gray-700 hover:text-blue-600">Sign Up</Link>
        </nav>
    </header>
)
}
export default Header;
