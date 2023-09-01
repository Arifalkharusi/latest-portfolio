import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="flex items-center justify-center flex-col text-white [&>div>div]:max-w-[1200px] [&>*]:p-5">
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
