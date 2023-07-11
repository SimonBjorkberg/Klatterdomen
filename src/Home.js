const Home = () => {
  return (
    <div className="home w-[900px] px-10 mx-auto mt-10">
      <section className="bg-white pt-3">
        <div>
          <figure>
            <iframe
              className="mx-auto rounded-md shadow-md"
              title="Shoes"
              width="800"
              height="400"
              src="https://www.youtube.com/embed/g1G2Dydo34o"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </figure>
        </div>
      </section>
      <section className="bg-white rounded-b-md">
        <div className="container mx-auto p-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Välkommen till oss!</h1>
            <p className="text-lg">
              Göteborgs <span className="font-bold">Största</span> Klättergym.
              Här kan du prova på för första gången med instruktör, gå{" "}
              <span className="font-bold">säkringskurser</span> och{" "}
              <span className="font-bold">teknikkurser</span>, ta en fika i
              cafét, köpa klätterutrustning och mycket mer!
            </p>
          </div>
          <hr className="w-[770px] mx-auto mt-10" />
          <div className="mt-8 mb-2">
            <h1 className="text-2xl font-bold mb-2">Öppettider</h1>
            <p>Mån-tors: 11:00 - 22:00</p>
            <p>Fre: 11:00 - 21:00</p>
            <p>Lör-Sön: 11:00 - 19:00</p>
          </div>
          <a href="/" className="no-underline text-blue-500">
            Avvikande öppettider
          </a>
        </div>
        <hr className="w-[770px] mx-auto mb-8" />
      </section>
      <section>
        <h1 className="text-2xl font-bold">Ta sig hit</h1>

      </section>
    </div>
  );
};

export default Home;
