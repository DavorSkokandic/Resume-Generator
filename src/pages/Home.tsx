import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
    <div className="container mx-auto space-y-8">
      <h1 className="text-3xl font-bold text-gray-900 text-center">Tailwind CSS Comprehensive Test</h1>

      {/* Layout */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Layout</h2>
        <div className="flex flex-row flex-wrap justify-between items-center gap-4">
          <div className="w-32 h-16 bg-red-500 rounded-md"></div>
          <div className="w-32 h-16 bg-green-500 rounded-md"></div>
          <div className="w-32 h-16 bg-blue-500 rounded-md"></div>
          <div className="w-full h-12 bg-yellow-500 rounded-md"></div>
        </div>
         <div className="grid grid-cols-2 gap-4 mt-4">
          <div>First Column</div>
          <div>Second Column</div>
         </div>
      </section>

      {/* Typography */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Typography</h2>
        <p className="text-sm text-gray-500">This is small text.</p>
        <p className="text-base text-gray-700">This is base text.</p>
        <p className="text-lg font-medium text-gray-800">This is large, medium text.</p>
        <p className="text-2xl font-bold text-gray-900">This is extra-large, bold text.</p>
        <p className="font-italic">This is italic text.</p>
        <p className="underline">This is underlined text.</p>
      </section>

      {/* Colors */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Colors</h2>
        <div className="flex flex-wrap gap-4">
          <div className="w-20 h-20 rounded-full bg-red-500 text-white flex items-center justify-center">Red</div>
          <div className="w-20 h-20 rounded-full bg-green-500 text-white flex items-center justify-center">Green</div>
          <div className="w-20 h-20 rounded-full bg-blue-500 text-white flex items-center justify-center">Blue</div>
          <div className="w-20 h-20 rounded-full bg-yellow-500 text-gray-900 flex items-center justify-center">Yellow</div>
          <div className="w-20 h-20 rounded-full bg-purple-500 text-white flex items-center justify-center">Purple</div>
          <div className="text-gray-400">Gray Text</div>
        </div>
      </section>

      {/* Borders */}
      <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Borders</h2>
          <div className="border-2 border-dashed border-blue-500 p-4 rounded-md">
            Dashed Blue Border
          </div>
          <div className="border-4 border-green-500 rounded-lg p-4">
             Green Border Rounded
          </div>
          <div className="border-8 border-red-500 rounded-full w-32 h-32 mx-auto"></div>
      </section>

      {/* Effects */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Effects</h2>
        <div className="hover:bg-gray-200 transition-colors p-4 rounded-md cursor-pointer">
          Hoverable Div
        </div>
        <div className="shadow-md rounded-md p-4">
          Small Shadow
        </div>
        <div className="shadow-lg rounded-md p-4">
          Large Shadow
        </div>
        <div className="opacity-50 rounded-md p-4">
          50% Opacity
        </div>
         <div className="blur-sm rounded-md p-4">
          Blur
        </div>
      </section>

      {/* Forms */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Forms</h2>
        <input
          type="text"
          placeholder="Enter text"
          className="border p-2 rounded-md w-full mb-4"
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
          Submit
        </button>
      </section>

       {/* Interactivity */}
      <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Interactivity</h2>
          <button
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md
                      transition-colors duration-300 focus:outline-none focus:ring-2
                      focus:ring-purple-400 focus:ring-offset-2"
          >
          Hover, Focus, and Transition
          </button>
      </section>
    </div>
  </div>
  );
};



export default Home;
