import React from 'react';
import { Link } from 'react-router-dom';

function Home(){
    return (
        <div className="bg-gray-50 text-gray-800 font-sans antialiased">
          {/* Hero Section */}
          <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-blue-100 px-6 py-24">
            <div className="container mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-extrabold text-indigo-700 mb-8 leading-tight">
                Craft Your Perfect Resume <span className="text-blue-600">in Minutes</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-12">
                Unlock your career potential with our intuitive resume builder. Create professional, ATS-friendly resumes effortlessly.
              </p>
              <Link
                to="/builder"
                className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 text-lg rounded-full shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl"
              >
                Get Started <span aria-hidden="true">→</span>
              </Link>
            </div>
          </section>
    
          {/* Features Section */}
          <section className="bg-white py-24 px-6">
            <div className="container mx-auto">
              <h2 className="text-3xl font-semibold text-center text-indigo-700 mb-16">
                Key Features
              </h2>
              <div className="grid md:grid-cols-3 gap-12">
                <div className="p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out text-center">
                  <h3 className="text-2xl font-semibold text-indigo-600 mb-4">Intuitive Interface</h3>
                  <p className="text-gray-700">
                    Build your resume with our easy-to-use, drag-and-drop interface.
                  </p>
                </div>
                <div className="p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out text-center">
                  <h3 className="text-2xl font-semibold text-indigo-600 mb-4">Professional Templates</h3>
                  <p className="text-gray-700">
                    Choose from a wide variety of modern, ATS-optimized templates.
                  </p>
                </div>
                <div className="p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out text-center">
                  <h3 className="text-2xl font-semibold text-indigo-600 mb-4">Effortless Export</h3>
                  <p className="text-gray-700">
                    Download your resume in PDF format, ready to impress employers.
                  </p>
                </div>
              </div>
            </div>
          </section>
    
          {/* Call-to-Action Section */}
          <section className="bg-indigo-600 text-white py-24 px-6 text-center">
            <div className="container mx-auto">
              <h2 className="text-4xl font-bold mb-8 leading-tight">
                Ready to Land Your Dream Job?
              </h2>
              <p className="text-xl mb-12">
                Start creating your professional resume today. It's free and easy!
              </p>
              <Link
                to="/builder"
                className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-100 transition-colors duration-300 ease-in-out"
              >
                Build My Resume Now
              </Link>
            </div>
          </section>
    
          {/* Footer */}
          <footer className="bg-gray-100 py-8 text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} ResumeGen. All rights reserved.</p>
          </footer>
        </div>
      );
}

export default Home;