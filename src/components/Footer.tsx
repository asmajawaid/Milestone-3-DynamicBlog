import Link from 'next/link';
import React from 'react'

const Footer = () => {
  return (
      <footer className="bg-dbrown text-lPink  py-6">
          <div className="container mx-auto text-center">
              <p className="text-sm">
                  © {new Date().getFullYear()} Coffee Blog. All rights reserved.
              </p>
              <div className="mt-4 flex justify-center space-x-4">
                  <Link
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-500 transition-colors"
                  >
                      Facebook
                  </Link>
                  <Link
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-400 transition-colors"
                  >
                      Twitter
                  </Link>
                  <Link
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-700 transition-colors"
                  >
                      LinkedIn
                  </Link>
              </div>
          </div>
      </footer>
  );
};

export default Footer;

