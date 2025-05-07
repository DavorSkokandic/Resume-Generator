// src/pages/Builder.tsx
import React, { useRef, useState } from 'react';
import { useResumeContext } from '../context/ResumeContext';
import StepIndicator from '../components/StepIndicator';
import { ResumePreview } from '../components/ResumePreview';
import { PDFExport } from '../components/PDFExport';
import PersonalInfoForm from '../components/steps/PersonalInfoForm';
import TemplateSwitcher from '../components/TemplateSwitcher';
import SummaryForm from '../components/steps/SummaryForm';
import ExperienceForm from '../components/steps/ExperienceForm';
import EducationForm from '../components/steps/EducationForm';
import SkillsForm from '../components/steps/SkillsForm';
import ProjectsForm from '../components/steps/ProjectsForm';
import CertificationsForm from '../components/steps/CertificationsForm';
import LanguagesForm from '../components/steps/LanguangesForm';
import HobbiesForm from '../components/steps/HobbiesForm';

const steps = [
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

  const renderCurrentForm = () => {
    switch (currentStep) {
      case 0:
        return <PersonalInfoForm />;
      case 1:
        return <SummaryForm />;
      case 2:
        return <ExperienceForm />;
      case 3:
        return <EducationForm />;
      case 4:
        return <SkillsForm />;
      case 5:
        return <ProjectsForm />;
      case 6:
        return <CertificationsForm />;
      case 7:
        return <LanguagesForm />;
      case 8:
        return <HobbiesForm />;
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left: Form Section */}
      <div className="w-1/2 overflow-y-auto p-6 bg-[#EFEFEF]">
        <StepIndicator
          steps={steps}
          currentStep={currentStep}
          onStepClick={(index) => setCurrentStep(index)}
        />

        {/* Active Step Form */}
        <div className="mt-8">
          {renderCurrentForm()}

          {/* Navigation Buttons */}
          <div className="mt-6 flex justify-between">
            <button
              onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 0))}
              disabled={currentStep === 0}
              className="px-4 py-2 bg-gray-400 text-white rounded disabled:opacity-50 hover:bg-gray-500"
            >
              Back
            </button>

            <button
              onClick={() => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))}
              disabled={currentStep === steps.length - 1}
              className="px-4 py-2 bg-[#EC5228] text-white rounded disabled:opacity-50 hover:bg-[#d4481f]"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Right: Live Preview */}
      <div className="w-1/2 bg-white p-6 overflow-y-auto">
        <div className="sticky top-0 z-10 bg-white pb-4 mb-4 flex justify-between items-center">
          <TemplateSwitcher />
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
