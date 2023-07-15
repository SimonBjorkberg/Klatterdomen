import { Link } from "react-router-dom";
import scrollToTop from "../ScrollToTop";

const Navbar = () => {
  return (
    <nav className="fixed mx-auto w-full bg-white z-10 shadow-md opacity-90">
      <div className="navbar bg-base-100 justify-between">
        <div className="items-start">
          <Link to="/" onClick={scrollToTop}>
            <img
              src="https://www.klatterdomen.se/public/generate/collage_object.php?id=10625904&h=942a2cb74d8017610292cbfe5d3a3471"
              alt="LOGO"
              className="w-16"
            />
          </Link>
        </div>
        <ul className="custom-ul">
          <li>
            <Link to="prova-på" id="prova-pa-custom-a" onClick={scrollToTop}>
              Prova På
            </Link>
          </li>
          <li>
            <Link to="kurser" id="kurser-custom-a" onClick={scrollToTop}>
              Kurser
            </Link>
          </li>
          <li>
            <Link to="barn&ungdom" id="barnungd-custom-a" onClick={scrollToTop}>
              Barn & Ungdomsgrupper
            </Link>
          </li>
          <li>
            <Link to="barnkalas" id="barnkalas-custom-a" onClick={scrollToTop}>
              Barnkalas
            </Link>
          </li>
          <li>
            <Link to="butik" id="priser-custom-a" onClick={scrollToTop}>
              Priser
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
