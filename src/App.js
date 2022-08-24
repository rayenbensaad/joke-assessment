import './App.scss';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailsJoke from './pages/DetailsJoke/DetailsJoke';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/detail-joke" element={<DetailsJoke />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
