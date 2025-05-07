import React from 'react';

interface StepIndicatorProps {
  steps: string[];
  currentStep: number;
  onStepClick?: (index: number) => void;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ steps, currentStep, onStepClick }) => {
  return (
    <div className="flex items-center justify-between px-2 w-full max-w-full overflow-hidden py-6">
      {steps.map((label, index) => {
        const isCompleted = index < currentStep;
        const isActive = index === currentStep;

        return (
          <React.Fragment key={index}>
            {/* Circle */}
            <div
              className={`flex flex-col items-center z-10 cursor-pointer group transition-all duration-300 hover:scale-110
                ${isActive ? 'scale-110' : ''}
              `}
              onClick={() => onStepClick && onStepClick(index)}
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <div
                className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-semibold
                  transition-all duration-300
                  ${isCompleted || isActive
                    ? 'bg-[#EC5228] border-[#EC5228] text-white'
                    : 'bg-white border-gray-400 text-gray-500'
                  }`}
              >
                {index + 1}
              </div>
             
            </div>

            {/* Line (except after last circle) */}
            {index < steps.length - 1 && (
              <div className="flex-1 h-1 relative -mx-1">
                <div
                  className={`absolute top-1/2 transform -translate-y-1/2 h-1 w-full rounded-full transition-all duration-500
                    ${isCompleted ? 'bg-[#EC5228]' : 'bg-gray-200'}
                  `}
                />
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default StepIndicator;
