// src/context/ResumeContext.tsx
import React, { createContext, useContext, useState } from 'react';

export interface ResumeData {
  // Personal Information
  name: string;
  title: string;
  email: string;
  phone: string;
  linkedin: string;
  website: string;
  location: string;
  
  // Professional Details
  summary: string;
  experience: Experience[];
  education: Education[];
  skills: string[];
  projects: Project[];
  certifications: Certification[];
  languages: Language[];
  hobbies: string;
}
interface Education {
    id: string;
    school: string;
    degree: string;
    location: string;
    startDate: string;
    endDate: string;
    description?: string; // Optional description of the program
}

interface Project {
    id: string;
    title: string;
    link?: string;       // Optional link to the project
    description: string;
    technologies: string[]; // Array of technologies used
    startDate?: string;  // Optional start date
    endDate?: string;    // Optional end date
}

interface Certification {
    id: string;
    title: string;
    issuer: string;
    date: string; // Could also be a Date object, but string is consistent
    expiryDate?: string; //Optional
    credentialId?: string; //Optional
    link?: string; //Optional
}

interface Language {
    id: string;
    name: string;
    proficiency: 'Beginner' | 'Elementary' | 'Intermediate' | 'Advanced' | 'Fluent' | 'Native';
}

interface Skill {
    id: string;
    name: string;
    level?: 'Beginner' | 'Intermediate' | 'Advanced'; // Optional level
}

interface Hobby {
    id: string;
    name: string;
    description?: string; // Optional description
}

interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string[];
}

// Similar interfaces for Education, Project, Certification, Language

interface ResumeContextType {
  selectedTemplate: string;
  setSelectedTemplate: (template: string) => void;
  formData: ResumeData;
  updateFormData: (field: string, value: any) => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
}

const defaultResumeData: ResumeData = {
  name: '',
  title: '',
  email: '',
  phone: '',
  linkedin: '',
  website: '',
  location: '',
  summary: '',
  experience: [],
  education: [],
  skills: [],
  projects: [],
  certifications: [],
  languages: [],
  hobbies: ''
};

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

export const ResumeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedTemplate, setSelectedTemplate] = useState<string>('modern');
  const [formData, setFormData] = useState<ResumeData>(defaultResumeData);
  const [currentStep, setCurrentStep] = useState<number>(0);

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <ResumeContext.Provider 
      value={{ 
        selectedTemplate, 
        setSelectedTemplate, 
        formData, 
        updateFormData,
        currentStep,
        setCurrentStep
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};

export const useResumeContext = () => {
  const context = useContext(ResumeContext);
  if (!context) throw new Error('useResumeContext must be used within ResumeProvider');
  return context;
};
