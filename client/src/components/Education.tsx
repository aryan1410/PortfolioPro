import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Education() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <section id="education" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Education</h2>
        
        <div className="space-y-8">
          {/* USC */}
          <div className="glass-effect rounded-3xl p-8 hover:scale-105 transition-all duration-300 cursor-pointer" onClick={() => toggleSection('usc')}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <img 
                  src="https://pixabay.com/get/g005240dad1f3781054e086e3668c3e0224866307e63ab3593a990e2b0d9e3f745b0e632ab55167dde8deb2e7ba2e2b5b44b57d94d904837b1561f7e1f2e6b2be_1280.jpg" 
                  alt="USC Logo" 
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-2xl font-bold">MS in Computer Science</h3>
                  <p className="text-xl text-gray-300">University of Southern California</p>
                  <p className="text-gray-400">January 2025 - December 2026</p>
                </div>
              </div>
              <ChevronDown 
                className={`transition-transform duration-300 ${expandedSection === 'usc' ? 'rotate-180' : ''}`}
                size={24}
              />
            </div>
            
            <div className={`expandable-section mt-6 ${expandedSection === 'usc' ? 'expanded' : ''}`}>
              <div className="bg-gray-800 rounded-xl p-6">
                <h4 className="text-lg font-semibold mb-4">Relevant Coursework:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="skill-tag bg-blue-600 px-4 py-2 rounded-lg">Analysis of Algorithms (CSCI 570)</div>
                  <div className="skill-tag bg-blue-600 px-4 py-2 rounded-lg">Foundations of Artificial Intelligence (CSCI 561)</div>
                  <div className="skill-tag bg-blue-600 px-4 py-2 rounded-lg">Web Technologies (CSCI 571)</div>
                </div>
              </div>
            </div>
          </div>

          {/* NMIMS */}
          <div className="glass-effect rounded-3xl p-8 hover:scale-105 transition-all duration-300 cursor-pointer" onClick={() => toggleSection('nmims')}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <img 
                  src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150" 
                  alt="NMIMS Logo" 
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-2xl font-bold">BTech in Data Science</h3>
                  <p className="text-xl text-gray-300">NMIMS Mukesh Patel School of Technology Management and Engineering</p>
                  <p className="text-gray-400">August 2020 - July 2024</p>
                  <p className="text-blue-400 font-semibold">CGPA: 3.64</p>
                </div>
              </div>
              <ChevronDown 
                className={`transition-transform duration-300 ${expandedSection === 'nmims' ? 'rotate-180' : ''}`}
                size={24}
              />
            </div>
            
            <div className={`expandable-section mt-6 ${expandedSection === 'nmims' ? 'expanded' : ''}`}>
              <div className="bg-gray-800 rounded-xl p-6">
                <h4 className="text-lg font-semibold mb-4">Relevant Coursework:</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="skill-tag bg-purple-600 px-3 py-2 rounded-lg text-sm">Data Structures and Algorithms</div>
                  <div className="skill-tag bg-purple-600 px-3 py-2 rounded-lg text-sm">Machine Learning</div>
                  <div className="skill-tag bg-purple-600 px-3 py-2 rounded-lg text-sm">Neural Networks and Deep Learning</div>
                  <div className="skill-tag bg-purple-600 px-3 py-2 rounded-lg text-sm">Computer Vision</div>
                  <div className="skill-tag bg-purple-600 px-3 py-2 rounded-lg text-sm">Natural Language Processing</div>
                  <div className="skill-tag bg-purple-600 px-3 py-2 rounded-lg text-sm">Big Data Analytics</div>
                  <div className="skill-tag bg-purple-600 px-3 py-2 rounded-lg text-sm">Database Management Systems</div>
                  <div className="skill-tag bg-purple-600 px-3 py-2 rounded-lg text-sm">Cloud Computing</div>
                  <div className="skill-tag bg-purple-600 px-3 py-2 rounded-lg text-sm">MLOps & DevOps</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
