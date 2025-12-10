import { Heart, Instagram, Linkedin, Dribbble } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/_fatenn__/', label: 'Instagram', color: 'from-rose-500 to-pink-500' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/faten-ben-mohamed-21331b265/', label: 'LinkedIn', color: 'from-blue-500 to-blue-600' },
    { icon: Dribbble, href: '#', label: 'Dribbble', color: 'from-pink-500 to-rose-500' },
  ];

  return (
    <footer className="bg-gradient-to-b from-white to-rose-50/30 py-16 px-6 border-t border-rose-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center space-y-8">
          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((social, index) => (
            <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="group relative w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-gray-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
                <div className={`absolute inset-0 bg-gradient-to-br ${social.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <social.icon className="w-6 h-6 relative z-10 group-hover:text-white transition-colors duration-300" />
            </a>
            ))}
          </div>

          {/* Brand Message */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2 text-gray-700">
              <span className="text-lg font-medium">Made with</span>
              <Heart className="w-5 h-5 text-rose-500 fill-rose-500 animate-pulse" />
              <span className="text-lg font-medium">by</span>
              <span className="text-lg font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
                Faten Ben Mohamed
              </span>
            </div>
            <p className="text-gray-500 text-sm max-w-2xl">
              Crafting beautiful design experiences that inspire and delight. 
              Let's create something amazing together.
            </p>
          </div>

          {/* Divider */}
          <div className="w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-rose-200 to-transparent"></div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl text-sm text-gray-500">
            <p>© 2025 Faten Ben Mohamed. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-rose-500 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-rose-500 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
