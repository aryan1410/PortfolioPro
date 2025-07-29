import { Github, Linkedin } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Hero Banner */}
        <div className="mb-8 animate-fade-in">
          <img 
            src="https://pixabay.com/get/g0177161f4aed09a5beb840f2cb5d5b6caea0b6661f865a24781571c8581f8c498eca008b4c72402fd4031b73eb3e7598fa488e2f84e0d205e732dc62ee5be4b8_1280.jpg" 
            alt="Professional banner" 
            className="w-full h-64 object-cover rounded-2xl shadow-2xl"
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
