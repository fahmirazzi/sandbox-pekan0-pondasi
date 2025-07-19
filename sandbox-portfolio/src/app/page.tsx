"use client";
import { useState } from "react";
import { Github, Twitter, Linkedin, Sun, Moon } from "lucide-react";

export default function Home() {
  const [isDarkMode, setDarkMode] = useState(true);

  return (
    <>
      <main>
        <div className="absolute top-5 right-5">
          <button
            onClick={() => setDarkMode(!isDarkMode)}
            className={`p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-300 ${
              isDarkMode
                ? "bg-gray-700 text-white hover:bg-gray-600 focus:ring-blue-500"
                : "bg-white text-gray-700 hover:bg-gray-200 focus:ring-blue-500"
            }`}
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </div>

        <div className="flex justify-center items-center h-screen">
          <div
            className={`rounded-xl shadow-2xl p-8 w-full max-w-md text-center transition-colors duration-500 ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <img
              src="/profile.png"
              alt="Profile Picture"
              className={`w-32 h-32 rounded-full mx-auto mb-6 border-4 border-blue-200 object-cover shadow-lg`}
            />
            <h1
              className={`text-3xl font-bold mb-1 ${
                isDarkMode ? "text-white" : "text-gray-800"
              }`}
            >
              Dzulfahmi Razzi
            </h1>
            <p
              className={`text-lg mb-6 ${
                isDarkMode ? "text-gray-400" : "text-gray-800"
              }`}
            >
              HSI Sandbox NextJS
            </p>

            <div className="flex justify-center space-x-6">
              <a
                href="#"
                aria-label="Twitter Profile"
                className={`p-3 rounded-full transition-transform duration-300 hover:scale-110 ${
                  isDarkMode
                    ? "text-gray-300 hover:text-sky-400"
                    : "text-gray-500 hover:text-sky-500"
                }`}
              >
                <Twitter size={28} />
              </a>

              <a
                href="#"
                aria-label="GitHub Profile"
                className={`p-3 rounded-full transition-transform duration-300 hover:scale-110 ${
                  isDarkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                <Github size={28} />
              </a>

              <a
                href="#"
                aria-label="LinkedIn Profile"
                className={`p-3 rounded-full transition-transform duration-300 hover:scale-110 ${
                  isDarkMode
                    ? "text-gray-300 hover:text-blue-400"
                    : "text-gray-500 hover:text-blue-600"
                }`}
              >
                <Linkedin size={28} />
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
