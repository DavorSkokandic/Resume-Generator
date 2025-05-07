import { Link, useLocation } from 'react-router-dom';
import {
  FileText,
  Edit,
  LogIn,
  UserPlus,
} from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path: string) =>
    location.pathname === path
      ? 'bg-[#EC5228]/10 text-[#EC5228]'
      : 'text-gray-700 hover:text-[#EC5228]';

  return (
    <aside className="bg-[#EFEFEF] w-64 h-screen px-6 py-8 flex flex-col justify-between shadow-md">
      {/* Logo / Branding */}
      <div>
        <div className='mb-8'>
        <Link to="/" className="text-3xl font-bold text-[#3F7D58] mb-12">ResumeCraft</Link>
        </div>
        {/* Navigation */}
        <nav className="flex flex-col space-y-4">
          <Link
            to="/dashboard"
            className={`flex items-center gap-3 px-3 py-2 rounded-md font-medium transition ${isActive('/dashboard')}`}
          >
            <FileText className="w-5 h-5" />
            Resume
          </Link>

          <Link
            to="/cover-letter"
            className={`flex items-center gap-3 px-3 py-2 rounded-md font-medium transition ${isActive('/cover-letter')}`}
          >
            <Edit className="w-5 h-5" />
            Cover Letter
          </Link>
        </nav>
      </div>

      {/* Auth Links */}
      <div className="space-y-3">
        <Link
          to="/login"
          className="flex items-center justify-center gap-2 border border-[#3F7D58] text-[#3F7D58] hover:bg-[#3F7D58]/10 py-2 rounded-md font-semibold text-sm transition"
        >
          <LogIn className="w-4 h-4" />
          Login
        </Link>

        <Link
          to="/signup"
          className="flex items-center justify-center gap-2 bg-[#3F7D58] text-white hover:bg-[#3F7D58]/90 py-2 rounded-md font-semibold text-sm transition"
        >
          <UserPlus className="w-4 h-4" />
          Signup
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
