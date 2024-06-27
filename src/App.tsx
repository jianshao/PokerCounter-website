import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import PokerInfo from './components/PokerInfo';
import AppFeatures from './components/AppFeatures';
import DownloadLinks from './components/DownloadLinks';
import Testimonials from './components/Testimonials';
import './styles/global.css';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <PokerInfo />
        <AppFeatures />
        <DownloadLinks />
        <Testimonials />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
