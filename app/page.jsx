// page.jsx
import HeroSection from './components/HeroSection';
import ProjectsGrid from './components/ProjectsGrid';

import ContactForm from './components/ContactForm';

import AboutMe from './components/AboutMe';
import Services from './components/Services';


export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <ProjectsGrid />
      <Services />
      <ContactForm />
    </>
  );
}
