import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen text-center p-6 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 text-white">

            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-transparent to-purple-600 opacity-50 blur-3xl"></div>

            <div className="relative animate-fadeIn">
                <h1 className="text-5xl md:text-6xl font-extrabold">
                    Hi, I'm{" "}
                    <span className="text-yellow-300">
                        <TypeAnimation
                            sequence={[
                                "Faldi", 1500,
                                "a Frontend Dev", 1500,
                                "passionate about React", 1500
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </span>{" "}
                    👋
                </h1>
                <p className="text-lg md:text-xl text-gray-200 mt-3">
                    Frontend Developer | Love building with React & Tailwind
                </p>

                <a
                    href="contact"
                    className="mt-6 inline-block px-8 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-full shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-300"
                >
                    🚀 Get in Touch
                </a>
            </div>
        </div>
    );
};

export default Hero;
