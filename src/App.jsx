import React, { useState } from 'react';
import { Mail, Phone, Linkedin, MessageSquare } from 'lucide-react';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

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
        <div className="max-w-7xl mx-auto px-8 py-5">
          <div className="flex justify-between items-center">
            <div className="text-4xl italic font-bold text-teal-600" style={{ fontFamily: 'var(--font-display)' }}>
              KK
            </div>
            
            <div className="hidden md:flex items-center gap-10">
              <button 
                onClick={() => scrollToSection('home')} 
                className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors border-b-2 border-transparent hover:border-teal-600 pb-1">
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors border-b-2 border-transparent hover:border-teal-600 pb-1">
                About
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')} 
                className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors border-b-2 border-transparent hover:border-teal-600 pb-1">
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="px-6 py-2.5 text-sm font-medium bg-white border-2 border-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-all flex items-center gap-2">
                <MessageSquare size={16} />
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
      <section id="home" className="min-h-screen flex items-center px-8 pt-24 bg-[radial-gradient(circle_at_top_left,_rgba(20,184,166,0.16),_transparent_28%),radial-gradient(circle_at_80%_20%,_rgba(14,116,144,0.12),_transparent_24%)]">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-base md:text-lg mb-5 uppercase tracking-[0.24em] text-teal-700 font-semibold">Digital Marketing Portfolio</p>
              <h1 className="text-6xl lg:text-7xl font-bold mb-6 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
                I'm <span className="text-teal-600">Kathryn Kilchenstein,</span>
              </h1>
              <h2 className="text-3xl lg:text-5xl font-extrabold mb-6 text-gray-800 max-w-3xl">
                Content strategist creating social, campaign, and product storytelling that makes complex ideas feel clear.
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
                I build digital marketing content, campaign messaging, and visual assets for startups and growth-stage teams. My work helps technical and product-heavy brands communicate value quickly across LinkedIn, paid campaigns, and user-facing experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className="px-8 py-3.5 text-base font-medium bg-gray-900 text-white rounded-full hover:bg-teal-600 transition-all flex items-center gap-2 justify-center">
                  View Projects
                </button>
                <button 
                  onClick={handleContactClick}
                  className="px-8 py-3.5 text-base font-medium bg-white border-2 border-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-all flex items-center gap-2 justify-center">
                  <MessageSquare size={20} />
                  Contact Me
                </button>
              </div>
              <div className="grid sm:grid-cols-3 gap-4 max-w-3xl">
                <div className="bg-white/80 backdrop-blur-sm border border-stone-200 rounded-2xl px-5 py-4 shadow-sm">
                  <p className="text-sm uppercase tracking-[0.22em] text-gray-500 mb-2">Focus</p>
                  <p className="text-lg font-semibold leading-snug text-gray-800">Social content and campaign execution</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm border border-stone-200 rounded-2xl px-5 py-4 shadow-sm">
                  <p className="text-sm uppercase tracking-[0.22em] text-gray-500 mb-2">Strength</p>
                  <p className="text-lg font-semibold leading-snug text-gray-800">Turning technical products into clear stories</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm border border-stone-200 rounded-2xl px-5 py-4 shadow-sm">
                  <p className="text-sm uppercase tracking-[0.22em] text-gray-500 mb-2">Channels</p>
                  <p className="text-lg font-semibold leading-snug text-gray-800">LinkedIn, paid social, product content</p>
                </div>
              </div>
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
      <section id="about" className="py-24 px-8 bg-[linear-gradient(180deg,_rgba(255,255,255,1)_0%,_rgba(247,247,246,1)_100%)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>What I Do</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                I create digital marketing content and campaigns that help brands communicate clearly and drive engagement.
            </p>
            </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-stone-50 rounded-2xl p-8 border border-stone-200 hover:border-teal-600 transition-all">
              <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Digital Marketing</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                I develop and execute digital marketing campaigns across social media and paid channels. My work includes creating content, writing copy, and designing visuals that align with brand messaging and drive audience engagement.
              </p>
              <p className="text-base text-gray-500">
                Campaign development, social media content, paid advertising, copywriting, visual content
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-8 border border-stone-200 hover:border-teal-600 transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Content & Product Storytelling</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                I translate complex products and ideas into clear marketing content. This includes writing product messaging, creating visual assets, and developing content that helps audiences understand value quickly.
              </p>
              <p className="text-base text-gray-500">
                Product messaging, content creation, visual storytelling, audience clarity
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-8 border border-stone-200 hover:border-teal-600 transition-all">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Marketing Campaign Experience</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                At Cygnus Education, I created social media content and ad creatives for lead-generation campaigns targeting prospective college students. I worked across Instagram, LinkedIn, and Facebook, developing content, testing messaging, and refining campaigns based on performance.
              </p>
              <p className="text-base text-gray-500">
                Campaign execution, ad creative, social media channels, messaging tests, performance optimization
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-8 border border-stone-200 hover:border-teal-600 transition-all">
              <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Product & Startup Projects</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                I work on product-focused projects where I develop marketing messaging, content, and user-facing communication. My role focuses on making complex digital products easy to understand through clear content and visual storytelling.
              </p>
              <p className="text-base text-gray-500">
                Product marketing, messaging, visual storytelling, user communication
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Skills */}
      <section className="py-24 px-8 bg-[linear-gradient(180deg,_rgba(245,245,244,1)_0%,_rgba(238,242,242,1)_100%)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Marketing Skills</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A concise view of the skills and tools I use to build campaigns, shape messaging, and support visual storytelling.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 border border-stone-200 shadow-sm">
              <h3 className="text-2xl font-semibold mb-4">Core Skills</h3>
              <ul className="list-disc list-inside space-y-2 text-lg text-gray-600">
                <li>Content Strategy</li>
                <li>Campaign Development</li>
                <li>Brand Messaging</li>
                <li>Social Media Marketing</li>
                <li>Product Marketing</li>
                <li>Performance Marketing</li>
                <li>Visual Storytelling</li>
                <li>B2B Marketing</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-stone-200 shadow-sm">
              <h3 className="text-2xl font-semibold mb-4">Tools</h3>
              <ul className="list-disc list-inside space-y-2 text-lg text-gray-600">
                <li>Canva</li>
                <li>Adobe Creative Suite</li>
                <li>Figma</li>
                <li>AI tools for content ideation and marketing research</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media & Content Marketing */}
      <section id="social-media" className="py-24 px-8 bg-[linear-gradient(180deg,_rgba(255,255,255,1)_0%,_rgba(243,247,247,1)_100%)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Social Media & Content Marketing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Selected examples of LinkedIn content and visual marketing created for an early-stage B2B startup.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <div 
                className="relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer group mb-6"
                onClick={() => setSelectedImage('/images/post1.png')}
              >
                <img src="/images/post1.png" alt="LinkedIn Thought Leadership – ProcessTrace AI" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex flex-col items-center justify-center text-center p-4">
                  <h3 className="text-white text-xl font-bold mb-2">LinkedIn Thought Leadership</h3>
                  <p className="text-white text-sm">ProcessTrace AI</p>
                </div>
              </div>
              <p className="text-base text-gray-700 mb-2"><strong>Objective:</strong> Educate biotech and pharma teams on the hidden costs of deviation investigations</p>
              <p className="text-base text-gray-700 mb-2"><strong>Platform:</strong> LinkedIn (B2B audience)</p>
              <p className="text-lg text-gray-600 mb-2"><strong>What I did:</strong> Developed LinkedIn thought-leadership content and supporting visuals explaining how delays impact manufacturing operations.</p>
              <p className="text-lg text-gray-600"><strong>Why it matters:</strong> Helps build brand authority and makes complex technical topics understandable for a B2B audience.</p>
            </div>

            <div>
              <div 
                className="relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer group mb-6"
                onClick={() => setSelectedImage('/images/post2.png')}
              >
                <img src="/images/post2.png" alt="LinkedIn Educational Content – ProcessTrace AI" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex flex-col items-center justify-center text-center p-4">
                  <h3 className="text-white text-xl font-bold mb-2">LinkedIn Educational Content</h3>
                  <p className="text-white text-sm">ProcessTrace AI</p>
                </div>
              </div>
              <p className="text-base text-gray-700 mb-2"><strong>Objective:</strong> Explain why deviation investigations take weeks and highlight system-level complexity</p>
              <p className="text-base text-gray-700 mb-2"><strong>Platform:</strong> LinkedIn (B2B audience)</p>
              <p className="text-lg text-gray-600 mb-2"><strong>What I did:</strong> Created educational LinkedIn content that broke the investigation process into clear steps and visualized how delays compound across systems.</p>
              <p className="text-lg text-gray-600"><strong>Why it matters:</strong> Supports clearer product understanding and makes a dense operational topic easier for technical audiences to follow.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 px-8 bg-[radial-gradient(circle_at_top,_rgba(20,184,166,0.08),_transparent_20%),linear-gradient(180deg,_rgba(250,250,249,1)_0%,_rgba(255,255,255,1)_100%)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Selected Marketing & Product Projects</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">A mix of product storytelling, campaign content, and visual communication work designed to help brands explain complex ideas more clearly.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto mb-14">
            <div className="bg-white border border-stone-200 rounded-2xl px-6 py-5 shadow-sm">
              <p className="text-xs uppercase tracking-[0.24em] text-gray-500 mb-2">What I Bring</p>
              <p className="text-base font-semibold text-gray-800">Campaign thinking paired with strong content execution</p>
            </div>
            <div className="bg-white border border-stone-200 rounded-2xl px-6 py-5 shadow-sm">
              <p className="text-xs uppercase tracking-[0.24em] text-gray-500 mb-2">Project Lens</p>
              <p className="text-base font-semibold text-gray-800">Messaging, visuals, and product storytelling that reduce confusion</p>
            </div>
            <div className="bg-white border border-stone-200 rounded-2xl px-6 py-5 shadow-sm">
              <p className="text-xs uppercase tracking-[0.24em] text-gray-500 mb-2">Best Fit</p>
              <p className="text-base font-semibold text-gray-800">Startup and growth teams that need clear digital communication</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* ProcessTrace AI */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-stone-200 hover:shadow-2xl hover:-translate-y-1 transition-all group">
              <div className="aspect-video bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center cursor-pointer p-6" onClick={() => setSelectedImage('/images/ProcessTrace 1.png')}>
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src="/images/ProcessTrace 1.png"
                    alt="ProcessTrace AI"
                    className="w-full h-full object-cover rounded-2xl hover:opacity-80 transition-opacity border border-blue-200 shadow-sm"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-teal-600 transition-colors">ProcessTrace AI</h3>
                <p className="text-gray-700 font-medium mb-2 text-base">AI-powered investigation platform for pharmaceutical manufacturing</p>
                <p className="text-gray-600 mb-2 text-base">
                  Role: Marketing Lead
                </p>
                <p className="text-gray-600 mb-2 text-lg">
                  I develop content strategy, LinkedIn thought leadership, and visual assets that explain how the platform works for biotech teams without overwhelming them with jargon.
                </p>
                <p className="text-gray-600 mb-4 text-lg">
                  Impact: Clarifies the product story, supports buyer education, and helps technical stakeholders connect workflow pain points to the platform’s value.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <img 
                    src="/images/PT1.png"
                    alt="Platform Overview"
                    className="w-full h-20 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity border border-stone-200"
                    onClick={() => setSelectedImage('/images/PT1.png')}
                  />
                  <img 
                    src="/images/PT2.png"
                    alt="Technical Architecture"
                    className="w-full h-20 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity border border-stone-200"
                    onClick={() => setSelectedImage('/images/PT2.png')}
                  />
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-xs">B2B Marketing</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">Content Strategy</span>
                  <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs">Visual Storytelling</span>
                  <span className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-xs">Product Marketing</span>
                </div>
                <p className="text-xs text-gray-500">January 2026 – Present</p>
              </div>
            </div>

            {/* Financial Portfolio Optimization */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-stone-200 hover:shadow-2xl hover:-translate-y-1 transition-all group">
              <div className="aspect-video bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center cursor-pointer p-6" onClick={() => setSelectedImage('/images/project-finance.png')}>
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src="/images/project-finance.png"
                    alt="Financial Portfolio Optimization"
                    className="w-full h-full object-cover rounded-2xl hover:opacity-80 transition-opacity border border-green-200 shadow-sm"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-teal-600 transition-colors">Financial Portfolio Optimization</h3>
                <p className="text-gray-700 font-medium mb-2 text-base">Data-driven financial platform</p>
                <p className="text-gray-600 mb-2 text-base">Role: Product Communication & Content</p>
                <p className="text-gray-600 mb-2 text-lg">I designed user-facing messaging and data visuals that communicate portfolio insights clearly to non-technical users.</p>
                <p className="text-gray-600 mb-4 text-lg">Impact: Turns dense financial analysis into a clearer user experience that feels more useful, navigable, and actionable for non-expert audiences.</p>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <img 
                    src="/images/AH1.png"
                    alt="Portfolio Optimizer"
                    className="w-full h-20 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity border border-stone-200"
                    onClick={() => setSelectedImage('/images/AH1.png')}
                  />
                  <img 
                    src="/images/AH2.png"
                    alt="News Evaluation"
                    className="w-full h-20 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity border border-stone-200"
                    onClick={() => setSelectedImage('/images/AH2.png')}
                  />
                  <img 
                    src="/images/AH 3.png"
                    alt="Data Visualization"
                    className="w-full h-20 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity border border-stone-200"
                    onClick={() => setSelectedImage('/images/AH 3.png')}
                  />
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-xs">Brand Messaging</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">Visual Storytelling</span>
                  <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs">Product Marketing</span>
                  <span className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-xs">Campaign Development</span>
                </div>
                <p className="text-xs text-gray-500">August 2025 – Present</p>
              </div>
            </div>

            {/* AI Wellness Platform (VibeCode Journal) */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-stone-200 hover:shadow-2xl hover:-translate-y-1 transition-all group">
              <div className="aspect-video overflow-hidden bg-gradient-to-br from-teal-50 to-cyan-50 flex items-center justify-center cursor-pointer p-6" onClick={() => setSelectedImage('/images/Journal Logo.png')}>
                <div className="w-full h-full overflow-hidden rounded-2xl">
                  <img src="/images/Journal Logo.png" alt="Journal Logo" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-teal-600 transition-colors">AI Wellness Platform (VibeCode Journal)</h3>
                <p className="text-gray-700 font-medium mb-2 text-base">AI-powered journaling platform</p>
                <p className="text-gray-600 mb-2 text-base">Role: UX & Content Design</p>
                <p className="text-gray-600 mb-2 text-lg">I developed user-facing messaging and content patterns that make product insights feel clear, supportive, and easy to engage with.</p>
                <p className="text-gray-600 mb-4 text-lg">Impact: Helps users engage with emotional trend data in a way that feels calmer, clearer, and more supportive inside the product experience.</p>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <img
                    src="/images/VC1.png"
                    alt="AI Wellness VC1"
                    className="w-full h-20 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity border border-stone-200"
                    onClick={() => setSelectedImage('/images/VC1.png')}
                  />
                  <img
                    src="/images/VC2.png"
                    alt="AI Wellness VC2"
                    className="w-full h-20 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity border border-stone-200"
                    onClick={() => setSelectedImage('/images/VC2.png')}
                  />
                  <img
                    src="/images/VC3.png"
                    alt="AI Wellness VC3"
                    className="w-full h-20 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity border border-stone-200"
                    onClick={() => setSelectedImage('/images/VC3.png')}
                  />
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-xs">Content Strategy</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">Brand Messaging</span>
                  <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs">Visual Storytelling</span>
                  <span className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-xs">Product Marketing</span>
                </div>
                <p className="text-xs text-gray-500">Recent Project</p>
              </div>
            </div>

            {/* FridgeBuddy App */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-stone-200 hover:shadow-2xl hover:-translate-y-1 transition-all group">
              <div className="aspect-video overflow-hidden bg-gradient-to-br from-teal-50 to-cyan-50 p-6">
                <img 
                  src="/images/fridgebuddy.png"
                  alt="FridgeBuddy App"
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-teal-600 transition-colors">FridgeBuddy App</h3>
                <p className="text-gray-700 font-medium mb-2 text-base">Consumer mobile app for food tracking</p>
                <p className="text-gray-600 mb-2 text-base">Role: Product Marketing & UX</p>
                <p className="text-gray-600 mb-2 text-lg">I conducted user research and developed product messaging and visual content to communicate the app’s value more clearly.</p>
                <p className="text-gray-600 mb-4 text-lg">Impact: Strengthens the product story around food tracking, daily habits, and waste reduction so the app feels easier to understand and adopt.</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                  <img
                    src="/images/FB2.png"
                    alt="FridgeBuddy FB2"
                    className="w-full h-20 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity border border-stone-200"
                    onClick={() => setSelectedImage('/images/FB2.png')}
                  />
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-xs">Product Marketing</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">Brand Messaging</span>
                  <span className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-xs">Social Media Marketing</span>
                  <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs">Visual Storytelling</span>
                </div>
                <p className="text-xs text-gray-500">January 2024 – Present</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-8 bg-[linear-gradient(180deg,_rgba(255,255,255,1)_0%,_rgba(242,247,246,1)_100%)]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Contact Me</h2>
            <p className="text-xl text-gray-600">Open to digital marketing, content, and campaign-focused roles.</p>
          </div>

          <div className="bg-stone-50 rounded-2xl p-12 mb-12 text-center border border-stone-200">
            <p className="text-lg text-gray-700 mb-6">I’m actively seeking entry-level digital marketing roles focused on content, social media, and campaign execution. If you’re hiring for a team that needs strong messaging, clear visuals, and thoughtful content support, I’d love to connect.</p>
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
          <p>Copyright © 2026 Kathryn Kilchenstein. All Rights Reserved.</p>
        </div>
      </footer>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-h-screen overflow-auto">
            <img src={selectedImage} alt="Full size" className="max-w-full h-auto object-contain rounded-lg" />
            <button 
              className="fixed top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-opacity"
              onClick={() => setSelectedImage(null)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
