//src/components/steps/ExperienceForm.tsx
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useResumeContext } from '../../context/ResumeContext';

const ExperienceForm: React.FC = () => {
  const { formData, updateFormData } = useResumeContext();
  
  const addExperience = () => {
    const newExperience = {
      id: uuidv4(),
      title: '',
      company: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      description: ['']
    };
    
    updateFormData('experience', [...formData.experience, newExperience]);
  };
  
  const updateExperience = (index: number, field: string, value: any) => {
    const updatedExperience = [...formData.experience];
    updatedExperience[index] = {
      ...updatedExperience[index],
      [field]: value
    };
    updateFormData('experience', updatedExperience);
  };
  
  const addBulletPoint = (expIndex: number) => {
    const updatedExperience = [...formData.experience];
    updatedExperience[expIndex].description = [
      ...updatedExperience[expIndex].description,
      ''
    ];
    updateFormData('experience', updatedExperience);
  };
  
  const updateBulletPoint = (expIndex: number, bulletIndex: number, value: string) => {
    const updatedExperience = [...formData.experience];
    updatedExperience[expIndex].description[bulletIndex] = value;
    updateFormData('experience', updatedExperience);
  };
  
  const removeExperience = (index: number) => {
    const updatedExperience = formData.experience.filter((_, i) => i !== index);
    updateFormData('experience', updatedExperience);
  };
  
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-[#3F7D58]">Work Experience</h2>
      
      {formData.experience.map((exp, index) => (
        <div key={exp.id} className="p-4 border rounded-md bg-white">
          <div className="flex justify-between">
            <h3 className="font-semibold">Experience #{index + 1}</h3>
            <button 
              onClick={() => removeExperience(index)}
              className="text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Job Title</label>
              <input
                type="text"
                value={exp.title}
                onChange={(e) => updateExperience(index, 'title', e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Company</label>
              <input
                type="text"
                value={exp.company}
                onChange={(e) => updateExperience(index, 'company', e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Location</label>
              <input
                type="text"
                value={exp.location}
                onChange={(e) => updateExperience(index, 'location', e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Start Date</label>
              <input
                type="text"
                value={exp.startDate}
                onChange={(e) => updateExperience(index, 'startDate', e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                placeholder="MM/YYYY"
              />
            </div>
            
            <div className="flex items-center mt-2">
              <input
                type="checkbox"
                checked={exp.current}
                onChange={(e) => updateExperience(index, 'current', e.target.checked)}
                className="h-4 w-4 text-[#3F7D58] focus:ring-[#3F7D58]"
              />
              <label className="ml-2 text-sm text-gray-700">I currently work here</label>
            </div>
            
            {!exp.current && (
              <div>
                <label className="block text-sm font-medium text-gray-700">End Date</label>
                <input
                  type="text"
                  value={exp.endDate}
                  onChange={(e) => updateExperience(index, 'endDate', e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  placeholder="MM/YYYY"
                />
              </div>
            )}
          </div>
          
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Description/Achievements</label>
            
            {exp.description.map((bullet, bulletIndex) => (
              <div key={bulletIndex} className="flex items-center mt-2">
                <span className="mr-2">•</span>
                <input
                  type="text"
                  value={bullet}
                  onChange={(e) => updateBulletPoint(index, bulletIndex, e.target.value)}
                  className="block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  placeholder="Describe your achievements..."
                />
              </div>
            ))}
            
            <button
              type="button"
              onClick={() => addBulletPoint(index)}
              className="mt-2 text-sm text-[#3F7D58] hover:text-[#2D5A3F]"
            >
              + Add bullet point
            </button>
          </div>
        </div>
      ))}
      
      <button
        type="button"
        onClick={addExperience}
        className="px-4 py-2 bg-[#3F7D58] text-white rounded hover:bg-[#2D5A3F]"
      >
        + Add Work Experience
      </button>
    </div>
  );
};
export default ExperienceForm;
