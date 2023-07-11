const Home = () => {
  return (
    <div className="home mx-auto">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://walltopia.com/wp-content/uploads/2021/07/Overvaningen-5.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div>
            <h1 className="mb-5 text-7xl font-bold">
              Välkommen till Klätterdomen
            </h1>
            <p className="text-lg mx-auto max-w-md">
              Göteborgs <span className="font-bold">Största</span> Klättergym.
              Här kan du prova på för första gången med instruktör, gå{" "}
              <span className="font-bold">säkringskurser</span> och{" "}
              <span className="font-bold">teknikkurser</span>, ta en fika i
              cafét, köpa klätterutrustning och mycket mer!
            </p>
          </div>
        </div>
      </div>
      <section>
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="https://dst15js82dk7j.cloudfront.net/256604/76109924-7GhEM.jpg"
              alt="test"
              className="max-w-xl rounded-lg shadow-xl"
            />
            <div>
              <h1 className="text-5xl font-bold">Väggar</h1>
              <p className="py-6 text-lg">
                På Klätterdomen har vi väggar för topprepsklättring,
                ledklättring och bouldring. Här finns 55 topprep, 9 st
                Autobelays och en stor ledgrotta på väggar som är mellan 11 -
                14.5 meter höga. Vertikalt, Sva, Överhäng, Sprickor,
                Stalaktiter, Struktur, Drytooling, 2 st Pelare varav ena är en
                kopia från en utomhusklippa.
              </p>
            </div>
          </div>
        </div>
        <div className="hero bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="https://dst15js82dk7j.cloudfront.net/256604/96273153-nXJTa.jpg"
              alt="test"
              className="max-w-xl rounded-lg shadow-xl"
            />
            <div>
              <h1 className="text-5xl font-bold">
                Kaosvägg, Tensionboard & Kilterboard
              </h1>
              <p className="py-6 text-lg">
                Kaosväggen är en bouldervägg fullsmackad med grepp. Perfekt för
                att bygga egna problem och cirklar! Tensionboarden &
                Kilterboarden är två ledbelysta träningsväggar, båda är kopplade
                till varsin app med boulderproblem!
              </p>
            </div>
          </div>
        </div>
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="https://dst15js82dk7j.cloudfront.net/256604/84517785-MRdm7.jpg"
              alt="test"
              className="max-w-xl rounded-lg shadow-xl"
            />
            <div>
              <h1 className="text-5xl font-bold">Gym</h1>
              <p className="py-6 text-lg">
                På övervåningen finns våran gymavdelning. Där finns bl.a:
                latsmaskin, pullupstång i två olika höjder, campusboard,
                campustege, flera varianter av fingerboards, roddmaskiner,
                ringar, bänkpress, hantlar, skivstänger, pegboard.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white rounded-b-md">
        <div className="hero bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-4xl font-bold">Öppettider</h1>
              <div className="py-6">
                <p>Mån-tors: 11:00 - 22:00</p>
                <p>Fre: 11:00 - 21:00</p>
                <p>Lör-Sön: 11:00 - 19:00</p>
              </div>
              <a href="/" className="no-underline text-blue-500">
                Avvikande öppettider
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
