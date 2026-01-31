import Header from "./components/Header";
import Hero from "./components/Hero";
import Problems from "./components/Problems";
import HowItWorks from "./components/HowItWork";
import Plans from "./components/Plans";
import CTA from "./components/CTA";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Problems />
        <HowItWorks />
        <Plans />
        <CTA />
      </main>
    </div>
  );
}

export default App;