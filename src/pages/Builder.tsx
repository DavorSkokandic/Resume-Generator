import React from 'react';
import { useState } from 'react';
import StepIndicator from '../components/StepIndicator';


const Builder: React.FC = () =>{

    const steps = ['Personal Info', 'Experience', 'Skills', 'Review']
    const [currentStep, setCurrentStep] = useState(0);
    return(
        <div className='h-screen flex items-center justify-center bg-gray-100 text-2xl font-bold text-blue-600'>
            <StepIndicator steps ={steps} currentStep={currentStep}/>
        </div>
        
    )
}

export default Builder;