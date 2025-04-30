import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-[#EFEFEF] w-64 h-full flex flex-col justify-between p-4">
      <div>
        <h1 className="text-2xl font-bold text-[#3F7D58] mb-6">ResumeCraft</h1>
        <ul className="space-y-2">
          <li><Link className="font-semibold" to="/dashboard">Resume</Link></li>
          <li><Link to="/cover-letter">Cover Letter</Link></li>
        
        </ul>
      </div>
      <div className="space-y-2">
        <Link className="w-full border-2 border-[#3F7D58] py-2 rounded" to='/login'>Login</Link>
        <Link className="w-full bg-[#3F7D58] text-white py-2 rounded" to='/signup'>Signup</Link>
      </div>
    </div>
  );
};

export default Sidebar