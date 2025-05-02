import React from 'react';
import { useResumeContext } from '../context/ResumeContext';

const CleanTemplate: React.FC = () => {
  const { formData } = useResumeContext();

  // RGB color palette
  const darkText = 'rgb(34, 34, 34)';
  const softText = 'rgb(107, 114, 128)';
  const accent = 'rgb(239, 150, 81)';
  const border = 'rgb(229, 231, 235)'; // gray-200

  return (
    <div className="max-w-[794px] mx-auto p-10 bg-white shadow-md border border-gray-200 text-sm text-[rgb(34,34,34)]">
      {/* Header */}
      <header className="text-center border-b pb-6 mb-6">
        <h1 className="text-3xl font-bold">{formData.name || 'Your Name'}</h1>
        <p className="text-lg font-medium">{formData.title || 'Your Title'}</p>
        <div className="mt-2 text-[rgb(107,114,128)] text-sm space-x-3">
          {formData.email && <span>{formData.email}</span>}
          {formData.phone && <span>{formData.phone}</span>}
          {formData.location && <span>{formData.location}</span>}
          {formData.linkedin && <a href={formData.linkedin} className="underline" target="_blank">LinkedIn</a>}
          {formData.website && <a href={formData.website} className="underline" target="_blank">Website</a>}
        </div>
      </header>

      {/* Summary */}
      {formData.summary && (
        <section className="mb-6">
          <h2 className="text-base font-semibold uppercase text-[rgb(239,150,81)] mb-2">Summary</h2>
          <p className="text-[rgb(107,114,128)]">{formData.summary}</p>
        </section>
      )}

      {/* Experience */}
      {formData.experience.length > 0 && (
        <section className="mb-6">
          <h2 className="text-base font-semibold uppercase text-[rgb(239,150,81)] mb-2">Experience</h2>
          {formData.experience.map((exp, i) => (
            <div key={i} className="mb-3">
              <div className="flex justify-between font-semibold">
                <span>{exp.title} @ {exp.company}</span>
                <span className="text-xs text-[rgb(107,114,128)]">{exp.startDate} – {exp.current ? 'Present' : exp.endDate}</span>
              </div>
              <p className="italic text-[rgb(107,114,128)]">{exp.location}</p>
              <ul className="list-disc list-inside text-[rgb(107,114,128)]">
                {exp.description?.map((d, idx) => d && <li key={idx}>{d}</li>)}
              </ul>
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {formData.education.length > 0 && (
        <section className="mb-6">
          <h2 className="text-base font-semibold uppercase text-[rgb(239,150,81)] mb-2">Education</h2>
          {formData.education.map((edu, i) => (
            <div key={i} className="mb-3">
              <div className="flex justify-between font-semibold">
                <span>{edu.degree} @ {edu.school}</span>
                <span className="text-xs text-[rgb(107,114,128)]">{edu.startDate} – {edu.endDate}</span>
              </div>
              <p className="italic text-[rgb(107,114,128)]">{edu.location}</p>
              {edu.description && <p className="text-[rgb(107,114,128)]">{edu.description}</p>}
            </div>
          ))}
        </section>
      )}

      {/* Skills */}
      {formData.skills.length > 0 && (
        <section className="mb-6">
          <h2 className="text-base font-semibold uppercase text-[rgb(239,150,81)] mb-2">Skills</h2>
          <div className="flex flex-wrap gap-2 text-[rgb(34,34,34)] text-sm">
            {formData.skills.map((skill, i) => (
              <span key={i} className="px-3 py-1 bg-gray-100 border border-gray-300 rounded">{skill}</span>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {formData.projects.length > 0 && (
        <section className="mb-6">
          <h2 className="text-base font-semibold uppercase text-[rgb(239,150,81)] mb-2">Projects</h2>
          {formData.projects.map((p, i) => (
            <div key={i} className="mb-2">
              <div className="flex justify-between font-semibold">
                <span>{p.title}</span>
                {p.link && (
                  <a href={p.link} target="_blank" className="text-sm underline text-[rgb(63,125,88)]">
                    Link
                  </a>
                )}
              </div>
              {p.description && <p className="text-[rgb(107,114,128)]">{p.description}</p>}
            </div>
          ))}
        </section>
      )}

      {/* Certifications */}
      {formData.certifications.length > 0 && (
        <section className="mb-6">
          <h2 className="text-base font-semibold uppercase text-[rgb(239,150,81)] mb-2">Certifications</h2>
          <ul className="space-y-1">
            {formData.certifications.map((cert, i) => (
              <li key={i} className="text-[rgb(34,34,34)]">
                <strong>{cert.title}</strong> — {cert.issuer} <span className="text-[rgb(107,114,128)]">({cert.date})</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Languages */}
      {formData.languages.length > 0 && (
        <section className="mb-6">
          <h2 className="text-base font-semibold uppercase text-[rgb(239,150,81)] mb-2">Languages</h2>
          <ul className="flex flex-wrap gap-3 text-[rgb(107,114,128)]">
            {formData.languages.map((lang, i) => (
              <li key={i}>
                {lang.name} <span className="text-sm">({lang.proficiency})</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Hobbies */}
      {formData.hobbies && (
        <section>
          <h2 className="text-base font-semibold uppercase text-[rgb(239,150,81)] mb-2">Hobbies & Interests</h2>
          <p className="text-[rgb(107,114,128)]">{formData.hobbies}</p>
        </section>
      )}
    </div>
  );
};

export default CleanTemplate;
