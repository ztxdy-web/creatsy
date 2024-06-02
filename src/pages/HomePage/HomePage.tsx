import Navbar from "@/components/common/Navbar/Navbar";
import About from "@/components/modules/HomePage/About";
import Hero from "@/components/modules/HomePage/Hero";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
    </div>
  );
};

export default HomePage;
