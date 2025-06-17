import React from "react";

const Footer = () => {
  return (
    <footer className="bg-pixel-dark py-8 text-center relative z-10">
      <div className="container mx-auto">
        <p className="pixel-text text-sm text-gray-400">
          © {new Date().getFullYear()} • LK PORTFOLIO • ALL RIGHTS RESERVED
        </p>
      </div>
    </footer>
  );
};

export default Footer;
