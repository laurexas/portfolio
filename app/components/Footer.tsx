import React from "react";

import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-pixel-dark py-8 text-center relative z-10">
      <div className="container flex gap-4 items-center mx-auto">
        <p className="pixel-text text-sm text-gray-400">
          © {new Date().getFullYear()} • LK PORTFOLIO • ALL RIGHTS RESERVED
        </p>
        <a
          href="https://github.com/laurexas"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 transition-opacity hover:opacity-80"
        >
          <Image src="/footer/github.svg" alt="GitHub" width={24} height={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
