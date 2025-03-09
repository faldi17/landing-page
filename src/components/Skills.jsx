import React from "react";

const skills = ["React", "TailwindCSS", "JavaScript", "Node.js"];

const Skills = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-800 text-white p-10">
      <h2 className="text-4xl font-bold">My Skills</h2>
      <div className="flex flex-wrap justify-center mt-6 gap-4">
        {skills.map((skill, index) => (
          <span key={index} className="px-5 py-3 bg-blue-500 text-white rounded-full text-lg shadow-md">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
