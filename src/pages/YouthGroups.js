import { Link } from "react-router-dom";

const YouthGroups = () => {
  return (
    <div className="bg-base-200 min-h-screen pb-5">
      <div className="youth-groups pt-[80px] w-[90%] md2:w-[800px] mx-auto">
        <div className="mt-10">
          <h1 className="text-4xl font-bold mb-4">Barn & Ungdomsgrupper</h1>
          <p>
            Klätterdomens barn- & ungdomsklättring bedrivs på vår/höst termin.
            Grupper både för nybörjare och för de som klättrat ett tag och vill
            ha mer avancerad träning. På träningarna får man klättra, träna och
            ha roligt tillsammans med andra jämnåriga. Grupperna hålls av
            erfarna ledare som lär ut olika klättertekniker för att utvecklas
            och bli en bättre klättrare.
          </p>
        </div>
        <div>
          <p className="text-xl mt-5">
            Alla som är med i Barn & Ungdomsgrupperna på Klätterdomen har 10%
            rabatt i butiken.
          </p>
        </div>
        <section className="pt-16">
          <div className="collapse bg-base-200 rounded-md w-[90%] max-w-[700px] mx-auto mt-5 shadow-md">
            <input type="checkbox" className="peer" id="collapse-toggle-2" />
            <div className="collapse-title bg-neutral text-white peer-checked:text-neutral peer-checked:bg-white text-left">
              <label for="collapse-toggle-2">
                <p className="text-xl">Hösttermin 2023 Info</p>
              </label>
            </div>
            <div className="collapse-content bg-neutral text-white peer-checked:text-neutral peer-checked:bg-white">
              <div className="text-left">
                <div className="mb-5">
                  <h1 className="text-xl font-bold">
                    Barngrupper Lördag / Söndag
                  </h1>
                  <p className="mb-2">
                    Start: 23 / 24 September <br />
                    Uppehåll: 4 / 5 November <br />
                    Sista klättringen: 2 / 3 December
                  </p>
                </div>
                <div>
                  <h1 className="text-xl font-bold">
                    Ungdomsgrupper Måndag / Onsdag
                  </h1>
                  <p>
                    Start: 25 / 27 September <br /> Uppehåll: 30 Oktober / 1
                    November
                    <br /> Sista klättringen för Måndags-gruppen: 4 December{" "}
                    <br /> Sista klättringen för Onsdags-gruppen: 20 December{" "}
                    <br />
                    <p className="mt-5 text-xl font-bold">
                      OBS: Man kan ej ta igen missade tillfällen!
                    </p>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="collapse bg-base-200 rounded-md w-[90%] max-w-[700px] mx-auto mt-5 shadow-md">
            <input type="checkbox" className="peer" id="collapse-toggle" />
            <div className="collapse-title bg-neutral text-white peer-checked:text-neutral peer-checked:bg-white text-left">
              <label for="collapse-toggle" className="cursor-pointer">
                <p className="text-xl">Barnklättring Lördag & Söndag</p>
              </label>
            </div>

            <div className="collapse-content bg-neutral text-white peer-checked:text-neutral peer-checked:bg-white">
              <div className="text-left">
                <p className="mb-3">
                  <span className="font-bold text-xl">Topprepskort:</span>{" "}
                  <br />
                  För dessa grupper behöver man ha med en anhörig som säkrar.{" "}
                  <br />
                  Mer om det nedan.
                </p>
                <h1 className="text-xl font-bold">Tider:</h1>
                <p>
                  11:10-12:35: 10 - 14 år <br />
                  12:50-14:15: 6 - 9 år <br />
                  Antal gånger: 10 <br />
                  Tid: 85 minuter per gång <br />
                </p>
                <p className="mt-2">
                  <span className="font-bold text-xl">Utrustning:</span> <br />
                  All utrustning som behövs ingår.
                </p>
                <p className="mt-2">
                  <span className="font-bold text-xl">Träningen:</span> <br />
                  Träningen startar med uppvärmning och genomgång av dagens
                  övningar. Barnen får både bouldra och klättra på rep. Passet
                  avslutas med stretching.
                </p>
                <div className="mt-2">
                  <p>
                    <span className="font-bold text-xl">Toppreps kurser:</span>{" "}
                    <br />
                    Klätterdomen anordnar rabatterade grundkurstillfällen för de
                    som ska ta topprepskort för att säkra i barn &
                    ungdomsgrupperna. Grundkursen är uppdelad i två delar, två
                    timmar per del. Vill man ta topprepskortet via Klätterdomens
                    kurser är det viktigt att man anmäler den som vill gå.
                    Anmälan kan man göra i samband med att man anmäler sitt
                    barn. <br />
                  </p>
                  <p className="mt-3">
                    Mer info ang. kurser kan du hitta{" "}
                    <Link to="/kurser" className="text-blue-600">
                      Här
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="collapse bg-base-200 rounded-md w-[90%] max-w-[700px] mx-auto mt-5 shadow-md">
            <input type="checkbox" className="peer" id="collapse-toggle" />
            <div className="collapse-title bg-neutral text-white peer-checked:text-neutral peer-checked:bg-white text-left">
              <label for="collapse-toggle" className="cursor-pointer">
                <p className="text-xl">Måndag & Onsdags grupper</p>
              </label>
            </div>
            <div className="collapse-content bg-neutral text-white peer-checked:text-neutral peer-checked:bg-white">
              <div className="mt-4 text-left">
                <p className="mb-5">
                  <span className="font-bold text-xl">
                    För att delta i dessa grupper krävs topprepskort.
                  </span>{" "}
                  <br />
                  Är man under 14 år så är topprepskortet endast giligt under
                  träningstillfället <br />
                </p>
                <h2 className="text-xl font-bold mt-4">Måndags gruppen</h2>
                <p>14 - 19 år</p>
                <p>Antal gånger: 10</p>
                <p>17:30-19:00 eller 19:30-21:00</p>
                <h2 className="font-bold text-xl mt-4">
                  Onsdag Ungdomsklättring
                </h2>
                <p>12 - 19 år</p>
                <p>Antal gånger: 12 - 14</p>
                <p>17:15-19:00 eller 19:15-21:00</p>
                <p className="mt-3">
                  Klättrat minst en termin i våra grupper, alternativt klättrat
                  minst 1 år. <br /> Rekommendation att man klarar av att
                  klättra minst grad 6a.
                </p>
                <p className="mt-3">
                  Träningsgruppen på onsdagar riktar sig till er som vill träna
                  mer och lite hårdare. Strukturerad träning inriktad på teknik
                  och övningar för att vidareutveckla klättringen.
                </p>
                <p className="mt-3">
                  <span className="font-bold text-xl">
                    Utrustning för båda grupperna:
                  </span>{" "}
                  <br /> Sele och repbroms ingår under klättringen. Skor finns
                  att hyra men vi rekommenderar att man köper/har sin egna
                  utrustning till denna grupp.
                </p>
              </div>
            </div>
          </div>
          <div className="collapse bg-base-200 rounded-md w-[90%] max-w-[700px] mx-auto mt-5 shadow-md">
            <input type="checkbox" className="peer" id="collapse-toggle" />
            <div className="collapse-title bg-neutral text-white peer-checked:text-neutral peer-checked:bg-white text-left">
              <label for="collapse-toggle" className="cursor-pointer">
                <p className="text-xl">Anmälan till grupperna</p>
              </label>
            </div>
            <div className="collapse-content bg-neutral text-white peer-checked:text-neutral peer-checked:bg-white text-left">
              <div>
                <h1 className="text-xl font-bold">Anmälan</h1>
                <p>
                  Anmäl via mail: klatterdomengbg@gmail.com <br />
                  Vi behöver: <br /> Namn, Personnr, telefonnr och önskemål av
                  träningsdagar
                </p>
              </div>
              <div>
                <h1 className="text-xl font-bold">Inbetalning</h1>
                <p>
                  Betala inte in förens ni fått bekräftelse från oss att ni fått
                  en plats. <br />
                  Betalning ska vara oss tillhanda senast 8 september 2023{" "}
                  <br />
                  <div className="mt-3">
                    Betala in på bankgiro: <br />
                    5864-0228, Klätterdomen <br />
                    Märk med namn på barn/ungdom som är anmäld
                  </div>
                </p>

                <h1 className="text-xl font-bold mt-3">Priser</h1>

                <h1 className="text-xl">Lördag/Söndag/Måndag</h1>
                <p>2 295 kr</p>

                <h1 className="mt-3 text-xl">Onsdag</h1>
                <p>
                  2 595 kr - ingår fri entré på Klätterdomen under dessa
                  perioder: <br />
                  Vårtermin: 1 Jan - 31 Juli <br />
                  Hösttermin: 1 Aug - 31 Dec
                </p>

                <h1 className="mt-3 text-xl">Delta i två grupper</h1>
                <p>
                  3 295 kr - ingår fri entré på Klätterdomen under dessa
                  perioder: <br />
                  Vårtermin: 1 Jan - 31 Juli <br />
                  Hösttermin: 1 Aug - 31 Dec
                </p>

                <p className="mt-3">
                  <span className="font-bold text-xl">Toppreps kurser:</span>{" "}
                  <br />
                  Klätterdomen anordnar rabatterade grundkurstillfällen för de
                  som ska ta topprepskort för att säkra i ungdomsgrupperna.
                  Grundkursen är uppdelad i två delar, två timmar per del. Vill
                  man ta topprepskortet via Klätterdomens kurser är det viktigt
                  att man anmäler den som vill gå. Anmälan kan man göra i
                  samband med att man anmäler sitt barn. <br />
                </p>
                <p className="mt-3">
                  Mer info ang. kurser kan du hitta{" "}
                  <Link to="/kurser" className="text-blue-600">
                    Här
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default YouthGroups;
