import './App.css';
import TextGallery from './components/TextGallery';
import Header from './components/Header'; // Import Header
import Footer from './components/Footer'; // Import Footer

function App() {
  return (
    <div className="App">
      <Header /> {/* Add Header component */}
      <TextGallery />
      <Footer /> {/* Add Footer component */}
    </div>
  );
}

export default App;
