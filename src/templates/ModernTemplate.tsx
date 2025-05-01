import React from "react";
import { useResumeContext } from "../context/ResumeContext";

const ModernTemplate: React.FC = () => {
  const { formData } = useResumeContext();

  return (
    <div className="max-w-a4 mx-auto bg-white shadow-lg rounded-lg overflow-hidden text-[#222] border border-gray-200 print:shadow-none print:border-none">
      {/* Header */}
      <div className="bg-[#3F7D58] text-white p-8 pb-6 flex flex-col items-center">
        <h1 className="text-3xl font-bold tracking-tight">{formData.name || "Your Name"}</h1>
        <p className="text-lg mt-1">{formData.title || "Your Title"}</p>
        <div className="flex flex-wrap gap-4 mt-4 text-sm justify-center">
          {formData.email && <span>{formData.email}</span>}
          {formData.phone && <span>{formData.phone}</span>}
          {formData.location && <span>{formData.location}</span>}
          {formData.linkedin && (
            <a href={formData.linkedin} target="_blank" rel="noopener noreferrer" className="underline">
              LinkedIn
            </a>
          )}
          {formData.website && (
            <a href={formData.website} target="_blank" rel="noopener noreferrer" className="underline">
              Website
            </a>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8 space-y-8">
        {/* Summary */}
        {formData.summary && (
          <section>
            <h2 className="text-xl font-semibold text-[#3F7D58] mb-2">Professional Summary</h2>
            <p className="text-gray-800">{formData.summary}</p>
          </section>
        )}

        {/* Experience */}
        {formData.experience && formData.experience.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold text-[#3F7D58] mb-2">Work Experience</h2>
            <div className="space-y-4">
              {formData.experience.map((exp: any, idx: number) => (
                <div key={exp.id || idx}>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-semibold">{exp.title}</span>
                      {exp.company && <span className="ml-2 text-gray-700">@ {exp.company}</span>}
                      {exp.location && <span className="ml-2 text-gray-500">({exp.location})</span>}
                    </div>
                    <div className="text-sm text-gray-500">
                      {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                    </div>
                  </div>
                  {exp.description && exp.description.length > 0 && (
                    <ul className="list-disc list-inside mt-2 text-gray-700">
                      {exp.description.map((desc: string, i: number) =>
                        desc ? <li key={i}>{desc}</li> : null
                      )}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education */}
        {formData.education && formData.education.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold text-[#3F7D58] mb-2">Education</h2>
            <div className="space-y-4">
              {formData.education.map((edu: any, idx: number) => (
                <div key={edu.id || idx}>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-semibold">{edu.degree}</span>
                      {edu.school && <span className="ml-2 text-gray-700">@ {edu.school}</span>}
                      {edu.location && <span className="ml-2 text-gray-500">({edu.location})</span>}
                    </div>
                    <div className="text-sm text-gray-500">
                      {edu.startDate} - {edu.endDate}
                    </div>
                  </div>
                  {edu.description && (
                    <p className="mt-1 text-gray-700">{edu.description}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills */}
        {formData.skills && formData.skills.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold text-[#3F7D58] mb-2">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {formData.skills.map((skill: string, idx: number) => (
                <span
                  key={idx}
                  className="bg-[#3F7D58] text-white px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Projects */}
        {formData.projects && formData.projects.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold text-[#3F7D58] mb-2">Projects</h2>
            <div className="space-y-4">
              {formData.projects.map((project: any, idx: number) => (
                <div key={project.id || idx}>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">{project.title}</span>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#3F7D58] underline text-sm"
                      >
                        Link
                      </a>
                    )}
                  </div>
                  {project.description && (
                    <p className="mt-1 text-gray-700">{project.description}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Certifications */}
        {formData.certifications && formData.certifications.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold text-[#3F7D58] mb-2">Certifications</h2>
            <ul className="space-y-2">
              {formData.certifications.map((cert: any, idx: number) => (
                <li key={cert.id || idx}>
                  <span className="font-semibold">{cert.title}</span>
                  {cert.issuer && <span className="ml-2 text-gray-700">({cert.issuer})</span>}
                  {cert.date && <span className="ml-2 text-gray-500">{cert.date}</span>}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Languages */}
        {formData.languages && formData.languages.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold text-[#3F7D58] mb-2">Languages</h2>
            <ul className="flex flex-wrap gap-4">
              {formData.languages.map((lang: any, idx: number) => (
                <li key={lang.id || idx} className="text-gray-800">
                  {lang.language}
                  {lang.proficiency && (
                    <span className="ml-1 text-gray-500">({lang.proficiency})</span>
                  )}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Hobbies */}
        {formData.hobbies && (
          <section>
            <h2 className="text-xl font-semibold text-[#3F7D58] mb-2">Hobbies & Interests</h2>
            <p className="text-gray-800">{formData.hobbies}</p>
          </section>
        )}
      </div>
    </div>
  );
};

export default ModernTemplate;
