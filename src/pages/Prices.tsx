import React from 'react';

function Prices(){
    return (
        <div className="bg-[#EFEFEF] min-h-screen text-[#3F7D58]">
          <div className="max-w-7xl mx-auto px-6 py-16">
            {/* Page Title */}
            <h1 className="text-5xl font-extrabold text-center text-[#EC5228] mb-6">
              Choose the Right Plan for You
            </h1>
            <p className="text-center text-lg text-gray-700 max-w-2xl mx-auto mb-12">
              Whether you're just starting out or want to unlock pro features, we’ve got a plan that fits your needs.
            </p>
    
            {/* Plans Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Free Plan */}
              <div className="bg-white shadow-md rounded-xl p-8 border-t-4 border-[#EF9651] hover:scale-105">
                <h2 className="text-2xl font-bold text-[#3F7D58] mb-4">Free</h2>
                <p className="text-gray-600 mb-6">Perfect for trying things out.</p>
                <ul className="text-sm space-y-2 mb-6">
                  <li>✅ 1 resume download</li>
                  <li>✅ Access to basic templates</li>
                  <li>✅ Customizable content</li>
                  <li>❌ Premium design styles</li>
                </ul>
                <div className="text-3xl font-bold text-[#EC5228] mb-4">€0</div>
                <button className="bg-[#EC5228] hover:bg-[#e1491d] text-white font-semibold px-6 py-2 rounded-full transition">
                  Start for Free
                </button>
              </div>
    
              {/* Pro Plan */}
              <div className="bg-white shadow-lg rounded-xl p-8 border-t-4 border-[#EC5228] scale-105 hover:scale-110">
                <h2 className="text-2xl font-bold text-[#3F7D58] mb-4">Pro</h2>
                <p className="text-gray-600 mb-6">For serious job seekers.</p>
                <ul className="text-sm space-y-2 mb-6">
                  <li>✅ Unlimited resumes</li>
                  <li>✅ All premium templates</li>
                  <li>✅ Priority support</li>
                  <li>✅ Remove watermark</li>
                </ul>
                <div className="text-3xl font-bold text-[#EC5228] mb-4">€12 / month</div>
                <button className="bg-[#EC5228] hover:bg-[#e1491d] text-white font-semibold px-6 py-2 rounded-full transition">
                  Go Pro
                </button>
              </div>
    
              {/* Team Plan */}
              <div className="bg-white shadow-md rounded-xl p-8 border-t-4 border-[#3F7D58] hover:scale-105">
                <h2 className="text-2xl font-bold text-[#3F7D58] mb-4">Team</h2>
                <p className="text-gray-600 mb-6">Collaborate and manage resumes in a team.</p>
                <ul className="text-sm space-y-2 mb-6">
                  <li>✅ Everything in Pro</li>
                  <li>✅ Multi-user access</li>
                  <li>✅ Team collaboration</li>
                  <li>✅ Admin dashboard</li>
                </ul>
                <div className="text-3xl font-bold text-[#EC5228] mb-4">€30 / month</div>
                <button className="bg-[#3F7D58] hover:bg-[#366b4c] text-white font-semibold px-6 py-2 rounded-full transition">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Prices;