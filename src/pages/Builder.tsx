// src/pages/Builder.tsx
import React, { useRef, useState } from 'react';
import { useResumeContext } from '../context/ResumeContext';
import StepIndicator  from '../components/StepIndicator';
import { FormSteps } from '../components/FormSteps';
import { ResumePreview } from '../components/ResumePreview';
import { PDFExport } from '../components/PDFExport';
import TemplateSwitcher from '../components/TemplateSwitcher';
const steps = [  // Moved 'steps' array outside the component
  'Personal',
  'Summary',
  'Experience',
  'Education',
  'Skills',
  'Projects',
  'Certifications',
  'Languages',
  'Hobbies',
];

const Builder: React.FC = () => {
  const { selectedTemplate } = useResumeContext();
  const resumeRef = useRef<HTMLDivElement>(null);
  const [currentStep, setCurrentStep] = useState(0);
  
  if (!selectedTemplate) {
    return <p className="p-4 text-red-500">No template selected. Please go back and choose one.</p>;
  }
  
  return (
    <div className="flex min-h-screen">
      {/* Form Section */}
      <div className="w-1/2 overflow-y-auto p-6 bg-[#EFEFEF]">
        <StepIndicator steps={steps} currentStep={currentStep}/>
        <FormSteps />
      </div>
      
      {/* Live Preview */}
      <div className="w-1/2 bg-white p-6 overflow-y-auto">
        <div className="sticky top-0 z-10 bg-white pb-4 mb-4 flex justify-between items-center">
        <TemplateSwitcher/>
          <h2 className="text-xl font-bold">Preview</h2>
          
          <PDFExport targetRef={resumeRef} />
        </div>
        
        <div ref={resumeRef}>
          <ResumePreview />
        </div>
      </div>
    </div>
  );
};

export default Builder;