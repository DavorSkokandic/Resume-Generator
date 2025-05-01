import React from 'react'

interface StepWrapperProps {
    title: string;
    description?: string;
    children: React.ReactNode;
  }
  
  const StepWrapper: React.FC<StepWrapperProps> = ({ title, description, children }) => {
    return (
      <div className="bg-white shadow-md rounded-lg p-8 max-w-3xl mx-auto w-full">
        <h2 className="text-2xl font-semibold text-[#3F7D58]">{title}</h2>
        {description && <p className="text-gray-600 mb-6">{description}</p>}
        <div>{children}</div>
      </div>
    );
  };
  
  export default StepWrapper;