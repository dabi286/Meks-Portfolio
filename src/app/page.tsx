"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import { Timeline } from "@/components/ui/timeline";
import CertificateModal from "@/components/ui/certificate-modal";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import HeroParticles from "@/components/ui/hero-particles";
import ContactForm from "@/components/ui/contact-form";

export default function Home() {
  const [selectedCertificate, setSelectedCertificate] = useState<{
    title: string;
    imageUrl: string;
  } | null>(null);

  // Timeline data with new format
  const timelineData = [
    {
      title: "2026",
      content: (
        <div>
          <p className="mb-2 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Starting the Naval Eastern Mindanao Command
          </p>
          <p className="mb-8 text-sm text-primary-700 dark:text-primary-300  dark:text-neutral-200 font-semibold">On-the-job training at Naval Eastern Mindanao Command, applying and expanding my skills in a real-world environment.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
            <img src="/timeline/Meks_INTERN3.jpg" alt="2025 OJT in DMSF Inc 1" className="w-full h-40 md:h-60 rounded-lg object-cover shadow" />
            <img src="/timeline/Meks_INTERN2.jpg" alt="2025 OJT in DMSF Inc 2" className="w-full h-40 md:h-60 rounded-lg object-cover shadow" />
            <img src="/timeline/Meks_INTERN1.jpg" alt="2025 OJT in DMSF Inc 3" className="w-full h-40 md:h-60 rounded-lg object-cover shadow" />
          </div>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <p className="mb-2 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Starting of capstone development
          </p>
          <p className="mb-8 text-sm text-primary-700 dark:text-primary-300 dark:text-neutral-200 font-semibold">Capstone project development, focusing on building a comprehensive and innovative solution.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
            <img src="/timeline/Meks_CAPSTONE2.jpg" alt="2024 Capstone development 1" className="w-full h-40 md:h-60 rounded-lg object-cover shadow" />
            <img src="/timeline/Meks_CAPSTONE1.jpg" alt="2024 Capstone development 2" className="w-full h-40 md:h-60 rounded-lg object-cover shadow" />

          </div>
        </div>
      ),
    },


  ];

  const certificates = [
    {
      title: "Python for Beginners",
      issuer: "Simple Learn",
      date: "2026",
      imageUrl: "/certificates/Meks_Cert1.jpg",
      thumbnailUrl: "/certificates/Meks_Cert1.jpg"
    },
    {
      title: "Introduction to Cyber Security",
      issuer: "Simple Learn",
      date: "2026",
      imageUrl: "/certificates/Meks_Cert2.jpg",
      thumbnailUrl: "/certificates/Meks_Cert2.jpg"
    },
    {
      title: "Introduction to Flutter Course",
      issuer: "Simple Learn",
      date: "2026",
      imageUrl: "/certificates/Meks_Cert3.jpg",
      thumbnailUrl: "/certificates/Meks_Cert3.jpg"
    }
  ];

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <div className="relative w-full h-screen bg-black overflow-hidden">
        {/* Animated gradient background overlay */}
        <div className="absolute inset-0 z-0" />
        <HeroParticles />
        <ParallaxHeroContent />
      </div>

      {/* About Section */}
      <section id="about" className="w-full py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 60, scale: 0.97, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-gray-700 mb-4">
            I am Mekaylle Kean T. Daquiz, an Information Technology student passionate about technology and continuous learning. I have experience in office documentation, computer applications, and administrative tasks gained through my internship and academic projects. 
            </p>
            <p className="text-gray-700 mb-4">
            I am eager to develop my technical and professional skills while contributing effectively to any organization.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">PHP Native</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Wordpress</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Python</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">MySQL</span>
            </div>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 px-6 py-3 border-2 bg-primary-500 hover:bg-black hover:text-white text-black font-semibold rounded-md shadow transition-all"
            >
              View CV
            </a>
          </div>
          <div className="order-1 md:order-2 relative h-150 w-full rounded-lg overflow-hidden shadow-lg flex items-center justify-center bg-gradient-to-r from-primary-500/30 to-purple-500/30">
            <img
              src="/timeline/Meks_Formal.jpg"
              alt="Portrait of Meks Daquiz in graduation attire"
              className="object-cover h-full w-full rounded-lg shadow-md border-4 border-white dark:border-neutral-900"
            />
          </div>
        </motion.div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="w-full">
        <HeroParticles />
        <Timeline data={timelineData} />
      </section>

      {/* Projects Section */}


      {/* Certificates Section */}
      <section id="certificates" className="w-full py-20 px-4 md:px-8 bg-gray-50">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 60, scale: 0.97, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Certificates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all cursor-pointer group"
                onClick={() => setSelectedCertificate(cert)}
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={cert.thumbnailUrl}
                    alt={cert.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 line-clamp-2">{cert.title}</h3>
                  <p className="text-gray-600 mb-2">Issued by: {cert.issuer}</p>
                  <p className="text-gray-500 text-sm">Completed: {cert.date}</p>
                </div>
              </div>
            ))}
        </div>
        </motion.div>
      </section>

      {selectedCertificate && (
        <CertificateModal
          isOpen={!!selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
          imageUrl={selectedCertificate.imageUrl}
          title={selectedCertificate.title}
        />
      )}

      {/* Contact Section */}
      <section id="contact" className="w-full py-20 px-4 md:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <ContactForm />
        </div>
      </section>
      

      {/* Footer */}
      <footer className="w-full py-8 px-4 md:px-8 bg-white text-gray-800 border-t border-gray-200">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Mekaylle Kean Daquiz</h3>
            <p className="text-gray-600">Web Developer</p>
          </div>
          <div className="flex gap-6">
            <a href="https://github.com/yoomekz" className="text-gray-600 hover:text-primary-500 transition-colors">
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            {/* <a href="#" className="text-gray-600 hover:text-primary-500 transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a> */}
          </div>
        </div>
        <div className="mt-8 text-center text-gray-600 text-sm">
          © {new Date().getFullYear()} Mekaylle Kean Daquiz. All rights reserved.
        </div>
      </footer>
    </main>
  );
}

