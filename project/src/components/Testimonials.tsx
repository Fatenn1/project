import { Quote, Star } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string; // Emoji fallback
  photo?: string; // Photo path
}

export default function Testimonials() {
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

  const testimonials: Testimonial[] = [
    {
      name: 'Amira Ben Salem',
      role: 'Business Owner',
      company: 'Café Tunisien Premium',
      content: 'Faten designed our logo and it\'s parfait! The creativity and attention to our brand story was amazing. Our customers love the new identity, and it really helped us stand out in the market. Merci beaucoup!',
      rating: 5,
      avatar: '👩‍💼',
    },
    {
      name: 'Karim Houili',
      role: 'Marketing Manager',
      company: 'TechHub Tunis',
      content: 'Les stickers que Faten a créés pour notre campagne étaient magnifiques! The quality, the design, everything was perfect. Our team and customers loved them. Highly professional and creative!',
      rating: 5,
      avatar: '👨‍💻',
    },
    {
      name: 'Leila Zahra',
      role: 'Brand Manager',
      company: 'Artisanat Sousse',
      content: 'The logo and sticker designs Faten created for our artisan brand are absolutely stunning. Elle a vraiment compris notre vision et l\'a transformée en réalité. Our sales increased after the rebrand!',
      rating: 5,
      avatar: '👩‍🎨',
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 px-6 relative bg-gradient-to-b from-transparent to-rose-50/50" id="testimonials">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-rose-500 via-pink-500 to-amber-400 bg-clip-text text-transparent">
            Client Testimonials
          </h2>
          <p className="text-gray-600 text-xl md:text-2xl max-w-3xl mx-auto">
            What clients say about working with me
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
              style={{
                animation: isVisible ? `slideUp 0.8s ease-out ${index * 0.15}s both` : 'none',
              }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-16 h-16 text-rose-400" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 leading-relaxed mb-6 text-lg italic relative z-10">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4 pt-6 border-t border-gray-100">
                <div className="relative w-16 h-16 rounded-full overflow-hidden ring-3 ring-rose-200 group-hover:ring-rose-400 group-hover:scale-110 transition-all duration-300 flex-shrink-0 shadow-lg">
                  {testimonial.photo ? (
                    <>
                      <img
                        src={testimonial.photo}
                        alt={testimonial.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                        onError={(e) => {
                          // Fallback to emoji if photo fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = target.nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-rose-200 to-pink-200 flex items-center justify-center text-2xl hidden">
                        {testimonial.avatar}
                      </div>
                    </>
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-rose-200 to-pink-200 flex items-center justify-center text-2xl">
                      {testimonial.avatar}
                    </div>
                  )}
                  {/* Decorative ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-white/50 pointer-events-none"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-gray-800 text-lg group-hover:text-rose-600 transition-colors">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600 mt-0.5">
                    {testimonial.role} at <span className="font-medium">{testimonial.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

