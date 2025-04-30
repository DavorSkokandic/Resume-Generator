import React from 'react'

interface NavigationButtonProps{
    currentStep: number;
    totalSteps:number;
    onNext: ()=> void;
    onBack: ()=> void;
}

const NavigationButtons: React.FC<NavigationButtonProps>=({currentStep,totalSteps, onNext, onBack})=>{
    return (
        <div className="flex justify-between mt-8">
          {currentStep > 0 ? (
            <button
              onClick={onBack}
              className="px-6 py-2 rounded bg-gray-200 hover:bg-gray-300 text-gray-800"
            >
              Back
            </button>
          ) : (
            <div />
          )}
          <button
            onClick={onNext}
            className="px-6 py-2 rounded bg-[#EC5228] hover:bg-[#d4481f] text-white"
          >
            {currentStep === totalSteps - 1 ? "Submit" : "Next"}
          </button>
        </div>
      );
}
export default NavigationButtons;