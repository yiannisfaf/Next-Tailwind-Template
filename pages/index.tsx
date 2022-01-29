import type { NextPage } from 'next';
import NavBar from '../components/Nav';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  return (
    <>
      <NavBar />
      <div className="container lg:px-20 sm:px-0">
        <Hero />
        <Features />
        <Testimonials />
        <CallToAction />
        <Footer />
      </div>
    </>
  );
};

export default Home;
