import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, MessageSquare } from 'lucide-react';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const handleContactClick = () => {
    window.location.href = 'mailto:kathrynkilch@gmail.com';
  };

  return (
    <div className="min-h-screen bg-stone-50 text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-stone-50/95 backdrop-blur-sm z-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="text-4xl font-serif italic font-bold text-teal-600">
              KK
            </div>
            
            <div className="hidden md:flex items-center gap-12">
              <button 
                onClick={() => scrollToSection('home')} 
                className="text-gray-700 hover:text-teal-600 transition-colors border-b-2 border-transparent hover:border-teal-600 pb-1">
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-gray-700 hover:text-teal-600 transition-colors border-b-2 border-transparent hover:border-teal-600 pb-1">
                About
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')} 
                className="text-gray-700 hover:text-teal-600 transition-colors border-b-2 border-transparent hover:border-teal-600 pb-1">
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="px-6 py-2.5 bg-white border-2 border-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-all flex items-center gap-2">
                <MessageSquare size={18} />
                Contact Me
              </button>
            </div>

            <button 
              className="md:hidden text-gray-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden pt-6 pb-4 flex flex-col gap-4">
              <button onClick={() => scrollToSection('home')} className="text-left text-gray-700 hover:text-teal-600 py-2">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-left text-gray-700 hover:text-teal-600 py-2">About</button>
              <button onClick={() => scrollToSection('portfolio')} className="text-left text-gray-700 hover:text-teal-600 py-2">Portfolio</button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-gray-700 hover:text-teal-600 py-2">Contact</button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center px-8 pt-24">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xl mb-4 text-gray-600">Hello,</p>
              <h1 className="text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                I'm <span className="text-teal-600">Kathryn Kilchenstein,</span>
              </h1>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-gray-800">
                A Digital Designer & Developer
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Media Arts & Design student at James Madison University specializing in interactive design
              </p>
              <button 
                onClick={handleContactClick}
                className="px-8 py-3 bg-gray-900 text-white rounded-full hover:bg-teal-600 transition-all flex items-center gap-2">
                <MessageSquare size={20} />
                Contact Me
              </button>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/kathryn-hero.jpg"
                  alt="Kathryn Kilchenstein"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">What I Do</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              I am a digital designer with expertise in building user-centered experiences, creating engaging multimedia content, and leveraging design thinking for innovative solutions. My work spans from developing intuitive web applications to crafting strategic digital campaigns that drive results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-stone-50 rounded-2xl p-8 border border-stone-200 hover:border-teal-600 transition-all">
              <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">UI/UX Design</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                I create intuitive, user-centered digital experiences through comprehensive research, wireframing, prototyping, and usability testing. My design process emphasizes accessibility, functionality, and visual appeal.
              </p>
              <p className="text-sm text-gray-500">
                Tools: Figma, Adobe XD, Sketch, Adobe Creative Suite, user research methodologies, A/B testing
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-8 border border-stone-200 hover:border-teal-600 transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Frontend Development</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                I build responsive, performant web applications using modern frameworks and best practices. From interactive prototypes to production-ready code, I bridge the gap between design and development.
              </p>
              <p className="text-sm text-gray-500">
                Technologies: HTML, CSS, JavaScript, React, Vue.js, Bootstrap, WordPress, responsive design patterns
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-8 border border-stone-200 hover:border-teal-600 transition-all">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Digital Marketing</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Currently at Cygnus Education Inc., I design and produce digital ad campaigns targeting prospective college students. I create multimedia content across platforms, focusing on audience targeting and brand consistency.
              </p>
              <p className="text-sm text-gray-500">
                Experience: Ad campaign design, content strategy, audience targeting, social media, video scripts, brand consistency
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-8 border border-stone-200 hover:border-teal-600 transition-all">
              <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Full-Stack Projects</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                I collaborate with engineering partners to build complete web applications, handling everything from UX research and interface design to frontend implementation and user testing.
              </p>
              <p className="text-sm text-gray-500">
                Skills: Cross-functional collaboration, agile workflows, user research, prototyping, frontend implementation, quality assurance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">My Portfolio</h2>
            <p className="text-lg text-gray-600">The following projects showcase my technical expertise.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Financial Portfolio Optimization */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-stone-200 hover:shadow-2xl transition-all group md:col-span-2">
              <div className="grid grid-cols-1 gap-0">
                <div className="overflow-hidden aspect-video">
                  <img 
                    src="/images/project-finance.png"
                    alt="Financial Portfolio Optimization - Optimizer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="overflow-hidden aspect-video">
                  <img 
                    src="/images/project-finance-news.png"
                    alt="Financial Portfolio Optimization - News Evaluation"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-teal-600 transition-colors">Financial Portfolio Optimization</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  A responsive web app that helps users find the best mix of mutual funds using historical data to estimate returns and risks. Features intuitive data visualizations for portfolio analysis, sentiment analysis of market news, and AI-powered insights to guide investment decisions.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-xs">React</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">JavaScript</span>
                  <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs">UI/UX Design</span>
                  <span className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-xs">Data Visualization</span>
                  <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs">Natural Language Processing</span>
                </div>
                <p className="text-xs text-gray-500">August 2025 – Present</p>
              </div>
            </div>

            {/* VibeCode Journal */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-stone-200 hover:shadow-2xl transition-all group">
              <div className="aspect-video overflow-hidden bg-white">
                <img 
                  src="/images/vibecode-journal.png"
                  alt="VibeCode Journal"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-teal-600 transition-colors">VibeCode Journal</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  AI-assisted journaling and mood-tracking web app featuring daily reflections, timeline view, and emotional trend visualizations. Built with Firebase for secure authentication and data storage.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-xs">React</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">Tailwind CSS</span>
                  <span className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-xs">Firebase</span>
                  <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs">AI Integration</span>
                </div>
                <p className="text-xs text-gray-500">Recent Project</p>
              </div>
            </div>

            {/* FridgeBuddy App */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-stone-200 hover:shadow-2xl transition-all group">
              <div className="aspect-video overflow-hidden bg-gradient-to-br from-teal-50 to-cyan-50">
                <img 
                  src="/images/fridgebuddy.png"
                  alt="FridgeBuddy App"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 p-4"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-teal-600 transition-colors">FridgeBuddy App</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Food inventory management app with recipe recommendations and expiration tracking. Resulted in a 25% reduction in food waste for users through smart inventory management.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-xs">Figma</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">HTML/CSS</span>
                  <span className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-xs">JavaScript</span>
                  <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs">UI/UX Design</span>
                </div>
                <p className="text-xs text-gray-500">January 2024 – Present</p>
              </div>
            </div>

            {/* SugarWorks Bakery */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-stone-200 hover:shadow-2xl transition-all group">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="/images/sugarworks.png"
                  alt="SugarWorks Bakery Website"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-teal-600 transition-colors">SugarWorks Bakery Website</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Custom WordPress website featuring menu, gallery, and contact form. Optimized for SEO resulting in a 30% increase in online traffic for the local bakery.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-xs">WordPress</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">Web Design</span>
                  <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs">Figma</span>
                  <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs">SEO</span>
                </div>
                <p className="text-xs text-gray-500">August 2023 – Present</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4">Contact Me</h2>
            <p className="text-lg text-gray-600">Let's discuss work opportunities</p>
          </div>

          <div className="bg-stone-50 rounded-2xl p-12 mb-12 text-center border border-stone-200">
            <p className="text-gray-700 mb-6">I'm currently looking for new opportunities. Feel free to reach out!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:kathrynkilch@gmail.com" 
                 className="px-8 py-3 bg-gray-900 text-white rounded-full hover:bg-teal-600 transition-all inline-flex items-center justify-center gap-2">
                <Mail size={20} />
                Email Me
              </a>
              <a href="tel:443-970-5508"
                 className="px-8 py-3 bg-white border-2 border-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-all inline-flex items-center justify-center gap-2">
                <Phone size={20} />
                Call Me
              </a>
            </div>
          </div>

          <div className="flex justify-center gap-6">
            <a href="https://www.linkedin.com/in/kathryn-kilchenstein-7902982b1/" target="_blank" rel="noopener noreferrer" 
               className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
              <Linkedin size={24} className="text-white" />
            </a>
            <a href="mailto:kathrynkilch@gmail.com"
               className="w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors">
              <Mail size={24} className="text-white" />
            </a>
            <a href="tel:443-970-5508"
               className="w-14 h-14 bg-teal-600 rounded-full flex items-center justify-center hover:bg-teal-700 transition-colors">
              <Phone size={24} className="text-white" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 bg-stone-50 border-t border-stone-200">
        <div className="max-w-7xl mx-auto text-center text-gray-600 text-sm">
          <p>Copyright © 2025 Kathryn Kilchenstein. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
