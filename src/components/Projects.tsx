import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Global Energy Trend Analysis - Power BI",
      description: "A Power BI dashboard project that visualizes global energy production, consumption, and CO₂ emissions across regions and time.",
      image: "https://unsplash.com/photos/graphical-user-interface--WXQm_NTK0U",
      tech: ["Power BI", "Data Modeling", "DAX", "Data Visualization"],
      liveUrl: "#", // Replace with Power BI report link if hosted
      githubUrl: "https://github.com/Yashbm45/Power_BI_Projects"
    },
    {
      title: "SQL ETL Project",
      description: "Performed exploratory data analysis on a sales dataset using SQL, uncovering insights on customer behavior, top-selling products, and regional performance.",
      image: "https://unsplash.com/photos/close-up-hand-of-marketing-manager-employee-pointing-at-business-document-during-discussion-at-meeting-room-notebook-on-wood-table-business-concept-rE8nkAPAyhk",
      tech: ["SQL", "MySQL", "Data Cleaning", "Exploratory Analysis"],
      liveUrl: "#", // Optional: Link to dashboard screenshots or PDF report
      githubUrl: "https://github.com/Yashbm45/SQL_ELT_Project_"
    },
    {
      title: "Crop Yield Prediction",
      description: "A machine learning-based solution that predicts the most suitable crop to grow based on soil, weather, and historical yield data.",
      image: "https://www.istockphoto.com/photo/businessman-works-on-laptop-showing-business-analytics-dashboard-with-charts-metrics-gm1488294044-513513679?utm_campaign=srp_photos_bottom&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fdata-analysis&utm_medium=affiliate&utm_source=unsplash&utm_term=data+analysis%3A%3A%3A",
      tech: ["Python", "Pandas", "Machine Learning", "Scikit-learn"],
      liveUrl: "#",
      githubUrl: "https://github.com/Yashbm45/Crop-Prediction-System"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
            My Projects
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4 transition-colors">
            A showcase of data-driven projects focusing on business intelligence, analytics, and machine learning.
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
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group"
                    >
                      <ExternalLink size={16} className="mr-1 group-hover:translate-x-1 transition-transform" />
                      Live Demo
                    </a>
                  )}
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
