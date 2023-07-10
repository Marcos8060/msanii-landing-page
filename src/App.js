import Charts from "./components/Charts";
import Events from "./components/Events";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Labels from "./components/Labels";
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
        <Charts />
        <Labels />
      </section>
    </>
  );
}

export default App;
