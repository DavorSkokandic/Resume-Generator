// src/components/TemplatePickerModal.tsx
import React from 'react';
import { useResumeContext } from '../context/ResumeContext';

interface TemplateOption {
  id: string;
  name: string;
  image: string;
}

interface Props {
  isOpen: boolean;
  onSelectTemplate: () => void;
}

const TemplatePickerModal: React.FC<Props> = ({ isOpen, onSelectTemplate }) => {
  const { setSelectedTemplate } = useResumeContext();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-3xl shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-[#3F7D58]">Choose Your Resume Template</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { id: 'modern', name: 'Modern', image: '/templates/modern.png' },
            { id: 'clean', name: 'Clean', image: '/templates/clean.png' },
          ].map((template) => (
            <div
              key={template.id}
              onClick={() => {
                setSelectedTemplate(template.id);
                onSelectTemplate();
              }}
              className="cursor-pointer border rounded-md overflow-hidden hover:ring-2 ring-[#3F7D58] transition"
            >
              <img src={template.image} alt={template.name} className="w-full h-48 object-cover" />
              <p className="text-center py-2 font-semibold">{template.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TemplatePickerModal;
