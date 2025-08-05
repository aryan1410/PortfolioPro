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
                    <span>Developed a chatbot core engine system prototype by using prompt engineering and leveraging OpenAI's LLM, resulting in efficient initial chatbot architecture, meeting business intelligence standards.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Database className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span>Managed infrastructure of chatbot's cross-functional RAG database and userbase, operating MongoDB and SQL, deploying LLM pipelines and performing sentiment analysis and information retrieval on real-time messages to boost response quality.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Users className="text-purple-400 mt-1 flex-shrink-0" size={16} />
                    <span>Contextualized user query by maintaining conversation summaries and entities for every user in dedicated user profiles, and feeding LLM incremental summaries and entities for a new message in a user session for over 100 message conversations.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <TestTube className="text-orange-400 mt-1 flex-shrink-0" size={16} />
                    <span>Implemented multi-threaded visual testing of chatbot API responses using Postman schematics for 150 scenarios, improving bug identification and resolution by over 100%.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <TrendingUp className="text-yellow-400 mt-1 flex-shrink-0" size={16} />
                    <span>Utilized LLM to optimize chat history summariser for a user session via prompt engineering and string slicing techniques, optimizing summary length by 35% and boosting user engagement by personalized context preservation.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <BarChart className="text-cyan-400 mt-1 flex-shrink-0" size={16} />
                    <span>Constructed a synthetic dataset of product specific user journeys (over 5000 user messages) for evaluation of minimum viable product, fine tuning and training of custom LLMs tailored to chatbot, and saving 20% overall cost from OpenAl's API calls.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Layout className="text-red-400 mt-1 flex-shrink-0" size={16} />
                    <span>Led development of an automated end-to-end integration testing framework, which served as a benchmark for product launch by querying journey specific data to chatbot's API, asserting response latency, fluency, accuracy, and relevance metrics with ground truth response over threshold, and recording failure reports to AWS S3</span>
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
                    <span>Led research to scrape over 10 years of bond yield data from CBIL Bond Index and RBI website, pre-processed and cleaned it using data wrangling and mining techniques, and condensed data frequencies to monthly aggregates, accommodating broader timelines for data analysis and improving efficiency.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Search className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span>Performed quantitative exploratory data analysis to visualize and plot yield movements and its relationship with various independent variables such as benchmark index rates, inflation rates, etc. with rapid experimentation and statistics fundamentals.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Layout className="text-purple-400 mt-1 flex-shrink-0" size={16} />
                    <span>Developed and deployed a consolidated dashboard on the Indian debt market in collaboration with equity analysts and compliance regulators, using Plotly for visualization and automated data scraping tools like BrowseAI to streamline data collection.</span>
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
                    <span>Forming a network through various databases of corporates in and out of India in the organic field via research.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <BarChart className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span>Analysis of the companies for business purposes and approaching them for features in the magazine on a regular basis.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Users className="text-purple-400 mt-1 flex-shrink-0" size={16} />
                    <span>Research on highly active CSR firms in India to approach for webinars in order to spread awareness about organic products. Work collaboratively with rest of the team members.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <TrendingUp className="text-orange-400 mt-1 flex-shrink-0" size={16} />
                    <span>Pitching to various individuals or brands to bring in business and revenue for the company.</span>
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
