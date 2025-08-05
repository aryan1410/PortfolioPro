import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, Users, Award, Target, Heart } from 'lucide-react';

const leadershipExperiences = [
  {
    title: "Senior Executive",
    organization: "MUN Society MPSTME",
    period: "Aug 2021 - Jun 2022",
    location: "Mumbai, India",
    type: "Leadership & Research",
    icon: <Users className="w-5 h-5" />,
    description: "Led a current affairs research team to create study guides for the large number of delegates that take part in our events. Gained valuable experience as part of the organizing committee of a large scale event.",
    achievements: [
      "Led a 15-member research team to create comprehensive study guides covering 8+ international crisis scenarios for MUN delegates",
      "Coordinated with organizing committee to successfully execute large-scale international MUN conferences with 300+ participants from across India",
      "Developed innovative strategic frameworks for real-time current affairs analysis, improving delegate preparation efficiency",
      "Mentored 25+ junior executives and delegates in advanced research methodologies, diplomatic protocols, and presentation skills",
      "Initiated weekly briefing sessions that became standard practice, enhancing overall event quality and delegate performance",
      "Established collaborative partnerships with news agencies and think tanks to ensure access to up-to-date global affairs information"
    ],
    skills: ["Team Leadership", "Research & Analysis", "Event Management", "Strategic Planning"]
  },
  {
    title: "Executive - Business Development & Marketing",
    organization: "MUN Society MPSTME",
    period: "Aug 2020 - Jun 2021",
    location: "Mumbai, India",
    type: "Business Development",
    icon: <Target className="w-5 h-5" />,
    description: "Worked as an Executive for the Business development and marketing department. Used self made databases to pitch to various companies, start ups, businesses, etc. to sponsor our events in cash or in kind in return for publicity and exposure deliverables that were offered to them.",
    achievements: [
      "Created and maintained comprehensive CRM databases with potential sponsors, increasing outreach efficiency",
      "Successfully secured sponsorships worth ₹1L+ from 20+ companies, startups, and businesses through strategic pitching",
      "Developed innovative tiered sponsorship packages with customized publicity and exposure deliverables, resulting in 85% sponsor retention rate",
      "Pioneered data-driven approach to sponsor targeting, analyzing company values and CSR initiatives for better alignment",
      "Negotiated mutually beneficial partnerships that provided sponsors with meaningful brand exposure while funding critical MUN operations",
      "Trained 5+ junior marketing executives in professional pitching techniques and corporate relationship management"
    ],
    skills: ["Business Development", "Database Management", "Sales & Pitching", "Corporate Relations"]
  },
  {
    title: "Member",
    organization: "Rotaract Club of Bombay Airport",
    period: "Aug 2020 - Jul 2022",
    location: "Mumbai, India",
    type: "Social Services",
    icon: <Heart className="w-5 h-5" />,
    description: "Part of a group of driven people who work tirelessly for the cause 'Act for Impact' and aimed to give something back to the society through various events such as donation drives, letter distributions and much more.",
    achievements: [
      "Spearheaded community service initiatives under 'Act for Impact' mission, directly benefiting individuals from underprivileged communities",
      "Organized and executed large-scale donation drives collecting  essentials including food, clothing, and educational materials",
      "Coordinated letter distribution campaigns during COVID-19, delivering motivational letters to isolated elderly residents",
      "Initiated digital literacy workshops for underprivileged children, teaching basic computer skills to students"
    ],
    skills: ["Community Service", "Social Impact", "Event Coordination", "Team Collaboration"]
  },
  {
    title: "Marketing Executive",
    organization: "Music Committee MPSTME",
    period: "Sep 2021 - Aug 2022",
    location: "Mumbai, India",
    type: "Arts & Marketing",
    icon: <Award className="w-5 h-5" />,
    description: "Worked in a team responsible for raising funds for musical events. Performing in a band as a vocalist taking part in inter college fests and intra college events.",
    achievements: [
      "Successfully raised funds through strategic fundraising campaigns for musical events and performances",
      "Performed as lead vocalist in college band, participating inter-college and intra-college festivals with consistent top-3 placements and 3 wins",
      "Balanced dual roles of artistic performer and business executive, demonstrating exceptional multitasking and time management skills"
    ],
    skills: ["Fundraising", "Performance Arts", "Marketing Strategy", "Multi-tasking"]
  },
  {
    title: "Performing Arts Executive",
    organization: "Sattva 2021 - College Cultural Festival",
    period: "Dec 2020 - Mar 2021",
    location: "Mumbai, India",
    type: "Arts & Culture",
    icon: <Users className="w-5 h-5" />,
    description: "Worked in a team that accumulated and hosted talent from all over the country to perform at our college's cultural festival Sattva.",
    achievements: [
      "Curated and coordinated 50+ talented performers from states across India for Sattva 2021, one of Mumbai's premier college cultural festivals",
      "Managed complex logistics including travel, accommodation, and technical requirements for artists over 3-day festival period",
      "Built extensive networks with artists and cultural groups nationwide, creating lasting partnerships for future collaborations",
      "Pioneered virtual audition processes during COVID-19, enabling talent discovery despite travel restrictions and safety protocols",
      "Established standardized artist onboarding processes that became permanent festival protocols, improving efficiency for subsequent years"
    ],
    skills: ["Talent Management", "Event Coordination", "Networking", "Cultural Programming"]
  },
  {
    title: "Event Head",
    organization: "St. Mary's School ICSE Mumbai - Immaculata Cultural Festival",
    period: "Mar 2018 - Jul 2018",
    location: "Mumbai, India",
    type: "Student Leadership",
    icon: <Target className="w-5 h-5" />,
    description: "Led a group of volunteers and successfully pulled off an event in my school's annual cultural fest, Immaculata.",
    achievements: [
      "Led 20-member volunteer team to successfully execute major school cultural festival sporting event (human fooseball) with 100+ attendees",
      "Managed comprehensive planning including budgeting, venue logistics, volunteer coordination, and seamless day-of-event execution",
      "Implemented innovative crowd management and safety protocols that became standard practices for subsequent school events",
      "Achieved 95% participant satisfaction rate through meticulous planning and proactive problem-solving during live event challenges",
      "Demonstrated conflict resolution skills by successfully managing team disagreements and ensuring cohesive event execution."
    ],
    skills: ["Early Leadership", "Volunteer Management", "Event Planning", "Team Coordination"]
  }
];

