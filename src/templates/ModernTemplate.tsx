import React from 'react';
import { useResumeContext } from "../context/ResumeContext";

const ModernTemplate: React.FC = () => {
  const { formData } = useResumeContext();

  // Define RGB color values
  const primaryColor = 'rgb(63, 125, 88)';          // #3F7D58
  const headingColor = 'rgb(34, 34, 34)';           // #222
  const mutedTextColor = 'rgb(107, 114, 128)';      // gray-500
  const sectionTitleColor = 'rgb(63, 125, 88)';
  const white = 'rgb(255, 255, 255)';

  return (
    <div
      className="max-w-a4 mx-auto rounded-lg overflow-hidden border print:shadow-none print:border-none"
      style={{ backgroundColor: white, boxShadow: '0 0 10px rgba(0,0,0,0.08)', borderColor: '#E5E7EB' }}
    >
      {/* Header */}
      <div style={{ backgroundColor: primaryColor, color: white }} className="p-8 pb-6 flex flex-col items-center">
        <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold', letterSpacing: '-0.02em' }}>
          {formData.name || "Your Name"}
        </h1>
        <p style={{ fontSize: '1.125rem', marginTop: '0.25rem' }}>{formData.title || "Your Title"}</p>
        <div className="flex flex-wrap gap-4 mt-4 justify-center" style={{ fontSize: '0.875rem' }}>
          {formData.email && <span>{formData.email}</span>}
          {formData.phone && <span>{formData.phone}</span>}
          {formData.location && <span>{formData.location}</span>}
          {formData.linkedin && (
            <a href={formData.linkedin} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: white }}>
              LinkedIn
            </a>
          )}
          {formData.website && (
            <a href={formData.website} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: white }}>
              Website
            </a>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8 space-y-8" style={{ color: headingColor }}>
        {/* Summary */}
        {formData.summary && (
          <section>
            <h2 style={{ color: sectionTitleColor, fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>
              Professional Summary
            </h2>
            <p style={{ color: mutedTextColor }}>{formData.summary}</p>
          </section>
        )}

        {/* Experience */}
        {formData.experience?.length > 0 && (
          <section>
            <h2 style={{ color: sectionTitleColor, fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>
              Work Experience
            </h2>
            <div className="space-y-4">
              {formData.experience.map((exp, idx) => (
                <div key={exp.id || idx}>
                  <div className="flex justify-between items-center">
                    <div>
                      <span style={{ fontWeight: 600 }}>{exp.title}</span>
                      {exp.company && <span style={{ color: mutedTextColor, marginLeft: '0.5rem' }}>@ {exp.company}</span>}
                      {exp.location && <span style={{ color: mutedTextColor, marginLeft: '0.5rem' }}>({exp.location})</span>}
                    </div>
                    <div style={{ color: mutedTextColor, fontSize: '0.875rem' }}>
                      {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                    </div>
                  </div>
                  {exp.description?.length > 0 && (
                    <ul style={{ marginTop: '0.5rem', paddingLeft: '1rem', listStyle: 'disc', color: mutedTextColor }}>
                      {exp.description.map((desc, i) =>
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
        {formData.education?.length > 0 && (
          <section>
            <h2 style={{ color: sectionTitleColor, fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>
              Education
            </h2>
            <div className="space-y-4">
              {formData.education.map((edu, idx) => (
                <div key={edu.id || idx}>
                  <div className="flex justify-between items-center">
                    <div>
                      <span style={{ fontWeight: 600 }}>{edu.degree}</span>
                      {edu.school && <span style={{ color: mutedTextColor, marginLeft: '0.5rem' }}>@ {edu.school}</span>}
                      {edu.location && <span style={{ color: mutedTextColor, marginLeft: '0.5rem' }}>({edu.location})</span>}
                    </div>
                    <div style={{ color: mutedTextColor, fontSize: '0.875rem' }}>
                      {edu.startDate} - {edu.endDate}
                    </div>
                  </div>
                  {edu.description && (
                    <p style={{ color: mutedTextColor, marginTop: '0.25rem' }}>{edu.description}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills */}
        {formData.skills?.length > 0 && (
          <section>
            <h2 style={{ color: sectionTitleColor, fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>Skills</h2>
            <div className="flex flex-wrap gap-2">
              {formData.skills.map((skill, idx) => (
                <span
                  key={idx}
                  style={{
                    backgroundColor: primaryColor,
                    color: white,
                    padding: '0.25rem 0.75rem',
                    borderRadius: '9999px',
                    fontSize: '0.875rem',
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Projects */}
        {formData.projects?.length > 0 && (
          <section>
            <h2 style={{ color: sectionTitleColor, fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>Projects</h2>
            <div className="space-y-4">
              {formData.projects.map((project, idx) => (
                <div key={project.id || idx}>
                  <div className="flex justify-between items-center">
                    <span style={{ fontWeight: 600 }}>{project.title}</span>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: primaryColor, textDecoration: 'underline', fontSize: '0.875rem' }}
                      >
                        Link
                      </a>
                    )}
                  </div>
                  {project.description && (
                    <p style={{ color: mutedTextColor, marginTop: '0.25rem' }}>{project.description}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Certifications */}
        {formData.certifications?.length > 0 && (
          <section>
            <h2 style={{ color: sectionTitleColor, fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>Certifications</h2>
            <ul className="space-y-2">
              {formData.certifications.map((cert, idx) => (
                <li key={cert.id || idx}>
                  <span style={{ fontWeight: 600 }}>{cert.title}</span>
                  {cert.issuer && <span style={{ color: mutedTextColor, marginLeft: '0.5rem' }}>({cert.issuer})</span>}
                  {cert.date && <span style={{ color: mutedTextColor, marginLeft: '0.5rem' }}>{cert.date}</span>}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Languages */}
        {formData.languages?.length > 0 && (
          <section>
            <h2 style={{ color: sectionTitleColor, fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>Languages</h2>
            <ul className="flex flex-wrap gap-4">
              {formData.languages.map((lang, idx) => (
                <li key={lang.id || idx} style={{ color: mutedTextColor }}>
                  {lang.name}
                  {lang.proficiency && (
                    <span style={{ marginLeft: '0.25rem' }}>({lang.proficiency})</span>
                  )}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Hobbies */}
        {formData.hobbies && (
          <section>
            <h2 style={{ color: sectionTitleColor, fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>Hobbies & Interests</h2>
            <p style={{ color: mutedTextColor }}>{formData.hobbies}</p>
          </section>
        )}
      </div>
    </div>
  );
};

export default ModernTemplate;
