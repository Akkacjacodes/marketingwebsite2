import React from 'react';
import { Container } from './Container';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-blue-900 text-blue-100 mt-24">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-80">
            © 2025 The SaaS LinkedIn Reputation System. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-blue-300 hover:text-white transition duration-200">
              Privacy
            </a>
            <a href="#" className="text-blue-300 hover:text-white transition duration-200">
              Terms
            </a>
            <a href="#" className="text-blue-300 hover:text-white transition duration-200">
              Contact
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};