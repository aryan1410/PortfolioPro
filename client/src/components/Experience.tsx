import { useState } from "react";
import { ChevronDown, Brain, Eye, TrendingUp, Bot, Database, Users, TestTube, BarChart, Search, Layout } from "lucide-react";

export default function Experience() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Work Experience</h2>
        
        <div className="space-y-8">
          {/* USC Research Assistant */}
          <div className="glass-effect rounded-3xl p-8 hover:scale-105 transition-all duration-300 cursor-pointer" onClick={() => toggleSection('usc-ra')}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150" 
                  alt="USC Research" 
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-2xl font-bold">Graduate Research Assistant</h3>
                  <p className="text-xl text-gray-300">USC Viterbi, Los Angeles, California</p>
                  <p className="text-gray-400">Feb 2025 - May 2025</p>
                </div>
              </div>
              <ChevronDown 
                className={`transition-transform duration-300 ${expandedSection === 'usc-ra' ? 'rotate-180' : ''}`}
                size={24}
              />
            </div>
            
            <div className={`expandable-section mt-6 ${expandedSection === 'usc-ra' ? 'expanded' : ''}`}>
              <div className="bg-gray-800 rounded-xl p-6">
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start space-x-3">
                    <Brain className="text-blue-400 mt-1 flex-shrink-0" size={16} />
                    <span>Worked independently under a professor to leverage deep learning and computer vision to solve problems in the mental health domain.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Eye className="text-blue-400 mt-1 flex-shrink-0" size={16} />
                    <span>Fine tuned multiple custom, and pre trained vision models, such as VGG, OpenFace, DeepFace, etc. to detect the level of focus on an individual's face.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <TrendingUp className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span>Model was able to identify subtle features and expressions (such as steady gaze, blinking, pupil dilation, etc.) and use them to classify as focused or not focused based on a threshold.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <TrendingUp className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span>Best model accuracy 82%, f1-score 0.86</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Elixir NLP Engineer */}
          <div className="glass-effect rounded-3xl p-8 hover:scale-105 transition-all duration-300 cursor-pointer" onClick={() => toggleSection('elixir-nlp')}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <img 
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150" 
                  alt="Elixir Equities" 
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-2xl font-bold">NLP Engineer</h3>
                  <p className="text-xl text-gray-300">Elixir Equities, Mumbai, India</p>
                  <p className="text-gray-400">July 2024 - November 2024</p>
                </div>
              </div>
              <ChevronDown 
                className={`transition-transform duration-300 ${expandedSection === 'elixir-nlp' ? 'rotate-180' : ''}`}
                size={24}
              />
            </div>
            
            <div className={`expandable-section mt-6 ${expandedSection === 'elixir-nlp' ? 'expanded' : ''}`}>
              <div className="bg-gray-800 rounded-xl p-6">
                <div className="mb-4">
                  <a href="https://www.paisasmart.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Company Website</a>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start space-x-3">
                    <Bot className="text-blue-400 mt-1 flex-shrink-0" size={16} />
                    <span>Served in a team to create initial prototype of chatbot core engine via prompt engineering and leveraging Open AI's LLM.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Database className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span>Managed chatbot database operating MongoDB and SQL alike, deploying CI/CD pipelines and performed sentiment analysis models on 100 real time text messages from database.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Users className="text-purple-400 mt-1 flex-shrink-0" size={16} />
                    <span>Contextualized user query by maintaining conversation summaries and entities for every user in dedicated user profiles, and feeding LLM incremental summaries and entities for a new message in a user session for over 100 message conversations.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <TestTube className="text-orange-400 mt-1 flex-shrink-0" size={16} />
                    <span>Organized Postman flows to implement visual testing of chatbot API responses for 150 scenarios and operated field specific assertions to assert effectiveness of responses improving bug identification and resolution by over 100%.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Elixir Data Science Intern */}
          <div className="glass-effect rounded-3xl p-8 hover:scale-105 transition-all duration-300 cursor-pointer" onClick={() => toggleSection('elixir-ds')}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <img 
                  src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150" 
                  alt="Data Science" 
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-2xl font-bold">Data Science Intern</h3>
                  <p className="text-xl text-gray-300">Elixir Equities, Mumbai, India</p>
                  <p className="text-gray-400">January 2023 - June 2024</p>
                </div>
              </div>
              <ChevronDown 
                className={`transition-transform duration-300 ${expandedSection === 'elixir-ds' ? 'rotate-180' : ''}`}
                size={24}
              />
            </div>
            
            <div className={`expandable-section mt-6 ${expandedSection === 'elixir-ds' ? 'expanded' : ''}`}>
              <div className="bg-gray-800 rounded-xl p-6">
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start space-x-3">
                    <BarChart className="text-blue-400 mt-1 flex-shrink-0" size={16} />
                    <span>Led initiative to scrape over 10 years of bond yield data from CBIL Bond Index, RBI website. Pre-processed and cleaned it using data wrangling and mining techniques.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Search className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span>Performed exploratory data analysis to visualize and plot yield movements and its relationship with various independent variables such as benchmark index rates, inflation rates, etc.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Layout className="text-purple-400 mt-1 flex-shrink-0" size={16} />
                    <span>Developed and deployed consolidated dashboard on Indian debt market, following standard Agile SDLC and project management principles using plotly as frontend, Browse AI for automated data scraping from websites into csv files.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
