import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useResumeContext } from '../../context/ResumeContext';

const ProjectsForm: React.FC = () => {
  const { formData, updateFormData } = useResumeContext();

  const addProject = () => {
    const newProject = {
      id: uuidv4(),
      title: '',
      link: '',
      description: ''
    };
    updateFormData('projects', [...formData.projects, newProject]);
  };

  const updateProject = (index: number, field: string, value: any) => {
    const updated = [...formData.projects];
    updated[index] = { ...updated[index], [field]: value };
    updateFormData('projects', updated);
  };

  const removeProject = (index: number) => {
    const updated = formData.projects.filter((_, i) => i !== index);
    updateFormData('projects', updated);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-[#3F7D58]">Projects</h2>
      {formData.projects.map((project, index) => (
        <div key={project.id} className="p-4 border rounded-md bg-white">
          <div className="flex justify-between">
            <h3 className="font-semibold">Project #{index + 1}</h3>
            <button
              onClick={() => removeProject(index)}
              className="text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          </div>
          <div className="grid grid-cols-1 gap-4 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Project Title</label>
              <input
                type="text"
                value={project.title}
                onChange={e => updateProject(index, 'title', e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Project Link</label>
              <input
                type="url"
                value={project.link}
                onChange={e => updateProject(index, 'link', e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                value={project.description}
                onChange={e => updateProject(index, 'description', e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                rows={2}
              />
            </div>
          </div>
        </div>
      ))}
      <button
        type="button"
        onClick={addProject}
        className="px-4 py-2 bg-[#3F7D58] text-white rounded hover:bg-[#2D5A3F]"
      >
        + Add Project
      </button>
    </div>
  );
};

export default ProjectsForm;
