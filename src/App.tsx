import Navbar from "./components/navbar";
import Home from "./pages/home";
import "./App.css"; // or './index.css'
import About from "./pages/about";
import Contact from "./pages/contact";
import Experience from "./pages/experience";
import Work from "./pages/work";
import Footer from "./components/footer";

function App() {
  return (
    <div className="bg-[#0a192f] relative">
      <Navbar />

      <Home />
      <section
        id="about"
        className="bg-[#0a192f] text-white px-6 md:px-10 lg:px-20 py-14 md:py-16"
      >
        <About />
      </section>

      <section
        id="experience"
        className="bg-[#0a192f] text-white px-6 md:px-10 lg:px-20 py-14 md:py-16"
      >
        <Experience />
      </section>
      <section
        id="work"
        className="bg-[#0a192f] text-white px-6 md:px-10 lg:px-20 py-14 md:py-16"
      >
        <Work />
      </section>
      <Contact />
      <Footer />
    </div>
  );
}
export default App;
