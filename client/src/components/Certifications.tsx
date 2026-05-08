import { ExternalLink, Award } from "lucide-react";
import googleLogo from "@assets/google_logo.png";
import ibmLogo from "@assets/ibm_logo.svg";
import awsLogo from "@assets/aws_logo.svg";

const certifications = [
  {
    title: "5-Day AI Agents Intensive Course",
    issuer: "Google",
    platform: "Kaggle",
    credentialUrl: "https://www.kaggle.com/certification/badges/aryanshah14/105",
    logo: <img src={googleLogo} alt="Google" className="w-12 h-auto object-contain" />,
    accentColor: "from-blue-500/20 to-red-500/10",
    badgeColor: "bg-blue-600",
    tags: ["AI Agents", "LLMs", "Prompt Engineering", "Kaggle"],
  },
  {
    title: "Supervised Machine Learning: Regression",
    issuer: "IBM",
    platform: "Coursera",
    credentialUrl: "https://www.coursera.org/account/accomplishments/certificate/QVPUFFENCARD",
    logo: <img src={ibmLogo} alt="IBM" className="w-12 h-auto object-contain" />,
    accentColor: "from-blue-600/20 to-cyan-500/10",
    badgeColor: "bg-cyan-700",
    tags: ["Machine Learning", "Regression", "Python", "Scikit-learn"],
  },
  {
    title: "AWS Certified Machine Learning Engineer – Associate",
    issuer: "Amazon Web Services",
    platform: "Credly",
    credentialUrl: "https://www.credly.com/badges/6868323a-5995-4663-9868-0623489ecd08/linked_in_profile",
    logo: <img src={awsLogo} alt="AWS" className="w-12 h-auto object-contain" />,
    accentColor: "from-orange-500/20 to-yellow-500/10",
    badgeColor: "bg-orange-600",
    tags: ["AWS", "Machine Learning", "MLOps", "Cloud"],
  },
  {
    title: "Exploratory Data Analysis for Machine Learning (Honors)",
    issuer: "IBM",
    platform: "Coursera",
    credentialUrl: "https://www.coursera.org/account/accomplishments/certificate/LTUMMN68QAEW",
    logo: <img src={ibmLogo} alt="IBM" className="w-12 h-auto object-contain" />,
    accentColor: "from-blue-600/20 to-cyan-500/10",
    badgeColor: "bg-cyan-700",
    tags: ["Data Analysis", "Pandas", "Statistics", "Data Visualization"],
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Certifications</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => {
            const isLastOdd = certifications.length % 2 !== 0 && index === certifications.length - 1;
            return (
            <a
              key={cert.title}
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative glass-effect rounded-3xl p-8 hover:scale-105 transition-all duration-300 group block${isLastOdd ? " md:col-span-2 md:w-1/2 md:mx-auto" : ""}`}
            >
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${cert.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-gray-800 rounded-2xl">{cert.logo}</div>
                  <div>
                    <p className="text-sm text-gray-400 uppercase tracking-widest font-medium">{cert.issuer}</p>
                    <p className="text-xs text-gray-500">via {cert.platform}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-1 text-blue-400 group-hover:text-blue-300 transition-colors">
                  <span className="text-xs font-medium">View Credential</span>
                  <ExternalLink size={14} />
                </div>
              </div>

              <div className="mb-5">
                <div className="flex items-start space-x-3">
                  <Award className="text-yellow-400 mt-1 flex-shrink-0" size={20} />
                  <h3 className="text-xl font-bold leading-snug">{cert.title}</h3>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {cert.tags.map((tag) => (
                  <span key={tag} className={`${cert.badgeColor} text-white text-xs px-3 py-1 rounded-full font-medium`}>
                    {tag}
                  </span>
                ))}
              </div>
            </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
