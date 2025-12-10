import { Code, Palette, Camera, Layers, PenTool, Sparkles } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface Skill {
  name: string;
  level: number;
  icon: React.ElementType;
  color: string;
}

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills: Skill[] = [
    { name: 'Adobe Photoshop', level: 95, icon: Sparkles, color: 'from-blue-600 to-blue-400' },
    { name: 'Adobe Illustrator', level: 94, icon: PenTool, color: 'from-orange-600 to-orange-400' },
    { name: 'Adobe InDesign', level: 92, icon: Layers, color: 'from-red-600 to-red-400' },
    { name: 'Logo & Brand Design', level: 96, icon: Palette, color: 'from-rose-500 to-pink-500' },
    { name: 'UI/UX Design', level: 90, icon: Code, color: 'from-pink-500 to-rose-500' },
    { name: 'Graphic Design & Illustration', level: 93, icon: PenTool, color: 'from-purple-500 to-pink-500' },
    { name: 'Print Design & Layout', level: 91, icon: Layers, color: 'from-amber-500 to-orange-500' },
    { name: 'Web Design', level: 88, icon: Code, color: 'from-blue-500 to-cyan-500' },
    { name: 'Creative Direction', level: 94, icon: Sparkles, color: 'from-rose-400 to-amber-500' },
  ];

  return (
    <section ref={sectionRef} className="py-24 px-6 relative" id="skills">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-rose-500 via-pink-500 to-amber-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-gray-600 text-xl md:text-2xl max-w-3xl mx-auto">
            A comprehensive overview of my design capabilities
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
                style={{
                  animation: isVisible ? `slideUp 0.8s ease-out ${index * 0.1}s both` : 'none',
                }}
              >
                <div className={`bg-gradient-to-br ${skill.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{skill.name}</h3>
                    <span className="text-lg font-semibold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
                      {skill.level}%
                    </span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{
                        width: isVisible ? `${skill.level}%` : '0%',
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

