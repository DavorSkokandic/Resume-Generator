// src/templates/ModernTemplate.tsx
import React from 'react';
import { ResumeData } from '../context/ResumeContext';

interface ModernTemplateProps {
  data: ResumeData;
}

export const ModernTemplate: React.FC<ModernTemplateProps> = ({ data }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl mx-auto">
      {/* Header */}
      <div className="bg-[#3F7D58] text-white p-8">
        <h1 className="text-3xl font-bold">{data.name || 'Your Name'}</h1>
        <p className="text-xl mt-2">{data.title || 'Your Title'}</p>
        
        {/* Contact Info */}
        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          {data.email && <span>{data.email}</span>}
          {data.phone && <span>{data.phone}</span>}
          {data.location && <span>{data.location}</span>}
          {data.linkedin && <span>{data.linkedin}</span>}
          {data.website && <span>{data.website}</span>}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-8">
        {/* Summary */}
        {data.summary && (
          <div className="mb-6">
            <h2 className="text-xl font-bold text-[#3F7D58] border-b-2 border-[#3F7D58] pb-1 mb-3">
              Professional Summary
            </h2>
            <p>{data.summary}</p>
          </div>
        )}
        
        {/* Experience */}
        {data.experience && data.experience.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-bold text-[#3F7D58] border-b-2 border-[#3F7D58] pb-1 mb-3">
              Work Experience
            </h2>
            
            {data.experience.map((exp, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between">
                  <h3 className="font-bold">{exp.title}</h3>
                  <span className="text-gray-600">
                    {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                  </span>
                </div>
                <p className="text-[#3F7D58]">{exp.company}, {exp.location}</p>
                <ul className="list-disc list-inside mt-2">
                  {exp.description.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
        
        {/* Additional sections would go here */}
      </div>
    </div>
  );
};
