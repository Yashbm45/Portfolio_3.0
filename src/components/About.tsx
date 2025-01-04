import React from 'react';
import { Code, Palette, Globe } from 'lucide-react';

const About = () => {
  
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">About Me</h2>
          <p className="text-base text-start sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4 transition-colors">
              Hi, I'm Yashwant Mahamuni, a passionate and dedicated web developer with expertise in building dynamic, high-performance web applications. I specialize in using React.js to create intuitive, user-friendly interfaces and Node.js with Express.js to build robust and scalable back-end solutions. With a strong foundation in full-stack development, I thrive on turning complex challenges into seamless, interactive experiences. My focus is on delivering clean, efficient, and maintainable code, always keeping performance, usability, and scalability in mind.Whether I'm crafting responsive front-end applications with React, building APIs with Express and Node, or optimizing back-end systems, my goal is always the same: to create web applications that are not only functional but also enjoyable to use. I'm passionate about continuous learning and staying up-to-date with the latest industry trends and technologies. Every project I take on is an opportunity to push my skills further and contribute to creating impactful digital experiences. Feel free to check out my portfolio, and don't hesitate to get in touch if you'd like to collaborate or have any questions!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-4">
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg transform hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4 mx-auto md:mx-0">
              <Code className="text-blue-600 dark:text-blue-400" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center md:text-left text-gray-900 dark:text-white transition-colors">Web Development</h3>
            <p className="text-gray-600 dark:text-gray-400 text-center md:text-left transition-colors">
              Specialized in React, Node.js, and modern web technologies to build scalable applications.
            </p>
          </div>

          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg transform hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4 mx-auto md:mx-0">
              <Palette className="text-blue-600 dark:text-blue-400" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center md:text-left text-gray-900 dark:text-white transition-colors">UI/UX Design</h3>
            <p className="text-gray-600 dark:text-gray-400 text-center md:text-left transition-colors">
              Creating beautiful and intuitive user interfaces with attention to detail and user experience.
            </p>
          </div>

          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg transform hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4 mx-auto md:mx-0">
              <Globe className="text-blue-600 dark:text-blue-400" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center md:text-left text-gray-900 dark:text-white transition-colors">Web Solutions</h3>
            <p className="text-gray-600 dark:text-gray-400 text-center md:text-left transition-colors">
              Delivering end-to-end web solutions that help businesses achieve their goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;