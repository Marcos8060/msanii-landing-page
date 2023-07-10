import Events from "./components/Events";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <section className="bg-primary">
        <div className="sm:px-6 px-1 py-3">
          <Navbar />
        </div>
        <Hero />
        <Intro />
        <Events />
      </section>
    </>
  );
}

export default App;
