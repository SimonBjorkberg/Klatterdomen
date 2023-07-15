import "./stylesheets/App.scss";
import Navbar from "./partials/Navbar";
import Home from "./components/Home";
import Footer from "./partials/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Jobs from "./components/Jobs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import YouthGroups from "./components/YouthGroups";
import Courses from "./components/Courses";
import ProvaPa from "./components/ProvaPa";
import Shop from "./components/Shop";
import { Link } from "react-router-dom";
import scrollToTop from "./ScrollToTop";
import Barnkalas from "./components/ChildrensParty";

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
            <Route path="/barn&ungdom" element={<YouthGroups />} />
            <Route path="/kurser" element={<Courses />} />
            <Route path="/prova-på" element={<ProvaPa />} />
            <Route path="/butik" element={<Shop />} />
            <Route path="/barnkalas" element={<Barnkalas />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
