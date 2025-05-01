import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useResumeContext } from '../../context/ResumeContext';

const CertificationsForm: React.FC = () => {
  const { formData, updateFormData } = useResumeContext();

  const addCertification = () => {
    const newCert = {
      id: uuidv4(),
      title: '',
      issuer: '',
      date: ''
    };
    updateFormData('certifications', [...formData.certifications, newCert]);
  };

  const updateCertification = (index: number, field: string, value: any) => {
    const updated = [...formData.certifications];
    updated[index] = { ...updated[index], [field]: value };
    updateFormData('certifications', updated);
  };

  const removeCertification = (index: number) => {
    const updated = formData.certifications.filter((_, i) => i !== index);
    updateFormData('certifications', updated);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-[#3F7D58]">Certifications</h2>
      {formData.certifications.map((cert, index) => (
        <div key={cert.id} className="p-4 border rounded-md bg-white">
          <div className="flex justify-between">
            <h3 className="font-semibold">Certification #{index + 1}</h3>
            <button
              onClick={() => removeCertification(index)}
              className="text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          </div>
          <div className="grid grid-cols-1 gap-4 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Certification Title</label>
              <input
                type="text"
                value={cert.title}
                onChange={e => updateCertification(index, 'title', e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Issuer</label>
              <input
                type="text"
                value={cert.issuer}
                onChange={e => updateCertification(index, 'issuer', e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Date</label>
              <input
                type="text"
                value={cert.date}
                onChange={e => updateCertification(index, 'date', e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                placeholder="MM/YYYY"
              />
            </div>
          </div>
        </div>
      ))}
      <button
        type="button"
        onClick={addCertification}
        className="px-4 py-2 bg-[#3F7D58] text-white rounded hover:bg-[#2D5A3F]"
      >
        + Add Certification
      </button>
    </div>
  );
};

export default CertificationsForm;
