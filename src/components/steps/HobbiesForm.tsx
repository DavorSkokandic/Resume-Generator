import React from 'react';
import { useResumeContext } from '../../context/ResumeContext';

const HobbiesForm: React.FC = () => {
  const { formData, updateFormData } = useResumeContext();

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-[#3F7D58]">Hobbies & Interests</h2>
      <textarea
        className="w-full border border-gray-300 rounded-md shadow-sm p-2"
        placeholder="List your hobbies or interests"
        value={formData.hobbies || ''}
        onChange={e => updateFormData('hobbies', e.target.value)}
        rows={4}
      />
    </div>
  );
};

export default HobbiesForm;
