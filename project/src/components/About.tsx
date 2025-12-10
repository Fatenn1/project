import { Heart, Lightbulb, Sparkles, Palette, Award, Coffee, Camera } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function About() {
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
  const skills = [
    { icon: Palette, title: 'Brand Identity', description: 'Creating cohesive visual identities that tell your story', color: 'from-rose-400 to-pink-500' },
    { icon: Lightbulb, title: 'Creative Direction', description: 'Leading projects with vision and artistic excellence', color: 'from-amber-400 to-orange-500' },
    { icon: Heart, title: 'UX/UI Design', description: 'Designing beautiful and intuitive user experiences', color: 'from-pink-400 to-rose-500' },
    { icon: Sparkles, title: 'Visual Design', description: 'Crafting stunning graphics and illustrations', color: 'from-purple-400 to-pink-500' },
  ];

  const interests = [
    { icon: Camera, text: 'Photography' },
    { icon: Coffee, text: 'Coffee Culture' },
    { icon: Award, text: 'Art Exhibitions' },
  ];

  return (
    <section ref={sectionRef} className="py-24 px-6 relative" id="about">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-rose-500 via-pink-500 to-amber-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-600 text-xl md:text-2xl max-w-3xl mx-auto text-balance">
            A passionate designer with a love for creating beautiful, meaningful work
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Photo Card */}
          <div 
            className="relative group"
            style={{
              animation: isVisible ? 'slideUp 0.8s ease-out 0.2s both' : 'none',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-rose-300 to-pink-400 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
            <div className="relative bg-gradient-to-br from-rose-100 via-pink-100 to-amber-50 rounded-3xl p-6 md:p-8 aspect-square flex items-center justify-center shadow-2xl border border-rose-200/50 overflow-hidden group-hover:scale-105 transition-transform duration-500">
              <img 
                src="/faten.jpg" 
                alt="Faten Ben Mohamed" 
                className="w-full h-full object-cover rounded-2xl group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Bio Text */}
          <div 
            className="space-y-6"
            style={{
              animation: isVisible ? 'slideUp 0.8s ease-out 0.4s both' : 'none',
            }}
          >
            <p className="text-gray-700 leading-relaxed text-lg md:text-xl">
              Hello! I'm <span className="font-semibold text-rose-600">Faten Ben Mohamed</span>, a 3rd year IOT (Internet of Things) student at <a href="https://isitcom.rnu.tn" target="_blank" rel="noopener noreferrer" className="font-semibold text-rose-600 hover:text-rose-700 underline">ISITCom</a> and a designer who believes in the power of aesthetics and emotion.
              My journey in design has been driven by curiosity, creativity, and a desire to make
              the world more beautiful one project at a time.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg md:text-xl">
              I specialize in creating visual experiences that are not only stunning but also
              meaningful. I'm the designer behind <span className="font-semibold text-rose-600">Club Securinets</span>, where I created the complete brand identity and digital experience. 
              I also maintain my personal design portfolio at <a href="https://www.instagram.com/3afssa.tn_/" target="_blank" rel="noopener noreferrer" className="font-semibold text-rose-600 hover:text-rose-700 underline">3afssa.tn</a>, showcasing my creative work and design process.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg md:text-xl">
              Whether it's branding, digital design, or creative direction, I bring
              passion and precision to every project. When I'm not designing, you'll find me exploring art galleries, sipping coffee,
              and seeking inspiration in the beauty of everyday moments.
            </p>
            
            {/* Interests */}
            <div className="flex flex-wrap gap-4 pt-4">
              {interests.map((interest, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <interest.icon className="w-4 h-4 text-rose-500" />
                  <span className="text-sm font-medium text-gray-700">{interest.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100"
              style={{
                animation: isVisible ? `scaleIn 0.5s ease-out ${index * 0.1}s both` : 'none',
              }}
            >
              <div className={`bg-gradient-to-br ${skill.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                <skill.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-rose-600 transition-colors">
                {skill.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{skill.description}</p>
            </div>
          ))}
        </div>

        {/* Languages */}
        <div className="mt-20 pt-12 border-t border-gray-200">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-rose-500 via-pink-500 to-amber-400 bg-clip-text text-transparent">
              Languages
            </h2>
            <p className="text-gray-600 text-xl md:text-2xl max-w-3xl mx-auto">
              Fluent in multiple languages to communicate effectively with diverse audiences
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {/* Arabic */}
            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-rose-600 transition-colors">
                Arabic
              </h3>
              <p className="text-gray-600 font-semibold mb-4">Native Speaker</p>
              <div className="flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-rose-500"></div>
                ))}
              </div>
            </div>

            {/* Français */}
            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-rose-600 transition-colors">
                Français
              </h3>
              <p className="text-gray-600 font-semibold mb-4">Fluent</p>
              <div className="flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className={`w-2 h-2 rounded-full ${i < 4 ? 'bg-rose-500' : 'bg-gray-300'}`}></div>
                ))}
              </div>
            </div>

            {/* Anglais */}
            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-rose-600 transition-colors">
                Anglais
              </h3>
              <p className="text-gray-600 font-semibold mb-4">Fluent</p>
              <div className="flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className={`w-2 h-2 rounded-full ${i < 4 ? 'bg-rose-500' : 'bg-gray-300'}`}></div>
                ))}
              </div>
            </div>

            {/* Deutsch */}
            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-rose-600 transition-colors">
                Deutsch
              </h3>
              <p className="text-gray-600 font-semibold mb-4">A little bit</p>
              <div className="flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className={`w-2 h-2 rounded-full ${i < 2 ? 'bg-rose-500' : 'bg-gray-300'}`}></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
