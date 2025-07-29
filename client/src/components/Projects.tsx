export default function Projects() {
  const projects = [
    {
      title: "Little Go AI Agents",
image:"https://raw.githubusercontent.com/aryan1410/portfolio/master/assets/little_go.png",
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
image:"https://raw.githubusercontent.com/aryan1410/portfolio/master/assets/expression_music.png",
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
image:"https://raw.githubusercontent.com/aryan1410/portfolio/master/assets/viterbi.png", 
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
image:"https://raw.githubusercontent.com/aryan1410/portfolio/master/assets/memory.png",
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
image:"https://raw.githubusercontent.com/aryan1410/portfolio/master/assets/pedestrian.png",
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
image:"https://raw.githubusercontent.com/aryan1410/portfolio/master/assets/confusion.png",
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
              className="glass-effect rounded-3xl p-6 hover:scale-105 transition-all duration-300 animate-float"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                {project.description}
              </p>
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-300 mb-2">Applications:</h4>
                <div className="flex flex-wrap gap-1">
                  {project.applications.slice(0, 3).map((app, appIndex) => (
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
                className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm"
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
