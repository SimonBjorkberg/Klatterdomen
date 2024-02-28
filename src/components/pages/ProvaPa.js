const ProvaPa = () => {
  return (
    <div className="prova-pa min-h-screen bg-neutral-100">
      <div
        className="hero min-h-[60vh]"
        style={{
          backgroundImage:
            "url(https://h24-original.s3.amazonaws.com/256604/25111877-XVqor.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl 2xl:text-6xl font-bold ">
              Vill du testa på att <span className="text-success">klättra</span>
              ?
            </h1>
            <p>Nedan kan du läsa om vad som skulle kunna passa dig bäst!</p>
          </div>
        </div>
      </div>
      <section>
        <div
        
          className="collapse collapse-arrow bg-neutral rounded-md w-[90%] max-w-[700px] mx-auto mt-8 shadow-md text-white"
        >
        <input type="checkbox" className="peer" />
          <div className="collapse-title text-left text-xl peer-checked:bg-white peer-checked:text-neutral">Drop-In</div>
          <div className="collapse-content text-left peer-checked:bg-white peer-checked:text-neutral">
            <div>
              <p>
                På drop-in prova på får man klättra på våra höga väggar med rep.
                En instruktör hjälper till med selar, säkrar, ger klättertips
                och förklarar hur klättring fungerar!
              </p>
              <p className="mt-5 mb-3">
                <span className="font-bold text-lg">När?:</span> Varje Lördag &
                Söndag, Ingen anmälan krävs men om man vill reservera platser
                kan man göra det fr.o.m. måndag samma vecka
              </p>
              <p>
                14.30 - 16.00 <br /> Pris: 250kr/person <br /> Max antal: 30
                personer
              </p>
              <p className="mt-3 text-xl font-bold">
                All utrustning man behöver ingår i priset.
              </p>
            </div>
          </div>
        </div>
        <div

          className="collapse collapse-arrow bg-neutral rounded-md w-[90%] max-w-[700px] mx-auto mt-2 shadow-md text-white focus:bg-white focus:text-neutral"
        >
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-left text-xl peer-checked:bg-white peer-checked:text-neutral">Prova på</div>
          <div className="collapse-content text-left peer-checked:bg-white peer-checked:text-neutral">
            <div>
              <p>Testa på klättring med instruktör!</p>
              <p className="mt-5 mb-3">
                I en timma hjälper instruktör till med selar, säkrar, ger
                klättertips och förklarar hur klättring fungerar!
              </p>
              <p className="mb-3">
                Efter klättring med instruktör, kan man fortsätta klättra på
                våra boulderväggar <br /> (lägre väggar med tjockmatta under)
                eller träna på vårt gym.
              </p>
              <p>
                2 - 4 personer: 400 kr/person <br /> Minst 5 personer: Vuxen:
                290 kr/person <br />
                Barn/Ungdom: 250 kr/person (6 - 15 år)
              </p>
              <p className="mt-3 text-xl font-bold">
                All utrustning man behöver ingår i priset.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="rounded-md w-[90%] max-w-[350px] mx-auto mt-8 pb-5 text-neutral">
          <h1 className="text-3xl mb-4">Bokning</h1>
          <p className="text-xl text-left">
            Vi behöver: <br /> - Drop-in eller Prova på <br /> - Antal personer{" "}
         <br /> - Gärna fler förslag på datum
          </p>
          <div className="mt-6">
            <p className="text-xl mb-5">klatterdomengbg@gmail.com</p>
            <a href="mailto:klatterdomengbg@gmail.com" className="mail-btn text-xl">Maila oss</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProvaPa;
