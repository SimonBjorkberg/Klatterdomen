import { Link } from "react-router-dom";
import scrollToTop from "../../ScrollToTop";

const Navbar = () => {
  return (
    <nav className="fixed mx-auto w-full z-10 shadow-md opacity-90">
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
        <div className="md:hidden">
          <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label
                htmlFor="my-drawer-4"
                className="drawer-button btn btn-ghost mr-4"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </label>
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
              <ul className="p-4 w-56 h-full bg-base-200 text-base-content custom-ul flex flex-col text-left">
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
              <Link
                to="barn&ungdom"
                id="barnungd-custom-a"
                onClick={scrollToTop}
              >
                Barn & Ungdomsgrupper
              </Link>
            </li>
            <li>
              <Link
                to="barnkalas"
                id="barnkalas-custom-a"
                onClick={scrollToTop}
              >
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
          </div>
        </div>
        <div className="hidden md:block">
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
              <Link
                to="barn&ungdom"
                id="barnungd-custom-a"
                onClick={scrollToTop}
              >
                Barn & Ungdomsgrupper
              </Link>
            </li>
            <li>
              <Link
                to="barnkalas"
                id="barnkalas-custom-a"
                onClick={scrollToTop}
              >
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
      </div>
    </nav>
  );
};

export default Navbar;
