// src/components/FormSteps.tsx
import React from 'react';
import { useResumeContext } from '../context/ResumeContext';
import { useMultiStepForm } from '../hooks/useMultiStepForm';
import PersonalInfoForm  from './steps/PersonalInfoForm';
import  SummaryForm  from './steps/SummaryForm';
import ExperienceForm  from './steps/ExperienceForm';
import  EducationForm  from './steps/EducationForm';
import  SkillsForm  from './steps/SkillsForm';
import  ProjectsForm  from './steps/ProjectsForm';
import  CertificationsForm  from './steps/CertificationsForm';
import  LanguagesForm  from './steps/LanguangesForm';
import  HobbiesForm  from './steps/HobbiesForm';


interface FormStepsProps {
    formData: any;
    onChange: (field: string, value: any) => void;
    currentStep: number;
  }
export const FormSteps: React.FC = () => {
  const { currentStep, setCurrentStep } = useResumeContext();
  
  const { step, steps, isFirstStep, isLastStep, next, back } = useMultiStepForm([
    <PersonalInfoForm />,
    <SummaryForm />,
    <ExperienceForm />,
    <EducationForm />,
    <SkillsForm />,
    <ProjectsForm  />,
    <CertificationsForm />,
    <LanguagesForm />,
    <HobbiesForm />,
  ]);
  
  // Sync the context step with the multistep form
  React.useEffect(() => {
    setCurrentStep(steps.indexOf(step));
  }, [step, steps, setCurrentStep]);
  
  return (
    <div className="space-y-6">
      {step}
      
      <div className="flex justify-between mt-8">
        {!isFirstStep && (
          <button
            onClick={back}
            className="px-4 py-2 bg-[#EC5228] hover:bg-[#d4481f] rounded"
          >
            Back
          </button>
        )}
        
        <button
          onClick={next}
          className="px-4 py-2 bg-[#3F7D58] text-white rounded hover:bg-[#2D5A3F]"
        >
          {isLastStep ? 'Finish' : 'Next'}
        </button>
      </div>
    </div>
  );
};
