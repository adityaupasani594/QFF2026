import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Schedule from './components/Schedule';
import Countdown from './components/Countdown';
import Speakers from './components/Speakers';
import Register from './components/Register';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen font-body">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Countdown />
        <Schedule />
        <Speakers />
        <Register />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