interface LeadershipCardProps {
  experience: typeof leadershipExperiences[0];
  isExpanded: boolean;
  onToggle: () => void;
}

function LeadershipCard({ experience, isExpanded, onToggle }: LeadershipCardProps) {
  return (
    <Card className="mb-6 bg-slate-900/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-4">
            <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
              {experience.icon}
            </div>
            <div className="flex-1">
              <CardTitle className="text-xl text-white mb-2">{experience.title}</CardTitle>
              <div className="space-y-1">
                <p className="text-blue-400 font-medium">{experience.organization}</p>
                <p className="text-slate-400 text-sm">{experience.period} • {experience.location}</p>
                <Badge variant="outline" className="border-blue-500/30 text-blue-300 mt-2">
                  {experience.type}
                </Badge>
              </div>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggle}
            className="text-slate-400 hover:text-white"
          >
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </Button>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <p className="text-slate-300 mb-4 leading-relaxed">{experience.description}</p>

        {isExpanded && (
          <div className="space-y-4 animate-in slide-in-from-top-2 duration-300">
            <div>
              <h4 className="text-white font-semibold mb-3 flex items-center">
                <Target className="w-4 h-4 mr-2 text-blue-400" />
                Key Achievements
              </h4>
              <ul className="space-y-2">
                {experience.achievements.map((achievement, index) => (
                  <li key={index} className="text-slate-300 flex items-start">
                    <span className="text-blue-400 mr-2 mt-1">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-3">Skills Demonstrated</h4>
              <div className="flex flex-wrap gap-2">
                {experience.skills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="bg-blue-500/10 text-blue-300 border-blue-500/20"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default function Leadership() {
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());

  const toggleExpanded = (index: number) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <section id="leadership" className="py-20 px-4 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Leadership & <span className="text-blue-400">Volunteering</span>
          </h2>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Extensive experience in leadership roles across Model United Nations, cultural organizations, and social service initiatives. 
            Passionate about combining business development, artistic expression, and community service to create meaningful impact.
          </p>
        </div>

        <div className="grid gap-6">
          {leadershipExperiences.map((experience, index) => (
            <LeadershipCard
              key={index}
              experience={experience}
              isExpanded={expandedItems.has(index)}
              onToggle={() => toggleExpanded(index)}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Leadership Philosophy</h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              My leadership journey spans from <span className="text-blue-400 font-semibold">Model United Nations</span> research 
              and diplomacy to <span className="text-blue-400 font-semibold">social service</span> through Rotaract, 
              combined with <span className="text-blue-400 font-semibold">business development</span> and 
              <span className="text-blue-400 font-semibold"> cultural programming</span>. I believe in leading through 
              collaboration, creative problem-solving, and making a positive impact in every community I serve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}