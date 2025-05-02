import { useResumeContext } from '../context/ResumeContext';

const TemplateSwitcher = () => {
  const { selectedTemplate, setSelectedTemplate } = useResumeContext();

  return (
    <div className="absolute top-4 right-6 z-10">
      <select
        value={selectedTemplate}
        onChange={(e) => setSelectedTemplate(e.target.value)}
        className="border border-gray-300 px-3 py-1 rounded shadow-sm"
      >
        <option value="modern">Modern</option>
        <option value="clean">Clean</option>
      </select>
    </div>
  );
};

export default TemplateSwitcher;