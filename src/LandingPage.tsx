import React, { useState } from 'react';

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full  bg-opacity-95 backdrop-blur-sm z-50 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-emerald-500 rounded flex items-center justify-center font-bold text-xl">
                R
              </div>
              <div>
                <div className="font-bold text-lg">Random</div>
                <div className="text-xs text-slate-400">BUSINESS School</div>
              </div>
            </div>
            
            <div className="hidden md:flex gap-8">
              <a href="#home" className="hover:text-emerald-400 transition">Home</a>
              <a href="#learning" className="text-emerald-400">Learning</a>
              <a href="#program" className="hover:text-emerald-400 transition">UG Program</a>
              <a href="#outcomes" className="hover:text-emerald-400 transition">Outcomes</a>
              <a href="#msl" className="hover:text-emerald-400 transition">MSL</a>
            </div>

            <button className="bg-emerald-500 hover:bg-emerald-600 px-6 py-2 rounded-full transition">
              CHAT WITH US
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Journey Section */}
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=500&fit=crop" alt="Classroom" className="w-full h-96 object-cover opacity-70"/>
            <div className="absolute inset-0 flex flex-col justify-center px-12">
              <p className="text-emerald-400 mb-2">The 12-month journey</p>
              <h2 className="text-4xl font-bold mb-8">How do these 12 months unfold?</h2>
              <div className="flex gap-4">
                <button className="bg-emerald-500 px-6 py-3 rounded-full flex items-center gap-2 hover:bg-emerald-600 transition">
                  <span>📊</span> Real ventures
                </button>
                <button className="bg-slate-700 px-6 py-3 rounded-full flex items-center gap-2 hover:bg-slate-600 transition">
                  <span>🤖</span> AI-first
                </button>
                <button className="bg-slate-700 px-6 py-3 rounded-full flex items-center gap-2 hover:bg-slate-600 transition">
                  <span>🎯</span> Outcome-backward
                </button>
              </div>
            </div>
          </div>
          <br/>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-slate-800 rounded-lg overflow-hidden hover:scale-105 transition">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop" alt="Learn tools" className="w-full h-48 object-cover"/>
              <div className="p-6">
                <p className="text-slate-300">Learn tools like Excel, Powerquery, SQL, Python and PowerBI</p>
              </div>
            </div>

            <div className="bg-slate-800 rounded-lg overflow-hidden hover:scale-105 transition">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=250&fit=crop" alt="Work on datasets" className="w-full h-48 object-cover"/>
              <div className="p-6">
                <p className="text-slate-300">Work on 25+ real-world startup datasets and get your hands dirty</p>
              </div>
            </div>

            <div className="bg-slate-800 rounded-lg overflow-hidden hover:scale-105 transition">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=250&fit=crop" alt="Mentorship" className="w-full h-48 object-cover"/>
              <div className="p-6">
                <p className="text-slate-300">Get regular 1:1 mentorship, support and practice</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Learning Approach */}
      <section className="py-20 px-6 bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-900 p-8 rounded-lg">
              <div className="text-5xl font-bold text-emerald-400 mb-4">01</div>
              <h3 className="text-2xl font-bold mb-3">
                Learn Business, <span className="text-emerald-400">Startup-Style</span>
              </h3>
              <p className="text-slate-400">Fast cycles, ambiguous problems, real customers.</p>
            </div>

            <div className="bg-slate-900 p-8 rounded-lg">
              <div className="text-5xl font-bold text-emerald-400 mb-4">02</div>
              <h3 className="text-2xl font-bold mb-3">
                Learn by <span className="text-emerald-400">Building</span>
              </h3>
              <p className="text-slate-400">From AI products, D2C Brands, GTM strategies: build cycles will anchor your learning.</p>
            </div>

            <div className="bg-slate-900 p-8 rounded-lg">
              <div className="text-5xl font-bold text-emerald-400 mb-4">03</div>
              <h3 className="text-2xl font-bold mb-3">
                Work Backwards <span className="text-emerald-400">from Outcomes</span>
              </h3>
              <p className="text-slate-400">Pedagogy and pathways are designed from the roles founders actually hire for.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Post-Random Outcomes: The Careers Random Unlocks</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=300&fit=crop" alt="Career 1" className="w-full h-64 object-cover rounded-lg"/>
            <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop" alt="Career 2" className="w-full h-64 object-cover rounded-lg"/>
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop" alt="Career 3" className="w-full h-64 object-cover rounded-lg"/>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-8">Random's 1-year Builder's Curriculum</h2>
              <p className="text-slate-400 mb-8">Creating AI-enabled business leaders who will grow India's startup ecosystem</p>
              
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <div className="text-4xl font-bold text-emerald-400 mb-2">₹15Cr+<span className="text-lg text-slate-400"> ARR</span></div>
                  <p className="text-slate-400">For 20+ student ventures</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-emerald-400 mb-2">500+</div>
                  <p className="text-slate-400">Partner startups</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-emerald-400 mb-2">70%</div>
                  <p className="text-slate-400">Placed in founder-facing roles</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-emerald-400 mb-2">36.5L</div>
                  <p className="text-slate-400">Top 25% avg CTC</p>
                </div>
              </div>

              <button className="bg-emerald-400 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-500 transition flex items-center gap-2">
                DOWNLOAD PROGRAM BROCHURE
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </button>
            </div>

            <div className="bg-slate-700 rounded-2xl overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop" alt="Founders" className="w-full h-full object-cover"/>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-slate-900 bg-opacity-80 backdrop-blur p-4 rounded-lg inline-block mb-4">
                  <h3 className="text-2xl font-bold">What is Random?</h3>
                </div>
                <div className="flex gap-4">
                  <div className="bg-slate-800 bg-opacity-80 backdrop-blur px-4 py-2 rounded-lg">
                    <p className="text-sm">Varun Limaye</p>
                    <p className="text-xs text-slate-400">Co - Founder, Random</p>
                  </div>
                  <div className="bg-slate-800 bg-opacity-80 backdrop-blur px-4 py-2 rounded-lg">
                    <p className="text-sm">Ankit Agarwal</p>
                    <p className="text-xs text-slate-400">Co - Founder, Random</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 bg-emerald-500 bg-opacity-80 backdrop-blur px-4 py-2 rounded-full inline-flex">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  <span className="text-sm font-semibold">3 min</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center text-slate-400">
          <p>&copy; 2024 Random School of Business. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}