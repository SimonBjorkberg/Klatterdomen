import "./stylesheets/App.scss";
import Navbar from "./components/partials/Navbar";
import Home from "./components/pages/Home";
import Footer from "./components/partials/Footer";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Jobs from "./components/pages/Jobs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import YouthGroups from "./components/pages/YouthGroups";
import Courses from "./components/pages/Courses";
import ProvaPa from "./components/pages/ProvaPa";
import Shop from "./components/pages/Shop";
import Barnkalas from "./components/pages/ChildrensParty";

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
