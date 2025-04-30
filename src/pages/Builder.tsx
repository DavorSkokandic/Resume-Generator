import React from 'react';
import { useState } from 'react';
import StepIndicator from '../components/StepIndicator';
import NavigationButtons from '../components/NavigationButtons';
import StepWrapper from '../components/StepWrapper';

const steps = [
    'Personal Info',
    'Summary',
    'Experience',
    'Education',
    'Skills',
    'Projects',
    'Certifications',
    'Languages',
    'Links',
    'Finish',
  ];

const Builder: React.FC = () =>{

    const [currentStep, setCurrentStep] = useState(0);
    const handleNext = () => {
        if(currentStep<steps.length-1) setCurrentStep(prev => prev+1)
    };
const handleBack = () => {
    if(currentStep>0) setCurrentStep(prev => prev-1)
};

    return(
        <div className="min-h-screen bg-[#EFEFEF] px-4 py-8 md:px-16 lg:px-24">
            <StepIndicator steps ={steps} currentStep={currentStep}/>
            {currentStep === 0 && (
        <StepWrapper
          title="Personal Information"
          description="Fill in your contact details so employers can reach you."
        >
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#EC5228]"
              placeholder="First Name"
              type="text"
            />
            <input
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#EC5228]"
              placeholder="Last Name"
              type="text"
            />
            <input
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#EC5228]"
              placeholder="Email Address"
              type="email"
            />
            <input
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#EC5228]"
              placeholder="Phone Number"
              type="tel"
            />
            <input
              className="col-span-1 sm:col-span-2 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#EC5228]"
              placeholder="Location (City, Country)"
              type="text"
            />
          </form>
        </StepWrapper>
      )}

      <NavigationButtons onNext={handleNext} onBack={handleBack} currentStep={currentStep} totalSteps={steps.length} />
    </div>
  );
};

export default Builder;