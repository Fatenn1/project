import { Eye, ExternalLink, Sparkles, Globe, Shield, Palette, Layers, Zap, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface Project {
  id: number;
  title: string;
  category: string;
  color: string;
  description: string;
  longDescription: string;
  url?: string;
  icon: React.ElementType;
  features: string[];
  year: string;
  image?: string;
}

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Club Securinets',
      category: 'Brand Identity & UI/UX Design',
      color: 'from-white via-gray-100 to-gray-200', // from-blue-500 via-indigo-500 to-purple-600',
      description: 'Complete brand identity and digital design for a security-focused organization',
      longDescription: 'Led the complete brand identity design and user experience for Club Securenest, creating a cohesive visual language that communicates trust, security, and professionalism. The project included logo design, brand guidelines, website UI/UX, and digital marketing materials.',
      url: 'https://clubsecurenest.com',
      icon: Shield,
      features: ['Brand Identity', 'Logo Design', 'UI/UX Design', 'Brand Guidelines', 'Digital Assets'],
      year: '2024',
      image: '/projects/club-securinets.jpg',
    },
    {
      id: 2,
      title: '3afssa.tn',
      category: 'Web Design & Branding',
      color: 'from-white via-gray-100 to-gray-200',
      description: 'Personal design portfolio and creative showcase platform',
      longDescription: 'Designed and developed 3afssa.tn, a personal design portfolio showcasing creative work, design process, and artistic vision. The platform features a modern, elegant interface that reflects the designer\'s aesthetic and provides an immersive experience for visitors.',
      url: 'https://3afssa.tn',
      icon: Globe,
      features: ['Web Design', 'Portfolio Platform', 'Brand Identity', 'Creative Direction', 'User Experience'],
      year: '2024',
      image: '/projects/3afssa.jpg',
    },
    {
      id: 3,
      title: 'Logos Creator',
      category: 'Logo Design',
      color: 'from-white via-gray-100 to-gray-200',
      description: 'Creative and professional logo design services',
      longDescription: 'Specializing in creating unique, memorable logos that capture brand identity and stand out in the market. Each design is tailored to reflect the client\'s vision and values with careful attention to typography, symbolism, and visual impact.',
      icon: Palette,
      features: ['Logo Design', 'Brand Identity', 'Concept Development', 'Multiple Variations', 'File Formats'],
      year: '2022',
      image: '/projects/ImmoWeb.png',
    },
    {
      id: 4,
      title: 'Posters Creator',
      category: 'Poster Design',
      color: 'from-white via-gray-100 to-gray-200',
      description: 'Eye-catching poster design for events and promotions',
      longDescription: 'Creating impactful poster designs that grab attention and communicate your message effectively. From event promotions to advertising campaigns, each poster is designed to resonate with your target audience.',
      icon: Layers,
      features: ['Poster Design', 'Layout Design', 'Typography', 'Creative Direction', 'Print Ready'],
      year: '2024',
      image: '/projects/openfinal.png',
    },
    {
      id: 5,
      title: 'Stickers Maker',
      category: 'Sticker Design',
      color: 'from-white via-gray-100 to-gray-200',
      description: 'Custom sticker designs for brands and personal use',
      longDescription: 'Designing fun and functional stickers that enhance brand visibility. Perfect for merchandise, promotional items, or personal expression. Each sticker design is optimized for printing and durability.',
      icon: Zap,
      features: ['Sticker Design', 'Brand Mascots', 'Illustration', 'Print Optimization', 'Die-Cut Ready'],
      year: '2024',
      image: '/projects/Pack1.png',
    },
    {
      id: 6,
      title: 'Clothes Design',
      category: 'Apparel & Merchandise',
      color: 'from-white via-gray-100 to-gray-200',
      description: 'Custom clothing and apparel design services',
      longDescription: 'Designing unique clothing designs and apparel graphics that express individuality and style. From t-shirt graphics to full collection designs, creating wearable art that makes a statement.',
      icon: Palette,
      features: ['Apparel Design', 'Graphic Design', 'Print Design', 'Mockups', 'Brand Consistency'],
      year: '2024',
      image: '/projects/Hoodie.jpg',
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 px-6 relative" id="portfolio">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-rose-500 via-pink-500 to-amber-400 bg-clip-text text-transparent">
            Portfolio
          </h2>
          <p className="text-gray-600 text-xl md:text-2xl max-w-3xl mx-auto mb-6">
            A curated collection of my design projects and creative work
          </p>
          {/* Featured Projects Badge */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-2 rounded-full border border-blue-200">
              <Shield className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-700">Designer of Club Securinets</span>
            </div>
            <a
              href="https://3afssa.tn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gradient-to-r from-rose-50 to-pink-50 px-4 py-2 rounded-full border border-rose-200 hover:from-rose-100 hover:to-pink-100 transition-colors"
            >
              <Globe className="w-4 h-4 text-rose-600" />
              <span className="text-sm font-semibold text-rose-700">3afssa.tn</span>
              <ExternalLink className="w-3 h-3 text-rose-600" />
            </a>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className="group relative bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-gray-100"
                style={{
                  animation: isVisible ? `scaleIn 0.6s ease-out ${index * 0.1}s both` : 'none',
                }}
              >
                {/* Image/Visual Area */}
                <div 
                  className="relative aspect-[3/2] bg-white flex items-center justify-center overflow-hidden cursor-pointer"
                  onClick={() => project.image && setSelectedImage(project.image)}
                >
                  {/* Project Image */}
                  {project.image ? (
                    <>
                      {/* White Background */}
                      <div className="absolute inset-0 bg-white"></div>
                      
                      {/* Project Image */}
                      <img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 z-10"
                        loading="lazy"
                        onError={(e) => {
                          // Hide image and show icon fallback if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                    </>
                  ) : (
                    <>
                      {/* White Background with subtle pattern */}
                      <div className="absolute inset-0 bg-white">
                        <div className="absolute inset-0 opacity-5">
                          <div className="absolute top-4 left-4 w-32 h-32 rounded-full bg-gray-200 blur-2xl"></div>
                          <div className="absolute bottom-4 right-4 w-40 h-40 rounded-full bg-gray-200 blur-2xl"></div>
                        </div>
                      </div>
                    </>
                  )}
                  
                  {/* Year Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg z-20 border border-gray-200">
                    <span className="text-xs font-bold text-gray-700">{project.year}</span>
                  </div>
                  
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center z-20">
                    <div className="flex flex-col items-center space-y-3 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      {project.url ? (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full hover:bg-white/30 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Eye className="w-5 h-5" />
                          <span className="font-semibold">Visit Website</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      ) : (
                        <div className="flex items-center space-x-2">
                          <Eye className="w-6 h-6" />
                          <span className="font-semibold">View Details</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Sparkle Effect */}
                  <Sparkles className="absolute top-4 right-4 w-6 h-6 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8">
                  <div className="flex items-center justify-between mb-3">
                    <div className="inline-block px-3 py-1.5 bg-gradient-to-r from-rose-100 to-pink-100 rounded-full">
                      <span className="text-xs font-semibold text-rose-600 uppercase tracking-wide">
                        {project.category}
                      </span>
                    </div>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-rose-500 hover:text-rose-600 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-rose-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Features Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs rounded-lg font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                    {project.features.length > 3 && (
                      <span className="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs rounded-lg font-medium">
                        +{project.features.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center animate-fade-in">
          <div className="bg-gradient-to-r from-rose-500 via-pink-500 to-amber-400 rounded-3xl p-12 shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Interested in Working Together?
            </h3>
            <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
              Let's create something amazing together. Get in touch to discuss your next project.
            </p>
            <a
              href="#contact"
              className="inline-block bg-white text-rose-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Start a Project
            </a>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-5xl max-h-[85vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage}
              alt="Full size"
              className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
