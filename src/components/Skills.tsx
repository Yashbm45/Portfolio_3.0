import React from "react";

const Skills: React.FC = () => {
    const frontend: string[] = [
        "HTML", "CSS", "JavaScript",
        "React", "Redux", "TailwindCSS"
    ];

    const backendSkills: string[] = [
        "Node.js", "Express.js",
        "REST API", "MongoDB", "MySQL"
    ];

    const cloudSkills: string[] = [
        "AWS",
        "Docker", "Kubernetes",
        "CI/CD", "Networking"
    ];

    const programmingSkills: string[] = ["Python", "C++", "Java"];

    const toolsSkills: string[] = ["Git GitHub", "Jenkins", "GitHub Actions"];

return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors">
    <div name="skills" className="w-full h-screen text-gray-300">
        <div className="skillList max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
            <h2 className="text-4xl font-bold py-2 my-2  w-fit text-center mx-auto text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
            Skills
        </h2>
        <div className="mt-4 ">
            <h1 className="text-2xl font-semibold">Frontend</h1>
            <div className="Tech flex flex-wrap py-2 my-4 w-[80%] ">
            {frontend.map((skill, index) => (
                <li
                    key={index}
                    className="list-none p-2 border m-1 bg-slate-950 rounded-lg"
                >
                    {skill}
                </li>
            ))}
        </div>
            <h1 className="text-2xl font-semibold">Backend</h1>
            <div className="Tech flex flex-wrap py-2 my-4 w-[80%]">
                {backendSkills.map((skill, index) => (
                <li
                    key={index}
                    className="list-none p-2 border m-1 bg-slate-950 rounded-lg"
                >
                    {skill}
                </li>
            ))}
        </div>
            <h1 className="text-2xl font-semibold">Cloud & DevOps</h1>
            <div className="flex flex-wrap py-2 my-4">
                {cloudSkills.map((skill, index) => (
            <li
                key={index}
                className="list-none p-2 border m-1 bg-slate-950 rounded-lg"
            >
                {skill}
            </li>
            ))}
        </div>
        </div>

        <h1 className="text-2xl font-semibold">Programming Languages</h1>
        <div className="flex py-2 my-4">
            {programmingSkills.map((skill, index) => (
            <li
                key={index}
                className="list-none p-2 border m-1 bg-slate-950 rounded-lg"
            >
                {skill}
            </li>
        ))}
        </div>

        <h1 className="text-2xl font-semibold">Tools</h1>
        <div className="flex py-2 my-4">
            {toolsSkills.map((skill, index) => (
            <li
                key={index}
                className="list-none p-2 border m-1 bg-slate-950 rounded-lg"
            >
                {skill}
            </li>
        ))}
        </div>
    </div>
    </div>
</section>
);
};

export default Skills;
