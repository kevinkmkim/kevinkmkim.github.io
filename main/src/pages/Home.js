import React from "react";
import logo from "../images/memoji_laptop.png";

function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <nav className="bg-white p-4 h-16">
        <div className="container mx-auto flex justify-between items-center h-full px-4">
          <div to="/" className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="h-6 w-auto"
              draggable="false"
            />
            <span className="text-xl font-bold font-dot-gothic-16 sm:inline ml-2">
              Kevin Kim
            </span>
          </div>
        </div>
      </nav>

      <div className="flex flex-1 justify-center items-center space-x-8">
        <div className="flex flex-col space-y-4">
          <a
            href="https://www.cubeloom.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-blue-500 text-lg text-center"
          >
            Cubeloom
          </a>
          <a
            href="https://kevinkmkim.github.io/GraphicsHub/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-blue-500 text-lg text-center"
          >
            GraphicsHub
          </a>
          <a
            href="https://github.com/kevinkmkim"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-blue-500 text-lg text-center"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/kevinkmkim/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-blue-500 text-lg text-center"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
