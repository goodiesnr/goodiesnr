import Navbar from './components/navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Expertise from './components/Expertise';
import FeaturedProjects from './components/FeaturedProjects';
import WhyWorkWithMe from './components/WhyWorkWithMe';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Expertise />
         <Marquee />
        <FeaturedProjects />
        <WhyWorkWithMe />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
