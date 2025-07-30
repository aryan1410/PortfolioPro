import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { 
  GoGameGraphic, 
  DataScienceGraphic, 
  NLPGraphic, 
  WebDevGraphic, 
  MLGraphic, 
  DatabaseGraphic 
} from "./ProjectGraphics";

// Import local assets
import littleGoImage from "@assets/little_go_1753848924870.png";
import expressionMusicImage from "@assets/expression_music_1753848924870.png";
import viterbiImage from "@assets/viterbi_1753848924872.png";
import confusionImage from "@assets/confusion_1753848924852.png";
import memoryImage from "@assets/memory_1753848924871.png";
import pedestrianImage from "@assets/pedestrian_1753848924872.png";

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const toggleProject = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };
  const projects = [
    {
      title: "Little Go AI Agents",
      image: littleGoImage,
      graphic: <GoGameGraphic />,
      description: "This project builds intelligent agents to play a simplified 5x5 version of Go using a variety of AI techniques—minimax with alpha-beta pruning, reinforcement learning, all through a custom developed reward-penalty heuristic based on the most optimal go playing strategies such as counter attck, atari, territory preservations, etc,. It includes self-play training, evaluation scripts, and multiple strategy agents to simulate intelligent gameplay.",
      applications: [
        "Strategy game AI development",
        "Reinforcement learning experimentation", 
        "Decision-making simulations",
        "Educational tools for AI in games"
      ],
      github: "https://github.com/aryan1410/little_go"
    },
    {
      title: "Expression-Based Music System", 
      image: expressionMusicImage,
      graphic: <MLGraphic />,
      description: "This project detects a user's facial expression in real-time and recommends music that matches their emotional state. It uses a VGG19-based convolutional neural network trained on the FER2013 dataset to classify emotions into categories like happiness, sadness, anger, and more.",
      applications: [
        "Emotion-aware music players",
        "Mental wellness tools",
        "Mood-based playlist generators", 
        "Interactive entertainment systems",
        "Real-time adaptive media environments"
      ],
      github: "https://github.com/aryan1410/emotion_recognition"
    },
    {
      title: "Viterbi Temporal Reasoning",
      image: viterbiImage, 
      graphic: <DataScienceGraphic />,
      description: "This project implements a Viterbi-based temporal reasoning agent to infer the most probable sequence of hidden states in a partially observable environment, specifically modeled around a 'Little Prince' scenario.",
      applications: [
        "Decision-making under uncertainty",
        "Robot localization and path inference",
        "Natural language sequence decoding",
        "Medical diagnosis with hidden symptoms", 
        "Predictive analytics in dynamic systems"
      ],
      github: "https://github.com/aryan1410/viterbi_temporal_reasoning"
    },
    {
      title: "Sequence Alignment Efficiency Analysis",
      image: memoryImage,
      graphic: <DatabaseGraphic />,
      description: "This project solves the DNA sequence alignment problem using both a classic dynamic programming approach and a space-efficient variant. Given two base strings and duplication instructions, it recursively generates large DNA sequences and aligns them with minimal cost.",
      applications: [
        "Genomic sequence comparison",
        "Evolutionary biology and phylogenetics", 
        "DNA database search and indexing",
        "Bioinformatics algorithm optimization",
        "Protein or RNA structure alignment"
      ],
      github: "https://github.com/aryan1410/sequence_alignment_efficiency_analysis"
    },
    {
      title: "Pedestrian Detection",
      image: pedestrianImage,
      graphic: <MLGraphic />,
      description: "This project implements a pedestrian detection system by combining deep learning models and classical computer vision techniques. Using transfer learning with VGG19, ResNet101, and InceptionV3, the system classifies pedestrians from video frames.",
      applications: [
        "Autonomous vehicle pedestrian detection",
        "Public surveillance systems",
        "Smart city pedestrian monitoring",
        "Safety alert systems in transport and construction zones",
        "Crowd analytics and behavior analysis"
      ],
      github: "https://github.com/aryan1410/pedestrian_detection"
    },
    {
      title: "Confused Student Simulator",
      image: confusionImage,
      graphic: <NLPGraphic />,
      description: "A conversational AI that mimics a confused yet intelligent student, generating naive or follow-up questions from lecture materials (text, PDFs, videos, YouTube links). It uses LLMs and ASR to simulate misunderstandings and engage users in a five-turn dialogue.",
      applications: [
        "Lecture debugging before delivery",
        "TA preparation and FAQ generation",
        "Self-study companion for learners", 
        "Screening educational content for ambiguity",
        "Research on AI-simulated learning behavior",
        "Improving clarity in online courses and videos"
      ],
      github: "https://github.com/aryan1410/confused_student_simulator"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="glass-effect rounded-3xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer"
              onClick={() => toggleProject(index)}
            >
              {/* Split Image and Graphic Container */}
              <div className="mb-4 h-48 flex gap-2">
                {/* Main Project Image */}
                <div className="w-2/3 h-full">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                {/* Custom Interactive Graphic */}
                <div className="w-1/3 h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-2 border border-gray-600">
                  {project.graphic}
                </div>
              </div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <ChevronDown 
                  className={`transition-transform duration-300 ${expandedProject === index ? 'rotate-180' : ''}`}
                  size={20}
                />
              </div>
              
              <p className={`text-gray-400 text-sm mb-4 ${expandedProject === index ? '' : 'line-clamp-3'}`}>
                {project.description}
              </p>
              
              <div className={`expandable-section ${expandedProject === index ? 'expanded' : ''}`}>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">All Applications:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.applications.map((app, appIndex) => (
                        <span key={appIndex} className="text-xs bg-blue-600 bg-opacity-50 px-2 py-1 rounded">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View on GitHub →
                  </a>
                </div>
              </div>
              
              {expandedProject !== index && (
                <div className="flex justify-between items-center">
                  <div className="flex flex-wrap gap-1">
                    {project.applications.slice(0, 2).map((app, appIndex) => (
                      <span key={appIndex} className="text-xs bg-blue-600 bg-opacity-50 px-2 py-1 rounded">
                        {app}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm"
                    onClick={(e) => e.stopPropagation()}
                  >
                    GitHub →
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
