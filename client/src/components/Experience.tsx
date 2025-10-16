import { useState } from "react";
import { ChevronDown, Brain, Eye, TrendingUp, Bot, Database, Users, TestTube, BarChart, Search, Layout } from "lucide-react";

// Import local assets
import elixirLogo from "@assets/elixir_1753848924870.png";
import organicLogo from "@assets/organic_1753848924871.png";
import uscViterbiLogo from "@assets/USC-viterbi_1753848924872.png";

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
                  src={uscViterbiLogo} 
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
                  src={elixirLogo} 
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
                    <span>Developed initial version of AI-powered investment chatbot interfaced by Meta, via prompt engineering, enabling 1 million people to invest in financial market.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Database className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span>Designed and optimized hybrid RAG infrastructure, boosting response quality by 40% via context ingestion</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <BarChart className="text-cyan-400 mt-1 flex-shrink-0" size={16} />
                    <span>Enhanced token usage by optimizing user conversation summary window reducing outgoing tokens and LLM costs, while maintaining coherent, multi-turn dialogue.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <TestTube className="text-orange-400 mt-1 flex-shrink-0" size={16} />
                    <span>Implemented visual testing of chatbot APIs for custom generated scenarios, improving bug identification and resolution, establishing a primary test suite for new feature release</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <TrendingUp className="text-yellow-400 mt-1 flex-shrink-0" size={16} />
                    <span>Constructed a synthetic dataset of user workflows for fine tuning and training of custom LLMs tailored to domain specific knowledge base, replacing a fraction of OpenAI calls, thereby reducing overall cost</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Users className="text-purple-400 mt-1 flex-shrink-0" size={16} />
                    <span>Developed a notifications microservice, ensuring reliable real-time delivery of time-sensitive alerts to over 10,000 users monthly and boosting system responsiveness</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Bot className="text-blue-400 mt-1 flex-shrink-0" size={16} />
                    <span>Developed a message broker in Python to streamline inter-service communication, improving message throughput across backend systems and enhancing overall reliability, fault tolerance, and scalability under heavy workloads.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <BarChart className="text-cyan-400 mt-1 flex-shrink-0" size={16} />
                    <span>Built a WebSocket-based real-time chat service, enabling seamless agent intervention during active user sessions and reducing average support response time, significantly improving user satisfaction and service efficiency</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Layout className="text-red-400 mt-1 flex-shrink-0" size={16} />
                    <span>Led development of scalable and automated unit testing framework that validated chatbot API and database responses against ground truth, using deterministic equality checks or metric-based thresholds for non-deterministic LLM outputs, with failure reports stored in AWS S3, that served as troubleshooting benchmark for feature development in go to market phase</span>
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
                  src={elixirLogo} 
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
                    <span>Led project to scrape over 10 years of financial bond data, converted high frequency data to monthly aggregates, utilizing data pre-processing, cleaning, and wrangling techniques in PySpark, to accommodate broader timelines for data analysis and clustering.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Search className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span>Performed quantitative data analysis and CUDA boosted panel regression to visualize yield movements and their relationship with independent variables benchmark index rates and inflation, leading to predictive models that increased trading revenue.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Layout className="text-purple-400 mt-1 flex-shrink-0" size={16} />
                    <span>Developed and deployed a dashboard application, for the Indian debt market, with insightful data visualizations and AI automated data scraping and storage, supporting regular equity analyst research and vetted by compliance regulators.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Organic Magazine Business Analyst Intern */}
          <div className="glass-effect rounded-3xl p-8 hover:scale-105 transition-all duration-300 cursor-pointer" onClick={() => toggleSection('organic')}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <img 
                  src={organicLogo} 
                  alt="The Organic Magazine" 
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-2xl font-bold">Business Analyst Intern</h3>
                  <p className="text-xl text-gray-300">The Organic Magazine (Remote)</p>
                  <p className="text-gray-400">August 2021 - November 2021</p>
                </div>
              </div>
              <ChevronDown 
                className={`transition-transform duration-300 ${expandedSection === 'organic' ? 'rotate-180' : ''}`}
                size={24}
              />
            </div>
            
            <div className={`expandable-section mt-6 ${expandedSection === 'organic' ? 'expanded' : ''}`}>
              <div className="bg-gray-800 rounded-xl p-6">
                <div className="mb-4">
                  <a href="https://theorganicmagazine.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Company Website</a>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start space-x-3">
                    <Search className="text-blue-400 mt-1 flex-shrink-0" size={16} />
                    <span>Formed a network of over 500 companies through various databases of corporates in and out of India in the organic field via research.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <BarChart className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span>Analyzed companies for business purposes and approached them for features on a regular basis, closing over 25 features.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Users className="text-purple-400 mt-1 flex-shrink-0" size={16} />
                    <span>Researched on highly active CSR firms in India to approach for webinars in order to spread awareness about organic products working collaboratively.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <TrendingUp className="text-orange-400 mt-1 flex-shrink-0" size={16} />
                    <span>Pitched to various individuals and brands to bring in business and revenue from over 8 sources for company.</span>
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
