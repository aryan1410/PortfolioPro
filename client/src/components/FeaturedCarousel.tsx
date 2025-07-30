// Import local assets
import littleGoImage from "@assets/little_go_1753848924870.png";
import confusionImage from "@assets/confusion_1753848924852.png";
import expressionMusicImage from "@assets/expression_music_1753848924870.png";
import pedestrianImage from "@assets/pedestrian_1753848924872.png";
import viterbiImage from "@assets/viterbi_1753848924872.png";
import memoryImage from "@assets/memory_1753848924871.png";
import elixirImage from "@assets/elixir_1753848924870.png";
import uscViterbiImage from "@assets/USC-viterbi_1753848924872.png";

export default function FeaturedCarousel() {
  const projects = [
    {
      title: "Game Playing Agents", 
      image: littleGoImage
    },
    {
      title: "Confused Student Simulator",
      image: confusionImage
    },
    {
      title: "Emotion-Based Music Recommender",
      image: expressionMusicImage
    },
    {
      title: "Pedestrian Detection",
      image: pedestrianImage
    },
    {
      title: "Viterbi Temporal Reasoning",
      image: viterbiImage
    },
    {
      title: "Sequence Alignment",
      image: memoryImage
    },
    {
      title: "NLP Engineer @ Elixir",
      image: elixirImage
    },
    {
      title: "Research Assistant @ USC",
      image: uscViterbiImage
    }
  ];

  return (
    <section id="featured" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 animate-slide-up">Featured Projects</h2>
        
        <div className="glass-effect rounded-3xl p-8 mb-12">
          <div className="carousel-container rounded-2xl overflow-hidden bg-gray-900/30">
            <div className="carousel-slide">
              {projects.map((project, index) => (
                <div key={index} className="project-card p-6 text-center">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-48 object-contain bg-gray-800/50 rounded-lg mb-4 p-2"
                  />
                  <h4 className="text-lg font-semibold">{project.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
