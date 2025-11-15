import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SpecializedFinancing from "./components/SpecializedFinancing";
import OurSolutions from "./components/OurSolutions";
import BuiltForEnergy from "./components/BuiltForEnergy";
import Process from "./components/Process";
// 1. Import the new components
import Team from "./components/Team";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <main>
        <SpecializedFinancing />
        <OurSolutions />
        <BuiltForEnergy />
        <Process />
        {/* 2. Add them here in order */}
        <Team />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
