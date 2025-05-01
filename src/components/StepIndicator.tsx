import React from "react"

interface StepIndicatorProps
{
    steps: string[],
    currentStep: number
}
const StepIndicator:React.FC<StepIndicatorProps>=({steps, currentStep}) =>{

    return (
        <div className="flex items-center justify-center mb-8">
          {steps.map((label, index) => (
            <div key={index} className="flex items-center">
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full text-white font-bold 
                  ${index <= currentStep ? "bg-[#3F7D58]" : "bg-gray-300"}`}
              >
                {index + 1}
              </div>
              {index < steps.length - 1 && (
                <div className="w-10 h-1 bg-gray-300 mx-2 rounded-full"></div>
              )}
            </div>
          ))}
        </div>
      );
}


export default StepIndicator;