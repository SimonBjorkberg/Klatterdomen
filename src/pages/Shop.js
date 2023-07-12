import acti from "../images/acti.png";
import arrowDown from '../images/arrow-down.png'

const Shop = () => {
  return (
    <div className="shop min-h-screen bg-base-300">
      <section>
        <div
          className="hero min-h-[60vh]"
          style={{
            backgroundImage:
              "url(https://cdn.discordapp.com/attachments/798984082217500685/1128435219821768814/IMG_3093.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold text-success">
                Klätterdomens Butik{" "}
              </h1>
              <p className="mb-5 text-white">
                I vår butik inne på Klätterdomen har vi ett stort utbud av{" "}
                <span className="text-success font-bold">all utrustning</span>{" "}
                man behöver för{" "}
                <span className="text-success font-bold">
                  inomhus & utomhusklättring
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="py-10 bg-white">
          <h1 className="text-4xl font-bold">Våra priser</h1>
          <p className="max-w-[700px] w-[90%] mx-auto mt-3">
            Alla som har ett träningskort på Klätterdomen får 10% rabatt i
            butiken. Vi har ett stort utbud av klätterutrustning från flera
            olika märken för både inomhus- och utomhusklättring.{" "}
          </p>
          <img src={arrowDown} alt="Down" className='w-6 mx-auto mt-5'/>
        </div>
      </section>
      <section className="pb-5">
        <div className="collapse collapse-arrow rounded-md w-[90%] max-w-[700px] mx-auto mt-16 shadow-md">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-neutral text-white peer-checked:text-neutral text-left peer-checked:bg-white">
            <p className="text-xl">Entre</p>
          </div>
          <div className="collapse-content bg-neutral text-white peer-checked:text-neutral text-left peer-checked:bg-white">
            <div>
              <h1 className="text-xl">Dagspass</h1>
              <p>140kr</p>
            </div>
            <div>
              <h1 className="text-xl mt-3">Dagspass junior (under 16 år)</h1>
              <p>80kr</p>
            </div>
            <div>
              <h1 className="text-xl mt-3">Dagspass barn (under 7 år)</h1>
              <p>Gratis med betalande vuxen</p>
            </div>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-300 rounded-md w-[90%] max-w-[700px] mx-auto mt-2 shadow-md">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-neutral text-white peer-checked:text-neutral text-left peer-checked:bg-white">
            <p className="text-xl">Uthyrning</p>
          </div>
          <div className="collapse-content bg-neutral text-white peer-checked:text-neutral text-left peer-checked:bg-white">
            <div>
              <h1 className="text-xl">Klätterskor</h1>
              <p>40kr</p>
            </div>
            <div>
              <h1 className="text-xl mt-3">Sele</h1>
              <p>20kr</p>
            </div>
            <div>
              <h1 className="text-xl mt-3">Kritpåse</h1>
              <p>10kr</p>
            </div>
            <div>
              <h1 className="text-xl mt-3">Repbroms (GriGri & jul2)</h1>
              <p>20kr</p>
            </div>
            <div>
              <h1 className="text-xl mt-3">Ledrep</h1>
              <p>40kr</p>
            </div>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-300 rounded-md w-[90%] max-w-[700px] mx-auto mt-2 shadow-md">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-neutral text-white peer-checked:text-neutral text-left peer-checked:bg-white">
            <p className="text-xl">Medlemskap</p>
          </div>
          <div className="collapse-content bg-neutral text-white peer-checked:text-neutral text-left peer-checked:bg-white">
            <div>
              <h1 className="text-xl">Vuxen</h1>
              <p>10-klippkort - 1195kr</p>
              <p>25-klippkort - 2495kr</p>
              <p>Halvårskort - 2600kr</p>
              <p>Helårskort - 4350kr</p>
              <p>
                Autogiro - 360kr/månad / 3 månaders bindningstid, 1 månads
                uppsägningstid
              </p>
            </div>
            <div>
              <h1 className="text-xl mt-5">Junior (under 16 år)</h1>
              <p>10-klippkort - 700kr</p>
              <p>25-klippkort - 1750kr</p>
              <p>Halvårskort - 2100kr</p>
              <p>Helårskort - 2990kr</p>
              <p>
                Autogiro - 250kr/månad / 3 månaders bindningstid, 1 månads
                uppsägningstid
              </p>
            </div>
          </div>
        </div>
        <img src={acti} alt="Actiway/epassi" className="mx-auto mt-5 w-52" />
      </section>
    </div>
  );
};

export default Shop;
