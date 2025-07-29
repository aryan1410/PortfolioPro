import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-6">
          <a 
            href="https://www.linkedin.com/in/aryanshah1410/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            <Linkedin size={32} />
          </a>
          <a 
            href="https://github.com/aryan1410" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-300 transition-colors"
          >
            <Github size={32} />
          </a>
        </div>
        <p className="text-gray-400">&copy; 2025 Aryan Shah. All rights reserved.</p>
      </div>
    </footer>
  );
}
