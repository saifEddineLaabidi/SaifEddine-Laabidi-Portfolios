'use client';

import About from '@/sections/About';
import Certifications from '@/sections/Certifications';
import Contacts from '@/sections/Contacts';
import Experience from '@/sections/Experience';
import Hero from '@/sections/Hero';
import Projects from '@/sections/Projects';
import Skills from '@/sections/Skills';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Certifications />
      <Projects />
      <Contacts />
    </main>
  );
}
