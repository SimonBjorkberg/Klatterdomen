const Navbar = () => {
  return (
    <nav className="fixed mx-auto w-full bg-white z-10 shadow-md">
      <div className="navbar justify-between w-[800px] mx-auto">
        <div className="">
          <a href="/">
            <img
              src="https://www.klatterdomen.se/public/generate/collage_object.php?id=10625904&h=942a2cb74d8017610292cbfe5d3a3471"
              alt="LOGO"
              className="w-12"
            />
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 text-lg">
            <li>
              <a href="/">Sommarlovsklättring</a>
            </li>
            <li>
              <a href="/">Barn & Ungdomsgrupper</a>
            </li>
            <li>
              <details>
                <summary>Klättring</summary>
                <ul className="p-2 bg-base-100">
                  <li>
                    <a href="/">Prova på</a>
                  </li>
                  <li>
                    <a href="/">Kurser</a>
                  </li>
                  <li>
                    <a href="/">Priser</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
