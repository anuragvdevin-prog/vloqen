import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Footer from "../components/Footer";
import Careers from "../components/Careers";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      
      <Careers />
      <Footer />
      
    </>
  );
};

export default Home;