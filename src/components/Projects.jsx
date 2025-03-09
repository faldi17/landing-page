import React from "react";

const projects = [
    { title: "Project 1", desc: "Deskripsi project pertama", link: "#" },
    { title: "Project 2", desc: "Deskripsi project kedua", link: "#" },
];

const Projects = () => {
    return (
        <div className="min-h-screen p-10 flex flex-col items-center bg-white/10 backdrop-blur-lg text-white">
            <h2 className="text-4xl font-bold text-center mb-6">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
                {projects.map((project, index) => (
                    <div key={index} className="bg-gray-900/80 p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold text-blue-400">{project.title}</h3>
                        <p className="text-gray-300">{project.desc}</p>
                        <a href={project.link} className="text-blue-400 mt-2 inline-block hover:underline">Lihat Detail →</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
