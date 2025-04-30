import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="bg-[#EFEFEF] text-[#3F7D58]">
      {/* Hero Section */}
      <section className="px-6 py-20 text-center">
        <h1 className="text-5xl font-extrabold text-black mb-6">Build a professional resume fast</h1>
        <p className="text-xl mb-8 text-[#3F7D58] max-w-2xl mx-auto">
          Your first resume is 100% free – with powerful templates and unlimited downloads.
        </p>
        <Link to="/builder" className="bg-[#EC5228] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#EF9651] transition">
          Get Started – It's Free 
        </Link>
      </section>

      {/* 3-Step Guide Section */}
      <section className="px-6 py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-12 text-[#3F7D58]">Just 3 easy steps</h2>
        <div className="grid md:grid-cols-3 gap-8 text-left max-w-6xl mx-auto">
          <div className="bg-[#EFEFEF] p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-[#EC5228] mb-2">1. Choose a template</h3>
            <p>Select a modern, ATS-friendly resume layout that fits your style and profession.</p>
          </div>
          <div className="bg-[#EFEFEF] p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-[#EC5228] mb-2">2. Fill in your details</h3>
            <p>Use our smart editor to add your experience, skills, and education with tips along the way.</p>
          </div>
          <div className="bg-[#EFEFEF] p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-[#EC5228] mb-2">3. Download & apply</h3>
            <p>Export your resume as a PDF and start applying for your dream job immediately.</p>
          </div>
        </div>
      </section>

      {/* Resume Templates Carousel (Placeholder) */}
      <section className="px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-8 text-[#3F7D58]">Resume Templates</h2>
        <div className="overflow-x-auto whitespace-nowrap px-4 py-4">
          {/* Replace these divs with actual <img /> or component carousel */}
          <div className="inline-block w-64 h-96 bg-gray-200 rounded-lg mx-2 shadow">Template 1</div>
          <div className="inline-block w-64 h-96 bg-gray-300 rounded-lg mx-2 shadow">Template 2</div>
          <div className="inline-block w-64 h-96 bg-gray-200 rounded-lg mx-2 shadow">Template 3</div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="bg-[#3F7D58] text-white text-center py-12">
        <h2 className="text-2xl font-bold mb-4">Ready to create your resume?</h2>
        <Link to="/builder" className="bg-white text-[#3F7D58] font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition">
          Start Now
        </Link>
      </footer>
    </div>
  );
};



export default Home;
