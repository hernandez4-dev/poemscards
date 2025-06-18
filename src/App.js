import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import TextGallery from './components/TextGallery';
import Header from './components/Header';
import Footer from './components/Footer';
import Blog from './components/Blog'; // Import Blog component
import BlogTwo from './components/BlogTwo';
import MotivationButton from './components/MotivationButton';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content-wrap"> {/* Added a wrapper for content */}
          <Routes>
            <Route path="/" element={<TextGallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blogtwo" element={<BlogTwo />} />
            <Route path="/motivation" element={<MotivationButton />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
