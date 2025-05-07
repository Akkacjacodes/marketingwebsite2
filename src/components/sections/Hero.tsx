import React from "react";
import { Button } from "../ui/Button";
import { Container } from "../layout/Container";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <Container>
        <div className="animate-fade-in py-20 md:py-32 max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <img
              src="/images/profile.jpg"
              alt="Profile"
              className="w-64 h-64 rounded-full mx-auto mb-8 shadow-lg border-4 border-blue-300/20"
            />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            My Strategic <span className="text-blue-300">Visibility</span> Guide
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 opacity-90">
            for B2B SaaS businesses in Europe
          </p>
          <Button
            href="https://docs.google.com/forms/d/e/1FAIpQLSdXOuntFt1ItN43soU-aZwfrFgGPeNydVo0AY5_Op2BdI79VA/viewform?usp=pp_url"
            target="_blank"
            size="large"
          >
            Request Access
          </Button>
        </div>
      </Container>
    </section>
  );
};
