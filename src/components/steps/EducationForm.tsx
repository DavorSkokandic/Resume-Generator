import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useResumeContext } from '../../context/ResumeContext';

const EducationForm: React.FC = () => {
  const { formData, updateFormData } = useResumeContext();

  const addEducation = () => {
    const newEducation = {
      id: uuidv4(),
      school: '',
      degree: '',
      location: '',
      startDate: '',
      endDate: '',
      description: ''
    };
    updateFormData('education', [...formData.education, newEducation]);
  };

  const updateEducation = (index: number, field: string, value: any) => {
    const updatedEducation = [...formData.education];
    updatedEducation[index] = { ...updatedEducation[index], [field]: value };
    updateFormData('education', updatedEducation);
  };

  const removeEducation = (index: number) => {
    const updatedEducation = formData.education.filter((_, i) => i !== index);
    updateFormData('education', updatedEducation);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-[#3F7D58]">Education</h2>
      {formData.education.map((edu, index) => (
        <div key={edu.id} className="p-4 border rounded-md bg-white">
          <div className="flex justify-between">
            <h3 className="font-semibold">Education #{index + 1}</h3>
            <button
              onClick={() => removeEducation(index)}
              className="text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">School / Institution</label>
              <input
                type="text"
                value={edu.school}
                onChange={e => updateEducation(index, 'school', e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Degree / Program</label>
              <input
                type="text"
                value={edu.degree}
                onChange={e => updateEducation(index, 'degree', e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Location</label>
              <input
                type="text"
                value={edu.location}
                onChange={e => updateEducation(index, 'location', e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Start Date</label>
              <input
                type="text"
                value={edu.startDate}
                onChange={e => updateEducation(index, 'startDate', e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                placeholder="MM/YYYY"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">End Date</label>
              <input
                type="text"
                value={edu.endDate}
                onChange={e => updateEducation(index, 'endDate', e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                placeholder="MM/YYYY"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Description (optional)</label>
            <textarea
              value={edu.description}
              onChange={(e) => updateEducation(index, 'description', e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Describe any achievements, GPA, etc."
            />
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={addEducation}
        className="px-4 py-2 bg-[#3F7D58] text-white rounded hover:bg-[#2D5A3F]"
      >
        + Add Education
      </button>
    </div>
  );
};

export default EducationForm;
