import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4 text-white dark:text-gray-100">Yashwant Mahamuni</h3>
            <p className="text-gray-400 dark:text-gray-500">
              Full Stack Developer creating amazing modern websites and scalable backend.
            </p>
          </div>
          
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4 text-white dark:text-gray-100">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4 text-white dark:text-gray-100">Connect</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a 
                href="https://github.com/Yashbm45" 
                className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors p-2 hover:bg-gray-800 dark:hover:bg-gray-900 rounded-full"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://in.linkedin.com/in/yashwant-mahamuni-3359262b9" 
                className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors p-2 hover:bg-gray-800 dark:hover:bg-gray-900 rounded-full"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:mahamuniyash@gmail.com" 
                className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors p-2 hover:bg-gray-800 dark:hover:bg-gray-900 rounded-full"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 dark:border-gray-900 mt-8 pt-8 text-center">
          <p className="text-gray-400 dark:text-gray-500">
            © {new Date().getFullYear()} Yashwant Mahamuni. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;