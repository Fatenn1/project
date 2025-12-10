import { Sparkles, ArrowDown, MousePointerClick, Download } from 'lucide-react';

export default function Hero() {
  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
      <div className="max-w-7xl mx-auto text-center animate-fade-in">
        {/* Animated Avatar */}
        <div className="relative inline-block mb-8 animate-scale-in animate-float">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
          <Sparkles className="absolute -top-6 -left-6 w-10 h-10 text-amber-400 animate-pulse animate-float-delayed" />
          <Sparkles className="absolute -bottom-6 -right-6 w-8 h-8 text-pink-400 animate-pulse animate-float" style={{ animationDelay: '0.5s' }} />
          <Sparkles className="absolute top-1/2 -right-8 w-6 h-6 text-rose-400 animate-pulse animate-float-delayed" style={{ animationDelay: '1s' }} />
          <div className="relative bg-gradient-to-br from-rose-400 via-pink-500 to-rose-600 rounded-full w-44 h-44 md:w-52 md:h-52 flex items-center justify-center shadow-2xl ring-4 ring-rose-200/50 hover:scale-110 transition-transform duration-500 overflow-hidden group">
            <img 
              src="/faten.jpg" 
              alt="Faten Ben Mohamed" 
              className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 bg-gradient-to-r from-rose-500 via-pink-500 to-amber-400 bg-clip-text text-transparent animate-slide-up text-balance">
          Faten Ben Mohamed
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 mb-6 font-medium animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Creative Designer & Visual Storyteller
        </p>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed animate-slide-up text-balance" style={{ animationDelay: '0.4s' }}>
          Crafting beautiful and meaningful design experiences that inspire and delight.
          Specializing in visual design, branding, and creative direction.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <button
            onClick={scrollToPortfolio}
            className="group relative bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 text-white px-10 py-5 rounded-full font-semibold text-lg shadow-2xl hover:shadow-rose-500/50 transition-all duration-300 hover:scale-110 overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
          View My Work
              <ArrowDown className="ml-3 w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-rose-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>

          <a
            href="/cv/faten-ben-mohamed-cv.pdf"
            download="Faten-Ben-Mohamed-CV.pdf"
            className="group relative bg-white text-rose-600 px-10 py-5 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl border-2 border-rose-200 hover:border-rose-400 transition-all duration-300 hover:scale-110 flex items-center"
          >
            <Download className="mr-3 w-5 h-5 group-hover:animate-bounce" />
            <span>Download CV</span>
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <div className="group text-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mb-2">
              4+
            </div>
            <div className="text-gray-600 font-medium">Years Experience</div>
          </div>
          <div className="group text-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent mb-2">
              85+
            </div>
            <div className="text-gray-600 font-medium">Projects Completed</div>
          </div>
          <div className="group text-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-500 to-rose-500 bg-clip-text text-transparent mb-2">
              30+
            </div>
            <div className="text-gray-600 font-medium">Happy Clients</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <MousePointerClick className="w-6 h-6 text-rose-400" />
        </div>
      </div>
    </section>
  );
}
