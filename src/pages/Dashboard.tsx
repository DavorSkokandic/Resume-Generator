import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from "../components/Sidebar";
import TemplatePickerModal from '../components/TemplatePickerModal';

const Dashboard = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const savedResumes = [
    { id: 1, name: "Resume 1", updated: "6 mins ago" },
  ];

  return (
    <div className="flex h-screen bg-[#F5F3EF]">
      <Sidebar />
      <main className="flex-1 p-8">
        <h2 className="text-3xl font-bold text-[#3F3F3F] mb-8">My Resumes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Create new */}
          <div
            className="border-2 border-dashed rounded-lg p-6 text-center hover:shadow flex items-center justify-center flex-col cursor-pointer"
            onClick={() => setShowModal(true)}
          >
            <div className="text-4xl text-gray-500">+</div>
            <div className="text-gray-600 font-semibold mt-2">New Resume</div>
          </div>

          {/* Resumes */}
          {savedResumes.map((resume) => (
            <div key={resume.id} className="bg-white rounded-lg shadow p-4">
              <div className="h-48 bg-[#3F7D58] rounded mb-4"></div>
              <h3 className="font-semibold text-[#3F3F3F]">{resume.name}</h3>
              <p className="text-sm text-gray-500">Edited {resume.updated} • A4</p>
            </div>
          ))}
        </div>
      </main>

      <TemplatePickerModal
        isOpen={showModal}
        onSelectTemplate={() => {
          setShowModal(false);
          navigate('/builder');
        }}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
};

export default Dashboard;
