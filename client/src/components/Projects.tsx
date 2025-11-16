import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { 
  GoGameGraphic, 
  DataScienceGraphic, 
  NLPGraphic, 
  WebDevGraphic, 
  MLGraphic, 
  DatabaseGraphic,
  WorkflowGraphic,
  DGenGraphic,
  ResearchAgentGraphic
} from "./ProjectGraphics";

// Import local assets
import littleGoImage from "@assets/little_go_1753848924870.png";
import expressionMusicImage from "@assets/expression_music_1753848924870.png";
import viterbiImage from "@assets/viterbi_1753848924872.png";
import confusionImage from "@assets/confusion_1753848924852.png";
import memoryImage from "@assets/memory_1753848924871.png";
import pedestrianImage from "@assets/pedestrian_1753848924872.png";
import workflowImage from "@assets/image_1755404592052.png";
import dgenImage from "@assets/dgen.png";
import deepResearcherImage from "@assets/research-agent.png";

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
      skillsGained: [
        "Reinforcement Learning",
        "Minimax Algorithm",
        "Alpha-Beta Pruning",
        "Game Theory",
        "Python Programming",
        "Neural Networks",
        "Self-Play Training"
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
      skillsGained: [
        "Computer Vision",
        "Convolutional Neural Networks",
        "VGG19 Architecture",
        "OpenCV",
        "Real-time Processing",
        "Facial Recognition",
        "TensorFlow/Keras"
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
      skillsGained: [
        "Viterbi Algorithm",
        "Hidden Markov Models",
        "Temporal Reasoning",
        "Probability Theory",
        "Dynamic Programming",
        "State Estimation",
        "Bayesian Inference"
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
      skillsGained: [
        "Dynamic Programming",
        "Space-Time Optimization",
        "Algorithm Analysis",
        "Bioinformatics",
        "Memory Management",
        "Recursive Problem Solving",
        "Computational Biology"
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
      skillsGained: [
        "Deep Learning",
        "Transfer Learning",
        "VGG19, ResNet101, InceptionV3",
        "Computer Vision",
        "Object Detection",
        "Video Processing",
        "Model Evaluation"
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
      skillsGained: [
        "Natural Language Processing",
        "Large Language Models",
        "Automatic Speech Recognition",
        "Conversational AI",
        "Text Processing",
        "API Integration",
        "Educational Technology"
      ],
      github: "https://github.com/aryan1410/confused_student_simulator"
    },
    {
      title: "Workflow - Academic Project Tracker",
      image: workflowImage,
      graphic: <WorkflowGraphic />,
      description: "A comprehensive Flask and PostgreSQL web app that helps students organize projects, manage tasks, collaborate on group work, and track study productivity. Built with Python, SQLAlchemy, Jinja2, Bootstrap 5, and Chart.js, it features role-based permissions, secure file uploads, study timers, progress analytics, and full-text search, all deployed with Docker, Gunicorn, Fly.io, and Neon PostgreSQL.",
      applications: [
        "Academic project and course task management",
        "Group collaboration with roles, comments, and file sharing",
        "Study session tracking with timers and weekly analytics",
        "Visual dashboards for deadlines, progress, and productivity",
        "Smart full-text search across projects and tasks"
      ],
      skillsGained: [
        "Flask Web Development",
        "PostgreSQL Database Design",
        "SQLAlchemy ORM",
        "Bootstrap 5 & Responsive Design",
        "Chart.js Data Visualization",
        "Docker Containerization",
        "Fly.io Deployment",
        "File Upload Security",
        "Full-Text Search Implementation"
      ],
      github: "https://github.com/aryan1410/WorkFlow",
      liveDemo: "https://workfloww.fly.dev"
    },
    {
      title: "D-GEN – AI-Powered Personalized Learning Platform",
      image: dgenImage,
      graphic: <DGenGraphic />,
      description: "A full-stack React, Node.js, and Supabase web app that transforms traditional textbooks into engaging, personalized conversational lessons using Google Gemini AI. The platform delivers adaptive teaching personas, interactive quizzes, and real-time progress tracking — creating a dynamic, gamified learning experience for students. Built with TypeScript, PostgreSQL, TailwindCSS, and Edge Functions, it features secure authentication, textbook uploads, AI-generated visuals, and analytics dashboards. Deployed with Vite, Supabase Cloud, and Deno Edge, D-GEN was recognized as a hackathon finalist for innovation in AI-driven education.",
      applications: [
        "Personalized tutoring through AI personas (Gen-Z, Classic, and Adaptive modes)",
        "Interactive textbook-to-chat learning with contextual grounding",
        "AI-generated quizzes and feedback-driven improvement loop",
        "Gamified dashboards with leaderboards, progress charts, and friend tracking",
        "Secure authentication, profile management, and file-based textbook uploads"
      ],
      skillsGained: [
        "React & TypeScript Frontend Engineering",
        "Node.js + Express API Development",
        "Supabase & PostgreSQL Backend Design",
        "Serverless Edge Functions (Deno)",
        "AI Integration with Google Gemini API",
        "Real-Time Data Visualization (Recharts, shadcn/ui)",
        "TailwindCSS & Responsive UI Design",
        "Secure Authentication & RLS Policies",
        "Cloud Deployment on Supabase & Vite"
      ],
      github: "https://github.com/aryan1410/persona-tutor-learn",
      liveDemo: "https://d-gen.lovable.app/"
    },
    {
      title: "Deep Researcher - AI Research Agent",
      image: deepResearcherImage,
      graphic: <ResearchAgentGraphic />,
      description: "A comprehensive full-stack AI research assistant built with Python, LangGraph, FastAPI, and Next.js that automates deep investigative research, synthesizes multi-source findings, and produces structured, citation-backed reports. Powered by OpenAI and Gemini LLMs, the system uses a competitive multi-agent workflow, dual search engines, and real-time streaming to deliver accurate and verifiable insights. Features include stateful agent orchestration, hybrid chat and research modes, streaming outputs, automatic result evaluation, and production-grade deployment with Docker and Render.",
      applications: [
        "Automated deep-research generation with multi-engine search",
        "Hybrid chat and research workflow with persistent context",
        "Competitive report generation using LLM-based evaluation",
        "Real-time streaming output for long-running research tasks",
        "Structured reports with summaries, tables, insights, and citations",
        "Verified web research using Tavily and SerpAPI",
        "Multi-model support with both OpenAI and Gemini"
      ],
      skillsGained: [
        "LangGraph state machine design for orchestrated AI agents",
        "Multi-model LLM tooling and integration",
        "Distributed search architecture and API integration",
        "FastAPI backend development and streaming responses",
        "Next.js frontend with real-time data pipelines",
        "Docker-based full-stack deployment",
        "Production-grade error handling and SSE streaming",
        "Prompt engineering for research, synthesis, and evaluation agents"
      ],
      github: "https://github.com/aryan1410/deep-researcher",
      liveDemo: "https://deep-research-33lv.onrender.com/"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        
        {/* Vertical layout with one project per row */}
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="glass-effect rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-300"
            >
              {/* Main project card - always visible */}
              <div 
                className="p-6 cursor-pointer"
                onClick={() => toggleProject(index)}
              >
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  {/* Image Section - 40% width on desktop */}
                  <div className="w-full md:w-2/5 flex-shrink-0">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-48 md:h-56 object-cover rounded-xl"
                    />
                  </div>
                  
                  {/* Content Section - 60% width on desktop */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="text-2xl font-bold flex-1">{project.title}</h3>
                      <div className="flex items-center gap-3 flex-shrink-0">
                        {/* Graphic - smaller size */}
                        <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-2 border border-gray-600">
                          {project.graphic}
                        </div>
                        {/* Chevron indicator */}
                        <ChevronDown 
                          className={`transition-transform duration-300 flex-shrink-0 ${expandedProject === index ? 'rotate-180' : ''}`}
                          size={24}
                        />
                      </div>
                    </div>
                    
                    {/* Description - always visible but line-clamped when collapsed */}
                    <p className={`text-gray-400 text-sm mb-4 ${expandedProject === index ? '' : 'line-clamp-2'}`}>
                      {project.description}
                    </p>
                    
                    {/* Preview tags when collapsed */}
                    {expandedProject !== index && (
                      <div className="flex flex-wrap gap-2 items-center">
                        {project.applications.slice(0, 3).map((app, appIndex) => (
                          <span key={appIndex} className="text-xs bg-blue-600 bg-opacity-50 px-2 py-1 rounded">
                            {app}
                          </span>
                        ))}
                        {project.applications.length > 3 && (
                          <span className="text-xs text-gray-400">+{project.applications.length - 3} more</span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Expandable detailed section */}
              <div className={`expandable-section ${expandedProject === index ? 'expanded' : ''}`}>
                <div className="px-6 pb-6 space-y-6">
                  {/* All Applications */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">All Applications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.applications.map((app, appIndex) => (
                        <span key={appIndex} className="text-xs bg-blue-600 bg-opacity-50 px-3 py-1.5 rounded">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Skills Gained */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">Skills Gained:</h4>
                    <div className="flex flex-wrap gap-2">
                      {(project as any).skillsGained?.map((skill: string, skillIndex: number) => (
                        <span key={skillIndex} className="text-xs bg-green-600 bg-opacity-50 px-3 py-1.5 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Links */}
                  <div className="flex gap-4 pt-2">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View on GitHub →
                    </a>
                    {(project as any).liveDemo && (
                      <a 
                        href={(project as any).liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-green-400 hover:text-green-300 text-sm font-medium transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Live Demo →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}