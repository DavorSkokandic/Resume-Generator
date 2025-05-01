// src/components/steps/PersonalInfoForm.tsx
import React from 'react';
import { useResumeContext } from '../../context/ResumeContext';

export const PersonalInfoForm: React.FC = () => {
  const { formData, updateFormData } = useResumeContext();
  
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-[#3F7D58]">Personal Information</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => updateFormData('name', e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-[#3F7D58] focus:border-[#3F7D58]"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Job Title</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => updateFormData('title', e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-[#3F7D58] focus:border-[#3F7D58]"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => updateFormData('email', e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-[#3F7D58] focus:border-[#3F7D58]"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => updateFormData('phone', e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-[#3F7D58] focus:border-[#3F7D58]"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">LinkedIn</label>
          <input
            type="url"
            value={formData.linkedin}
            onChange={(e) => updateFormData('linkedin', e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-[#3F7D58] focus:border-[#3F7D58]"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Website/Portfolio</label>
          <input
            type="url"
            value={formData.website}
            onChange={(e) => updateFormData('website', e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-[#3F7D58] focus:border-[#3F7D58]"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <input
            type="text"
            value={formData.location}
            onChange={(e) => updateFormData('location', e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-[#3F7D58] focus:border-[#3F7D58]"
          />
        </div>
      </div>
    </div>
  );
};
