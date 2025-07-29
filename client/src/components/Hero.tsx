import { Github, Linkedin } from "lucide-react";
import bannerImage from "@assets/banner_1753828190855.png";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Professional Banner */}
        <div className="mb-8 animate-fade-in">
          <img 
            src={bannerImage} 
            alt="Aryan Shah - Computer Science Portfolio Banner showcasing skills in AI, ML, NLP, and Full Stack Development" 
            className="w-full h-auto max-h-80 object-contain rounded-2xl shadow-2xl bg-gradient-to-r from-gray-900 to-black"
          />
        </div>

        <div className="glass-effect rounded-3xl p-8 md:p-12 animate-slide-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Aryan Shah
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
            Computer Science Grad Student @ USC | ex-NLP Engineer at Elixir Equities
          </h2>
          <p className="text-lg text-gray-400 max-w-4xl mx-auto mb-8 leading-relaxed">
            Hi, I am a data scientist deeply passionate about artificial intelligence, large language models, neural networks, data analysis and statistical models. 
            With a solid foundation from my Bachelor's in Data Science at NMIMS' MPSTME, a wealth of experience as an NLP Engineer, 
            and a handful of personal projects, I've developed a strong interest in the idea of building AI or data-driven end to end intelligent 
            systems. Currently, I'm pursuing my Master's in Computer Science at the University of Southern California. While my interest in AI is extensive, 
            I also enjoy working on full-stack solutions, thrive in collaborative environments, and am always eager to explore and implement innovative ideas.
          </p>
          <div className="flex justify-center space-x-6">
            <a 
              href="https://www.linkedin.com/in/aryanshah1410/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 flex items-center space-x-2"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a 
              href="https://github.com/aryan1410" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 flex items-center space-x-2"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
