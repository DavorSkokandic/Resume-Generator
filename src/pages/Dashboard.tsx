import React, { useState, useEffect } from 'react';
import { useNavigate }             from 'react-router-dom';
import Sidebar                      from '../components/Sidebar';
import TemplatePickerModal          from '../components/TemplatePickerModal';
import API                          from '../api/client';

interface Resume {
  id: number;
  name: string;
  updated_at: string;
}

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const [resumes, setResumes]     = useState<Resume[]>([]);
  const [loading, setLoading]     = useState(true);
  const [error, setError]         = useState<string|null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchResumes = async () => {
      try {
        const resp = await API.get('/resume');
        console.log('📡 RAW /api/resume response data:', resp.data);

        // If it's an array, use it. Otherwise bail to empty
        if (Array.isArray(resp.data)) {
          setResumes(resp.data);
        } else {
          console.warn('⚠️ /api/resume did not return an array, defaulting to []');
          setResumes([]);
        }
      } catch (err) {
        console.error('❌ Error fetching /api/resume:', err);
        setError('Failed to load resumes');
      } finally {
        setLoading(false);
      }
    };

    fetchResumes();
  }, []);

  const handleCreate = async (template: string) => {
    setShowModal(false);
    try {
      const resp = await API.post<Resume>('/resume', { template });
      setResumes(prev => [resp.data, ...prev]);
      navigate(`/builder?id=${resp.data.id}`);
    } catch (err) {
      console.error('❌ Error creating resume:', err);
      alert('Could not create resume');
    }
  };

  const handleEdit = (id: number) => {
    navigate(`/builder?id=${id}`);
  };

  return (
    <div className="flex h-screen bg-[#F5F3EF]">
      <Sidebar />

      <main className="flex-1 p-8 overflow-auto">
        <h2 className="text-3xl font-bold text-[#3F3F3F] mb-8">
          My Resumes
        </h2>

        {loading && <p>Loading…</p>}
        {error   && <p className="text-red-500">{error}</p>}

        {!loading && !error && (
          <>
            {resumes.length === 0 ? (
              <p className="text-gray-600 mb-6">
                You have no saved resumes yet.
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {/* New Resume */}
                <div
                  className="border-2 border-dashed rounded-lg p-6 text-center hover:shadow flex flex-col items-center justify-center cursor-pointer transition"
                  onClick={() => setShowModal(true)}
                >
                  <div className="text-4xl text-gray-500">+</div>
                  <div className="text-gray-600 font-semibold mt-2">
                    New Resume
                  </div>
                </div>

                {/* Existing */}
                {resumes.map(r => (
                  <div
                    key={r.id}
                    className="bg-white rounded-lg shadow p-4 cursor-pointer hover:shadow-lg transition"
                    onClick={() => handleEdit(r.id)}
                  >
                    <div className="h-48 bg-[#3F7D58] rounded mb-4 flex items-center justify-center text-white">
                      <span className="font-bold text-lg">
                        {r.name.charAt(0)}
                      </span>
                    </div>
                    <h3 className="font-semibold text-[#3F3F3F]">{r.name}</h3>
                    <p className="text-sm text-gray-500">
                      Edited {new Date(r.updated_at).toLocaleDateString()} • A4
                    </p>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </main>

      <TemplatePickerModal
        isOpen={showModal}
        onSelectTemplate={handleCreate}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
};

export default Dashboard;
