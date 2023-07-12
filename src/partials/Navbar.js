import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed mx-auto w-full bg-white z-10 shadow-md">
      <div className="navbar justify-between md2:w-full mx-auto">
        <div>
          <Link to="/">
            <img
              src="https://www.klatterdomen.se/public/generate/collage_object.php?id=10625904&h=942a2cb74d8017610292cbfe5d3a3471"
              alt="LOGO"
              className="w-14"
            />
          </Link>
        </div>
        <div className="flex-none">
          <div className="drawer drawer-end md2:hidden">
            <input id="menu-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label
                htmlFor="menu-drawer"
                className="drawer-button btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-5 h-5 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="drawer-side">
              <label htmlFor="menu-drawer" className="drawer-overlay"></label>
              <ul className="menu p-4 w-78 h-full bg-base-200">
                <li>
                  <Link to="/" className="py-5 text-xl">
                    Hem
                  </Link>
                </li>
                <li>
                  <Link to="/sommarlov" className="py-5 text-xl">
                    Sommarlovsklättring
                  </Link>
                </li>
                <li>
                  <Link to="/prova-på" className="py-5 text-xl">
                    Prova på
                  </Link>
                </li>
                <li>
                  <Link to="/kurser" className="py-5 text-xl">
                    Kurser
                  </Link>
                </li>
                <li>
                  <Link to="/barn&ungdom" className="py-5 text-xl">
                    Barn & Ungdomsgrupper
                  </Link>
                </li>
                <li>
                  <Link to="/butik" className="py-5 text-xl">
                    Priser
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <ul className="menu menu-horizontal px-1 text-[15px] hidden md2:flex md2:flex-row">
            <li className="mr-2">
              <Link to="/sommarlov">Sommarlovsklättring</Link>
            </li>
            <li className="mr-2">
              <details>
                <summary>Klättring</summary>
                <ul className="menu p-2 bg-base-200 rounded-md">
                  <li className="mb-2">
                    <Link to="/prova-på">Prova på</Link>
                  </li>
                  <li>
                    <Link to="/kurser">Kurser</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li className="mr-2">
              <Link to="/barn&ungdom">Barn & Ungdomsgrupper</Link>
            </li>
            <li className="mr-2">
              <Link to="/butik">Priser</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
