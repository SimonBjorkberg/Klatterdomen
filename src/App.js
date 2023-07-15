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
        <div className="dropdown dropdown-top dropdown-end fixed sm:hidden right-0 bottom-0 mr-5 mb-5 z-20">
          <label tabIndex={0} className="btn m-1 bg-success border-neutral">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-lg w-64 text-left opacity-100"
          >
            <li>
              <Link to="/" className="text-lg mb-1" onClick={scrollToTop}>
                Hem
              </Link>
            </li>
            <li>
              <Link
                to="barn&ungdom"
                className="text-lg mb-1"
                onClick={scrollToTop}
              >
                Barn & Ungdomsgrupper
              </Link>
            </li>
            <li>
              <Link
                to="prova-på"
                className="text-lg mb-1"
                onClick={scrollToTop}
              >
                Prova på
              </Link>
            </li>
            <li>
              <Link to="kurser" className="text-lg mb-1" onClick={scrollToTop}>
                Kurser
              </Link>
            </li>
            <li>
              <Link
                to="/barnkalas"
                className="text-lg mb-1"
                onClick={scrollToTop}
              >
                Barnkalas
              </Link>
            </li>
            <li>
              <Link to="butik" className="text-lg mb-1" onClick={scrollToTop}>
                Priser
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Router>
  );
}

export default App;
