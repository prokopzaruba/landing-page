import "./App.css";
import GetStarted from "./GetStarted";
import Hero from "./Hero";
import InfoSection from "./InfoSection";
import Stats from "./Stats";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Stats />
        <InfoSection />
        <GetStarted />
      </main>
      <Footer />
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="root"></div>
    </div>
  );
}

export default App;
