import React, { useState } from 'react';
import { useResumeContext } from '../../context/ResumeContext';

const SkillsForm: React.FC = () => {
  const { formData, updateFormData } = useResumeContext();
  const [skillInput, setSkillInput] = useState('');

  const addSkill = () => {
    const trimmed = skillInput.trim();
    if (trimmed && !formData.skills.includes(trimmed)) {
      updateFormData('skills', [...formData.skills, trimmed]);
      setSkillInput('');
    }
  };

  const removeSkill = (index: number) => {
    const updated = formData.skills.filter((_, i) => i !== index);
    updateFormData('skills', updated);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-[#3F7D58]">Skills</h2>
      <div className="flex space-x-2">
        <input
          type="text"
          placeholder="Add a skill"
          value={skillInput}
          onChange={e => setSkillInput(e.target.value)}
          className="flex-grow border border-gray-300 rounded-md shadow-sm p-2"
          onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), addSkill())}
        />
        <button
          type="button"
          onClick={addSkill}
          className="px-4 py-2 bg-[#3F7D58] text-white rounded hover:bg-[#2D5A3F]"
        >
          Add
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {formData.skills.map((skill: string, i: number) => (
          <div
            key={i}
            className="bg-[#3F7D58] text-white px-3 py-1 rounded flex items-center space-x-2"
          >
            <span>{skill}</span>
            <button
              type="button"
              onClick={() => removeSkill(i)}
              className="font-bold hover:text-red-300"
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsForm;
