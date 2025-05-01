// src/components/ResumePreview.tsx
import React from 'react';
import { useResumeContext } from '../context/ResumeContext';
import  ModernTemplate  from '../templates/ModernTemplate';
//import { ClassicTemplate } from '../templates/ClassicTemplate';

export const ResumePreview: React.FC = () => {
  const { selectedTemplate, formData } = useResumeContext();
  
  // Render different templates based on selection
  switch (selectedTemplate) {
    case 'modern':
      return <ModernTemplate  />;
    case 'classic':
      //return <ClassicTemplate data={formData} />;
    default:
      return <ModernTemplate />;
  }
};
