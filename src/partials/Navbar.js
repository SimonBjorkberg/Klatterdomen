import { Link } from "react-router-dom";
import scrollToTop from "../ScrollToTop";

const Navbar = () => {
  return (
    <nav className="fixed mx-auto w-full bg-white z-10 shadow-md opacity-90">
      <div className="sm:flex hidden navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost px-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
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
                <Link to="" className="text-lg mb-1" onClick={scrollToTop}>
                  Barnkalas
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
                  to="kurser"
                  className="text-lg mb-1"
                  onClick={scrollToTop}
                >
                  Kurser
                </Link>
              </li>
              <li>
                <Link to="butik" className="text-lg mb-1" onClick={scrollToTop}>
                  Priser
                </Link>
              </li>
            </ul>
          </div>
          <div className="ml-3">
            <Link to="/" onClick={scrollToTop}>
              <img
                src="https://www.klatterdomen.se/public/generate/collage_object.php?id=10625904&h=942a2cb74d8017610292cbfe5d3a3471"
                alt=""
                className="w-10"
              />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
