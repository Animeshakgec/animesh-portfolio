'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink,
  Code2,
  Briefcase,
  GraduationCap,
  Award,
  ChevronRight,
  Terminal,
  Sparkles
} from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll detection to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = {
    languages: ['JavaScript', 'C/C++', 'Dart', 'Golang', 'Bash', 'SQL'],
    frontend: ['React.js', 'Flutter', 'TailwindCSS'],
    backend: ['Node.js', 'Express.js', 'REST APIs', 'Web Sockets'],
    databases: ['MongoDB', 'MySQL', 'Firebase', 'ChromaDB'],
    tools: ['Git/Github', 'AWS EC2', 'Linux', 'Shell Scripting']
  };

  const experiences = [
    {
      title: 'SDE INTERN - BACKEND',
      company: 'Pace Stock Broking Services Pvt. Ltd',
      location: 'Office, New Delhi',
      period: 'July 2025 - October 2025',
      points: [
        'Built RESTful APIs for trade execution, user onboarding, order history, and portfolio tracking',
        'Implemented error handling, pagination, and secure token-based authentication',
        'Worked with database schema design and optimization, writing efficient SQL queries'
      ]
    },
    {
      title: 'SOFTWARE INTERN',
      company: 'ZenComply Technologies Pvt. Ltd.',
      location: 'Remote, Bangalore',
      period: 'July 2024 - October 2024',
      points: [
        'Developed backend functionalities for formatted AI responses based on documents',
        'Implemented API integrations and database solutions using MySQL on Amazon RDS',
        'Gained hands-on experience with AWS services, OpenAI API Gateway'
      ]
    }
  ];

  const projects = [
    {
      title: 'DevCollab',
      subtitle: 'Real-Time Collaborative Coding Platform',
      description: 'An interactive platform to code together in real-time with chat features.',
      tech: ['React', 'Node.js', 'Socket.io', 'CodeMirror', 'TailwindCSS'],
      github: 'https://github.com/Animeshakgec/DevCollab'
    },
    {
      title: 'TaskFlow',
      subtitle: 'Project Management Tool',
      description: 'A comprehensive project management tool for creating, assigning, and tracking tasks with team collaboration.',
      tech: ['MERN Stack', 'Redux Toolkit', 'TailwindCSS'],
      github: 'https://github.com/Animeshakgec/TaskFlow',
      status: 'In Development'
    }
  ];

  const positions = [
    {
      title: 'Head Coordinator',
      organization: 'Big Data Centre of Excellence',
      period: 'November 2023 - June 2025',
      highlights: [
        'Organized 6+ events, workshops, hackathons with 250+ participants average',
        'Led a team of 6 developers to build registrar and TnP cell portals'
      ]
    },
    {
      title: 'Flutter App Developer',
      organization: 'Big Data Centre of Excellence',
      period: 'September 2022 - October 2023',
      highlights: [
        'Built official mobile app with backend and administrative dashboard',
        'Developed attendance portal with rate limiting and spam protection'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        className="fixed inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 80%)`
        }}
      />

      {/* Noise texture overlay */}
      <div className="fixed inset-0 opacity-[0.015] pointer-events-none" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")'
      }} />

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-900/50 border-b border-slate-800/50"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="flex items-center gap-2 text-xl font-bold"
              whileHover={{ scale: 1.05 }}
            >
              <Terminal className="text-blue-400" />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Animesh Agarwal
              </span>
            </motion.div>
            
            <div className="hidden md:flex items-center gap-8">
              {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setActiveSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.toLowerCase()
                      ? 'text-blue-400'
                      : 'text-slate-400 hover:text-white'
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <motion.a
                href="https://github.com/Animeshakgec"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/animesh-agarwal-74a297242"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={20} />
              </motion.a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="about" className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium"
            >
              <Sparkles size={16} />
              <span>Available for Opportunities</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-6xl md:text-8xl font-bold"
            >
              <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                Software
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Developer
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl text-slate-400 max-w-3xl leading-relaxed"
            >
              Passionate problem-solver thriving on complex challenges. Deep curiosity drives me to explore new technologies and tackle demanding projects with strong adaptability.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap items-center gap-6 pt-6"
            >
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin size={18} />
                <span>Ghaziabad, Uttar Pradesh</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Mail size={18} />
                <a href="mailto:animeshagarwal282@gmail.com" className="hover:text-blue-400 transition-colors">
                  animeshagarwal282@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Phone size={18} />
                <span>+91 70078 38569</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap gap-4 pt-6"
            >
              <motion.a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
              <motion.a
                href="https://github.com/Animeshakgec"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full font-medium hover:bg-slate-800 transition-all flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={18} />
                View Projects
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-40 right-20 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 left-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"
        />
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-12">
              <Code2 className="text-blue-400" size={28} />
              <h2 className="text-4xl font-bold">Technical Skills</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(skills).map(([category, items], idx) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800/50 transition-all group"
                >
                  <h3 className="text-lg font-semibold mb-4 text-blue-400 capitalize flex items-center gap-2">
                    <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-slate-700/50 rounded-lg text-sm text-slate-300 border border-slate-600/30 hover:border-blue-500/50 hover:text-white transition-all"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-12">
              <Briefcase className="text-blue-400" size={28} />
              <h2 className="text-4xl font-bold">Experience</h2>
            </div>

            <div className="space-y-8">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="relative pl-8 border-l-2 border-slate-700 hover:border-blue-500 transition-colors"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-500 ring-4 ring-slate-900" />
                  
                  <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800/50 transition-all">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                        <p className="text-blue-400 font-medium">{exp.company}</p>
                        <p className="text-sm text-slate-400">{exp.location}</p>
                      </div>
                      <span className="px-4 py-2 bg-slate-700/50 rounded-full text-sm text-slate-300 whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                    
                    <ul className="space-y-2">
                      {exp.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-300">
                          <ChevronRight size={18} className="text-blue-400 mt-0.5 flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-12">
              <Terminal className="text-blue-400" size={28} />
              <h2 className="text-4xl font-bold">Featured Projects</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all"
                >
                  {project.status && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-yellow-500/20 border border-yellow-500/30 rounded-full text-xs text-yellow-400 font-medium">
                      {project.status}
                    </div>
                  )}

                  <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4">{project.subtitle}</p>
                  <p className="text-slate-300 mb-6">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium"
                    whileHover={{ x: 5 }}
                  >
                    <Github size={18} />
                    View on GitHub
                    <ExternalLink size={16} />
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Positions of Responsibility */}
      <section className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-12">
              <Award className="text-blue-400" size={28} />
              <h2 className="text-4xl font-bold">Leadership</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {positions.map((position, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800/50 transition-all"
                >
                  <h3 className="text-xl font-bold mb-2">{position.title}</h3>
                  <p className="text-blue-400 mb-2">{position.organization}</p>
                  <p className="text-sm text-slate-400 mb-4">{position.period}</p>
                  
                  <ul className="space-y-2">
                    {position.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                        <ChevronRight size={16} className="text-blue-400 mt-0.5 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-12">
              <GraduationCap className="text-blue-400" size={28} />
              <h2 className="text-4xl font-bold">Education</h2>
            </div>

            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-2">Bachelor of Technology - Information Technology</h3>
              <p className="text-blue-400 font-medium mb-1">Ajay Kumar Garg Engineering College, Ghaziabad</p>
              <div className="flex items-center gap-4 text-slate-400 text-sm mb-4">
                <span>2021 - 2025</span>
                <span>•</span>
                <span>SGPA: 7.46</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-5xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
              I'm always interested in hearing about new opportunities and exciting projects.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <motion.a
                href="mailto:animeshagarwal282@gmail.com"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={20} />
                Send Email
              </motion.a>
              
              <motion.a
                href="https://www.linkedin.com/in/animesh-agarwal-74a297242"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full font-medium hover:bg-slate-800 transition-all flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={20} />
                Connect on LinkedIn
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center text-slate-400">
          <p className="mb-4">© 2026 Animesh Agarwal. All rights reserved.</p>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/Animeshakgec" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/animesh-agarwal-74a297242" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="mailto:animeshagarwal282@gmail.com" className="hover:text-white transition-colors">
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
