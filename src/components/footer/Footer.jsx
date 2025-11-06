import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-100 dark:bg-slate-950 dark:text-white text-center py-6 border-t border-gray-200 dark:border-gray-800">
        <p className="text-sm text-slate-600 dark:text-slate-400">
          © {new Date().getFullYear()} | Made with{" "}
          <span className="text-red-500 animate-pulse">❤️</span> by{" "}
          <a
            href="https://github.com/Anmol17Agarwal"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-primary hover:underline hover:text-orange-500 transition-colors duration-300"
          >
            Anmol Agarwal
          </a>
        </p>
      </footer>
    </>
  );
};

export default Footer;
