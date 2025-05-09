import * as React from "react";
import Layout from "../components/Layout";
import FlyInText from "../components/TypewriterText";

const About = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Layout>
        <div className="relative z-10 text-white pb-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mt-8 mb-12 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-500 font-serif italic">
              <FlyInText text="About Me" delay={0} speed={50} />
            </span>
          </h1>
          
          <div className="max-w-3xl mx-auto text-lg text-gray-300 mb-16">
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default About;

export const Head = () => <title>About | Caleb Bennett-Harper</title>; 