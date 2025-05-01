import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useResumeContext } from '../../context/ResumeContext';

const proficiencyOptions = ['Native', 'Fluent', 'Intermediate', 'Basic'];

const LanguagesForm: React.FC = () => {
  const { formData, updateFormData } = useResumeContext();

  const addLanguage = () => {
    const newLang = {
      id: uuidv4(),
      language: '',
      proficiency: ''
    };
    updateFormData('languages', [...formData.languages, newLang]);
  };

  const updateLanguage = (index: number, field: string, value: any) => {
    const updated = [...formData.languages];
    updated[index] = { ...updated[index], [field]: value };
    updateFormData('languages', updated);
  };

  const removeLanguage = (index: number) => {
    const updated = formData.languages.filter((_, i) => i !== index);
    updateFormData('languages', updated);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-[#3F7D58]">Languages</h2>
      {formData.languages.map((lang, index) => (
        <div key={lang.id} className="p-4 border rounded-md bg-white grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          <div>
            <label className="block text-sm font-medium text-gray-700">Language</label>
            <input
              type="text"
              value={lang.name}
              onChange={e => updateLanguage(index, 'language', e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Proficiency</label>
            <select
              value={lang.proficiency}
              onChange={e => updateLanguage(index, 'proficiency', e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            >
              <option value="">Select proficiency</option>
              {proficiencyOptions.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
          <button
            type="button"
            onClick={() => removeLanguage(index)}
            className="text-red-500 hover:text-red-700 mt-6 md:mt-0"
          >
            Remove
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={addLanguage}
        className="px-4 py-2 bg-[#3F7D58] text-white rounded hover:bg-[#2D5A3F]"
      >
        + Add Language
      </button>
    </div>
  );
};

export default LanguagesForm;
