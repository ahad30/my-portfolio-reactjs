import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Work from "./components/sections/Work";
import Skills from "./components/sections/Skills";
import Credentials from "./components/sections/Credentials";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

const App = () => (
  <>
    <Navbar />
    <main className="overflow-x-clip">
      <Hero />
      <About />
      <Experience />
      <Work />
      <Skills />
      <Credentials />
      <Contact />
    </main>
    <Footer />
  </>
);

export default App;
