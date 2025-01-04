import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Blogify - Blogging Platform",
      description: "A full-featured blog platform built with React, where you can upload and read blogs.",
      image: "./blog_app.avif",
      tech: ["React", "TailwindCSS", "Redux-Toolkit"],
      liveUrl: "#",
      githubUrl: "https://github.com/Yashbm45/Blog-Web-Application"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
      tech: ["React", "Firebase", "Tailwind"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Crop Yeild Prediction System.",
      description: "Crop yeild Prediction System application predicts crop to be cultivated based on soil and wheather reports.",
      image: "https://media.istockphoto.com/id/1151784210/photo/ripe-rice-field-and-sky-background-at-sunset.webp?s=2048x2048&w=is&k=20&c=R_GmEOH6scAuR3VwRHcDuWMKTOkG7CWhhADKsq_ErFY=",
      tech: ["Python", "Machine Learning", "Deep Learning"],
      liveUrl: "#",
      githubUrl: "https://github.com/Yashbm45/Crop-Prediction-System"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">My Projects</h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4 transition-colors">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative group">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white transition-colors">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 transition-colors">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.liveUrl}
                    className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group"
                  >
                    <ExternalLink size={16} className="mr-1 group-hover:translate-x-1 transition-transform" />
                    Live Demo
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                  >
                    <Github size={16} className="mr-1" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;