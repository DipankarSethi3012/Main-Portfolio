import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import { LoggerProvider } from './context/LoggerContext';
import LogStream from './components/LogStream';
import CommandPalette from './components/CommandPalette';

function App() {
  return (
    <LoggerProvider>
      <Router>
        <div className="min-h-screen bg-portfolio-bg text-gray-300 font-sans selection:bg-portfolio-violet selection:text-white">
          <CommandPalette />
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <LogStream />
        </div>
      </Router>
    </LoggerProvider>
  )
}

export default App;
