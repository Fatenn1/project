import { Mail, MessageCircle, Send, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-24 px-6 relative" id="contact">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-rose-500 via-pink-500 to-amber-400 bg-clip-text text-transparent">
            Let's Create Together
          </h2>
          <p className="text-gray-600 text-xl md:text-2xl max-w-3xl mx-auto">
            Have a project in mind? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
              <div className="bg-gradient-to-br from-rose-100 to-pink-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-rose-500" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
              <a
                href="mailto:fatenbm24@gmail.com"
                className="text-gray-600 hover:text-rose-500 transition-colors text-sm"
              >
                fatenbm24@gmail.com
              </a>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
              <div className="bg-gradient-to-br from-pink-100 to-rose-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-pink-500" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Phone</h3>
              <a
                href="tel:+21622529815"
                className="text-gray-600 hover:text-rose-500 transition-colors text-sm"
              >
                +216 22 529 815
              </a>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-amber-500" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Location</h3>
              <p className="text-gray-600 text-sm">Hammem-Sousse, Sousse</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100 h-full">
              <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Your Name
                    </label>
                <input
                  type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-200 focus:outline-none transition-all bg-white"
                  placeholder="Foulen EL Fouleni"
                      required
                />
              </div>

              <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Your Email
                    </label>
                <input
                  type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-200 focus:outline-none transition-all bg-white"
                  placeholder="amira.bensalem@example.tn"
                      required
                />
              </div>
            </div>

            <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Project Type
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-200 focus:outline-none transition-all bg-white"
                    required
                  >
                    <option value="">Select a project type</option>
                    <option value="logos">Logos</option>
                    <option value="posters">Posters</option>
                    <option value="stickers">Stickers</option>
                    <option value="clothes">Clothes / Apparel</option>
                    <option value="branding">Branding & Identity</option>
                    <option value="web-design">Web Design</option>
                    <option value="ecommerce">E-Commerce</option>
                    <option value="mobile-app">Mobile App</option>
                    <option value="editorial">Editorial / Print</option>
                    <option value="ui-ux">UI/UX Design</option>
                    <option value="other">Other</option>
              </select>
            </div>

            <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Tell me about your project
                  </label>
              <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                rows={6}
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-200 focus:outline-none transition-all resize-none bg-white"
                    placeholder="Share your vision, goals, and any ideas you have in mind..."
                    required
              />
            </div>

            <button
              type="submit"
                  className="group w-full bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 text-white py-5 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-3 overflow-hidden relative"
            >
                  <span className="relative z-10 flex items-center">
                    Send Message
                    <Send className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-rose-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </form>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
                  <a
                    href="mailto:fatenbm24@gmail.com"
                    className="flex items-center space-x-2 text-gray-600 hover:text-rose-500 transition-colors group"
                  >
                    <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">fatenbm24@gmail.com</span>
              </a>
                  <a
                    href="#"
                    className="flex items-center space-x-2 text-gray-600 hover:text-rose-500 transition-colors group"
                  >
                    <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">Let's chat</span>
              </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
