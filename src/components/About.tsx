import React from 'react';
import { BarChart3, Database, PieChart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
            About Me
          </h2>
          <p className="text-base text-start sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4 transition-colors">
            Hi, I'm Yashwant Mahamuni, a passionate and detail-oriented Data Analyst with a strong background in extracting meaningful insights from complex datasets. I specialize in data visualization, statistical analysis, and transforming raw data into actionable strategies that drive business decisions. Proficient in tools like Python, SQL, Excel, and BI platforms like Power BI and Tableau, I strive to tell compelling stories through data. My goal is to bridge the gap between numbers and strategy, helping teams and organizations make informed, data-driven decisions. Whether it’s building dashboards, automating data workflows, or performing predictive analysis, I’m committed to delivering value through clear, insightful analytics. Let’s connect if you're looking for someone who can turn data into clarity!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-4">
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg transform hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4 mx-auto md:mx-0">
              <BarChart3 className="text-blue-600 dark:text-blue-400" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center md:text-left text-gray-900 dark:text-white transition-colors">
              Data Analysis
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-center md:text-left transition-colors">
              Expert in analyzing datasets to uncover trends, patterns, and actionable insights using Python, SQL, and Excel.
            </p>
          </div>

          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg transform hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4 mx-auto md:mx-0">
              <PieChart className="text-blue-600 dark:text-blue-400" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center md:text-left text-gray-900 dark:text-white transition-colors">
              Data Visualization
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-center md:text-left transition-colors">
              Creating impactful dashboards and visualizations using Tableau, Power BI, and Matplotlib to communicate data effectively.
            </p>
          </div>

          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg transform hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4 mx-auto md:mx-0">
              <Database className="text-blue-600 dark:text-blue-400" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center md:text-left text-gray-900 dark:text-white transition-colors">
              Data Management
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-center md:text-left transition-colors">
              Skilled in managing, cleaning, and optimizing data from diverse sources to ensure accuracy and usability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
