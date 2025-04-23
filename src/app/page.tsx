import Image from "next/image";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Portfolio from "./sections/Portfolio";
import Testimonials from "./sections/Testimonialss";
import Faqs from "./sections/Faqs";
import AboutUs from "./sections/AboutUs";
import ContactUs from "./sections/ContactUs";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <Faqs/>
      <AboutUs/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}
