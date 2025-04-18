import React from "react";

const Skills: React.FC = () => {
  const dataAnalysisSkills: string[] = [
    "Excel", "SQL", "Python", "R", "Pandas", "NumPy"
  ];

  const visualizationSkills: string[] = [
    "Power BI", "Tableau", "Matplotlib", "Seaborn", "Looker"
  ];

  const businessSkills: string[] = [
    "Business Intelligence", "Data Storytelling", "A/B Testing", "Stakeholder Communication", "Data-Driven Decision Making"
  ];

  const toolsSkills: string[] = [
    "Jupyter Notebook", "Google Sheets", "Microsoft PowerPoint", "Notion", "Trello"
  ];

  const softSkills: string[] = [
    "Analytical Thinking", "Problem Solving", "Communication", "Critical Thinking", "Presentation Skills"
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="w-full text-gray-300">
        <div className="skillList max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          <h2 className="text-4xl font-bold py-2 my-2 text-center text-gray-900 dark:text-white transition-colors">
            Skills
          </h2>

          <div className="mt-4">
            <h1 className="text-2xl font-semibold">Data Analysis</h1>
            <div className="Tech flex flex-wrap py-2 my-4 w-[80%]">
              {dataAnalysisSkills.map((skill, index) => (
                <li key={index} className="list-none p-2 border m-1 bg-slate-950 rounded-lg">
                  {skill}
                </li>
              ))}
            </div>

            <h1 className="text-2xl font-semibold">Data Visualization</h1>
            <div className="Tech flex flex-wrap py-2 my-4 w-[80%]">
              {visualizationSkills.map((skill, index) => (
                <li key={index} className="list-none p-2 border m-1 bg-slate-950 rounded-lg">
                  {skill}
                </li>
              ))}
            </div>

            <h1 className="text-2xl font-semibold">Business & Strategy</h1>
            <div className="Tech flex flex-wrap py-2 my-4 w-[80%]">
              {businessSkills.map((skill, index) => (
                <li key={index} className="list-none p-2 border m-1 bg-slate-950 rounded-lg">
                  {skill}
                </li>
              ))}
            </div>

            <h1 className="text-2xl font-semibold">Tools & Platforms</h1>
            <div className="Tech flex flex-wrap py-2 my-4 w-[80%]">
              {toolsSkills.map((skill, index) => (
                <li key={index} className="list-none p-2 border m-1 bg-slate-950 rounded-lg">
                  {skill}
                </li>
              ))}
            </div>

            <h1 className="text-2xl font-semibold">Soft Skills</h1>
            <div className="Tech flex flex-wrap py-2 my-4 w-[80%]">
              {softSkills.map((skill, index) => (
                <li key={index} className="list-none p-2 border m-1 bg-slate-950 rounded-lg">
                  {skill}
                </li>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

