const Home = () => {
  return (
    <div className="home mx-auto">
      <div
        className="hero min-h-screen shadow-xl"
        style={{
          backgroundImage:
            "url(https://walltopia.com/wp-content/uploads/2021/07/Overvaningen-5.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div>
            <h1 className="mb-5 text-4xl 2xl:text-7xl font-bold text-success">
              Välkommen till Klätterdomen
            </h1>
            <p className="text-lg mx-auto max-w-md">
              Göteborgs <span className="font-bold text-success">Största</span> Klättergym.
              Här kan du prova på för första gången med instruktör, gå{" "}
              <span className="font-bold text-success">säkringskurser</span> och{" "}
              <span className="font-bold text-success">teknikkurser</span>, ta en fika i
              cafét, köpa klätterutrustning och mycket mer!
            </p>
          </div>
        </div>
      </div>
      <h1 className="mt-10 text-4xl font-bold">
        Detta har vi att erbjuda
      </h1>
      <section className="flex flex-col xl:flex-row justify-between mx-auto 2xl:w-[80%] my-10">
        <div className="card w-96 bg-base-100 shadow-md mx-auto mb-10 xl:mb-0">
          <figure>
            <img
              src="https://dst15js82dk7j.cloudfront.net/256604/76109924-7GhEM.jpg"
              alt="test"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold text-success">Väggar</h2>
            <p className="text-left">
              På Klätterdomen har vi väggar för topprepsklättring, ledklättring
              och bouldring. Här finns 55 topprep, 9 st Autobelays och en stor
              ledgrotta på väggar som är mellan 11 - 14.5 meter höga. Vertikalt,
              Sva, Överhäng, Sprickor, Stalaktiter, Struktur, Drytooling, 2 st
              Pelare varav ena är en kopia från en utomhusklippa.
            </p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-md mx-auto mb-10 xl:mb-0">
          <figure>
            <img
              src="https://dst15js82dk7j.cloudfront.net/256604/84519226-DqDK5.jpg"
              alt="test"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-success font-bold text-left">Kaosvägg, Tensionboard & Kilterboard</h2>
            <p className="text-left">
              Kaosväggen är en bouldervägg fullsmackad med grepp. Perfekt för
              att bygga egna problem och cirklar! Tensionboarden & Kilterboarden
              är två ledbelysta träningsväggar, båda är kopplade till varsin app
              med boulderproblem!
            </p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-md mx-auto">
          <figure>
            <img
              src="https://dst15js82dk7j.cloudfront.net/256604/84517785-MRdm7.jpg"
              alt="test"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold text-success">Gym</h2>
            <p className="text-left">
              På övervåningen finns våran gymavdelning. Där finns bl.a:
              latsmaskin, pullupstång i två olika höjder, campusboard,
              campustege, flera varianter av fingerboards, roddmaskiner, ringar,
              bänkpress, hantlar, skivstänger, pegboard.
            </p>
          </div>
        </div>
      </section>
      <section className="mb-10">
      <iframe className="mx-auto rounded-md border-2 border-neutral-700 shadow-md w-[90%] h-[300px] md2:w-[800px] md2:h-[380px]"
              title="Shoes"
              src="https://www.youtube.com/embed/g1G2Dydo34o"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
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
              <button
                className="text-blue-500 hover:underline"
                onClick={() => window.oppettider.showModal()}
              >
                Avvikande öppettider

              </button>
              <dialog id="oppettider" className="modal">
                <form method="dialog" className="modal-box">
                  <h3 className="font-bold text-xl">
                    Avvikande öppettider 2023{" "}
                  </h3>
                  <ul>
                    <p className="text-left font-bold mt-3">Röda Dagar</p>
                    <li className="text-left">
                      Valborg: 30 april, 11:00 - 19:00 <br />
                      1 maj: 11:00 - 21:00 <br />
                      Kristi Himmelsfärd: 18 maj, 11:00 - 21:00 <br />
                      Nationaldagen: 6 juni, 11:00 - 22:00
                    </li>
                  </ul>
                  <ul>
                    <p className="text-left font-bold mt-3">Midsommar</p>
                    <li className="text-left">
                      Midsommarafton: Stängt <br />
                      Midsommardagen: Stängt
                    </li>
                  </ul>
                  <ul>
                    <p className="text-left font-bold mt-3">Jul & Nyår</p>
                    <li className="text-left">
                      23 dec: Stängt <br />
                      24 dec: Stängt <br />
                      25 dec: Stängt <br />
                      26 dec: 11:00 - 19:00 <br />
                      27 dec: 11:00 - 21:00 <br />
                      28 dec: 11:00 - 21:00 <br />
                      29 dec: 11:00 - 21:00 <br />
                      30 dec: 11:00 - 19:00 <br />
                      31 dec: Stängt <br />1 jan: Stängt
                    </li>
                  </ul>
                  <div className="modal-action">
                    <button className="btn">Stäng</button>
                  </div>
                </form>
              </dialog>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;