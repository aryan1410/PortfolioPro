export default function FeaturedCarousel() {
  const projects = [
    {
      title: "Game Playing Agents", image:"https://raw.githubusercontent.com/aryan1410/portfolio/master/assets/little_go.png"
    },
    {
      title: "Confused Student Simulator",
image:"https://raw.githubusercontent.com/aryan1410/portfolio/master/assets/confusion.png"
    },
    {
      title: "Emotion-Based Music Recommender",
image:"https://raw.githubusercontent.com/aryan1410/portfolio/master/assets/expression_music.png"
    },
    {
      title: "Pedestrian Detection",
      image: "https://images.unsplash.com/photo-1573152958734-1922c188fba3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    },
    {
      title: "Viterbi Temporal Reasoning",
image:"https://raw.githubusercontent.com/aryan1410/portfolio/master/assets/viterbi.png"
    },
    {
      title: "Sequence Alignment",
  image:"https://raw.githubusercontent.com/aryan1410/portfolio/master/assets/memory.png"
    },
    {
      title: "NLP Engineer @ Elixir",
  image:"https://raw.githubusercontent.com/aryan1410/portfolio/master/assets/elixir.png"
    },
    {
      title: "Research Assistant @ USC",
      image: "https://raw.githubusercontent.com/aryan1410/portfolio/master/assets/USC-viterbi.png"
    }
  ];

  return (
    <section id="featured" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 animate-slide-up">Featured Projects</h2>
        
        <div className="glass-effect rounded-3xl p-8 mb-12">
          <div className="carousel-container rounded-2xl overflow-hidden">
            <div className="carousel-slide">
              {projects.map((project, index) => (
                <div key={index} className="project-card p-6 text-center">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-48 object-cover rounded-lg mb-4"
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
