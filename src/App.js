import "./stylesheets/App.css";
import Navbar from "./partials/Navbar";
import Home from "./pages/Home";
import Footer from "./partials/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Jobs from "./pages/Jobs"
import Sommarlov from "./pages/Sommarlovsklattring"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import YouthGroups from "./pages/YouthGroups";
import Courses from "./pages/Courses";
import ProvaPa from "./pages/ProvaPa";
import Shop from "./pages/Shop";

function App() {
  return (
    <Router>
      <div className="App flex flex-col min-h-screen">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/om-oss" element={<About />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="/jobb" element={<Jobs />} />
            <Route path="/sommarlov" element={<Sommarlov />} />
            <Route path="/barn&ungdom" element={<YouthGroups />} />
            <Route path="/kurser" element={<Courses />} />
            <Route path="/prova-på" element={<ProvaPa />} />
            <Route path="/butik" element={<Shop />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
