const Navbar = () => {
  return (
    <div className="navbar shadow-md">
      <div className="w-[800px] mx-auto">
        <div className="navbar-start">
          <a href="/">
            <img
              src="https://www.klatterdomen.se/public/generate/collage_object.php?id=10625904&h=942a2cb74d8017610292cbfe5d3a3471"
              alt="LOGO"
              className="w-16"
            />
          </a>
        </div>
        <div className="navbar-end text-right">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
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
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-md w-52 origin-top-right right-0 border"
            >
              <li>
                <a href="/">Testa klättring</a>
              </li>
              <li>
                <a href="/">Priser</a>
              </li>
              <li>
                <a href="/">Om oss</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