// ParallaxHeroContent component
function ParallaxHeroContent() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: { clientX: number; clientY: number; }) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setMouse({
      x: e.clientX - rect.left - rect.width / 2,
      y: e.clientY - rect.top - rect.height / 2,
    });
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className="flex flex-col items-center justify-center text-center p-4 space-y-8 z-20 h-full w-full select-none"
      style={{ perspective: 1200 }}
    >
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-white tracking-tight"
        style={{
          x: mouse.x * 0.03,
          y: mouse.y * 0.03,
          scale: 1 + Math.abs(mouse.x + mouse.y) * 0.0001,
        }}
        transition={{ type: "spring", stiffness: 80, damping: 20 }}
      >
        <span className="text-primary-400">Hello, I'm</span> Mekyla Daquiz
      </motion.h1>
      <motion.h2
        className="text-xl md:text-2xl text-gray-300 max-w-2xl"
        style={{
          x: mouse.x * 0.02,
          y: mouse.y * 0.02,
        }}
        transition={{ type: "spring", stiffness: 80, damping: 20 }}
      >
        Web developer, QA, and PHP developer
      </motion.h2>
      <motion.div
        className="flex gap-4"
        style={{
          x: mouse.x * 0.01,
          y: mouse.y * 0.01,
        }}
        transition={{ type: "spring", stiffness: 80, damping: 20 }}
      >
        <Link 
          href="#timeline" 
          className="px-6 py-3 bg-transparent hover:bg-gray-800 text-white border border-gray-600 rounded-md transition-all"
        >
          My Journey
        </Link>
        <Link 
          href="#projects" 
          className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-md transition-all"
        >
          View My Work
        </Link>
        <Link 
          href="#certificates" 
          className="px-6 py-3 bg-transparent hover:bg-gray-800 text-white border border-gray-600 rounded-md transition-all"
        >
          Certificates
        </Link>
      </motion.div>
    </div>
  );
}
