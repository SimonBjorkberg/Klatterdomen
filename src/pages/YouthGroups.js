const YouthGroups = () => {
  return (
    <div className="bg-base-200 min-h-screen">
      <div class="youth-groups pt-[80px] w-[90%] md2:w-[800px] mx-auto">
        <div className="mt-10">
          <h1 class="text-4xl font-bold mb-4">Barn & Ungdomsgrupper</h1>
          <p class="text-lg">
            Klätterdomens barn- & ungdomsklättring bedrivs på vår/höst termin.
            Grupper både för nybörjare och för de som klättrat ett tag och vill
            ha mer avancerad träning. På träningarna får man klättra, träna och
            ha roligt tillsammans med andra jämnåriga. Grupperna hålls av
            erfarna ledare som lär ut olika klättertekniker för att utvecklas
            och bli en bättre klättrare.
          </p>
        </div>
        <div>
          <p class="text-lg mt-5 font-bold">
            Alla som är med i barn- och ungdomsgrupperna på Klätterdomen har 10%
            rabatt i butiken.
          </p>
        </div>
        <section>
          <div class="collapse bg-base-200 mt-2">
            <input type="checkbox" class="peer" id="collapse-toggle-2" />
            <div class="collapse-title bg-primary text-white peer-checked:bg-secondary peer-checked:text-white cursor-pointer">
              <label for="collapse-toggle-2">
                <p className="text-xl">Hösten 2023</p>
              </label>
            </div>
            <div class="collapse-content bg-primary text-white peer-checked:bg-secondary peer-checked:text-white">
              <div class="text-lg">
                <h1 class="text-xl font-bold mt-4">
                  Barngrupper Lördag/Söndag
                </h1>
                <p class="mb-4">
                  Start för höstterminen är V.38, 23-24 sept. <br /> Uppehåll:
                  V.44, 4-5 nov. <br /> Sista klättringen är helgen V.48, 2-3
                  dec.
                </p>

                <h1 class="text-xl font-bold">Ungdomsgrupper Måndag/Onsdag</h1>
                <p>
                  Start V.39, måndag 25 sept. och onsdag 27 sept. <br />{" "}
                  Uppehåll: V.44, måndag 30 okt. och onsdag 1 nov. <br /> Sista
                  klättringen för måndag är V.49, 4 dec. <br /> Sista
                  klättringen för onsdag är V.51, 20 dec. <br /> Obs: Man kan ej
                  ta igen missade tillfällen!
                </p>
              </div>
            </div>
          </div>

          <div class="collapse bg-base-200 my-2">
            <input type="checkbox" class="peer" id="collapse-toggle" />
            <div class="collapse-title bg-primary text-white peer-checked:bg-secondary">
              <label for="collapse-toggle" class="cursor-pointer">
                <p class="text-xl">Barnklättring Lördag & Söndag</p>
              </label>
            </div>
            <div class="collapse-content bg-primary text-white peer-checked:bg-secondary">
              <div class="my-4 text-xl">
                <p class="mb-2 font-bold">
                  Topprepskort: För dessa grupper behöver man ha med en anhörig
                  som säkrar. <br />
                  Mer om detta nedan.
                </p>
                <p class="mb-2">Kl.11.10-12.35: 10 - 14 år</p>
                <p class="mb-2">Kl.12.50-14.15: 6 - 9 år</p>
                <p class="mb-2">Antal gånger: 10 tillfällen</p>
                <p class="mb-2">Tid: 85 minuter/gång</p>
                <p class="mb-2">Utrustning: All utrustning som behövs ingår.</p>
                <p class="mb-2">
                  Träningen startar med uppvärmning och genomgång av dagens
                  övningar. Barnen får både bouldra och klättra på rep. Passet
                  avslutas med stretching.
                </p>
                <div>
                  <p>
                    Klätterdomen anordnar rabatterade grundkurstillfällen för de
                    som ska ta topprepskort för att säkra i barn- &
                    ungdomsgrupperna. Grundkursen är uppdelad i två delar, två
                    timmar per del. Vill man ta topprepskortet via Klätterdomens
                    kurser är det viktigt att man anmäler den som vill gå.
                    Anmälan kan man göra i samband med att man anmäler sitt
                    barn/ungdom.
                    <br />
                    Maila{" "}
                    <span className="font-bold">klatterdomengbg@gmail.com</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="collapse bg-base-200 my-2">
            <input type="checkbox" class="peer" id="collapse-toggle" />
            <div class="collapse-title bg-primary text-white peer-checked:bg-secondary-focus">
              <label for="collapse-toggle" class="cursor-pointer">
                <p class="text-xl">Måndag & Onsdags grupper</p>
              </label>
            </div>
            <div class="collapse-content bg-primary text-white peer-checked:bg-secondary-focus">
              <div class="my-4 text-xl">
                <p class="mb-5">
                  <span className="font-bold">
                    För att delta i dessa grupper krävs topprepskort.
                  </span>{" "}
                  <br />
                  (12-14 år, topprepskortet endast giltigt under
                  ungdomsträningen) <br />
                  Mer information nedan
                </p>
                <h2 class="font-bold mb-2">
                  Måndag Ungdomsklättring 14 - 19 år
                </h2>
                <p class="mb-2">Antal gånger: 10 tillfällen</p>
                <p class="mb-2">När: kl.17.30-19.00 eller kl.19.30-21.00</p>
                <p class="mb-2">
                  Utrustning: Sele och repbroms ingår under klättringen. Skor
                  finns att hyra men vi rekommenderar att man köper/har sin egna
                  utrustning till denna grupp.
                </p>

                <h2 class="font-bold mt-5 mb-2">
                  Onsdag Ungdomsklättring 12 - 19 år
                </h2>
                <p class="mb-2">Antal gånger: 12-14 tillfällen</p>
                <p class="mb-2">När: kl.17.15-19.00 eller kl.19.15-21.00</p>
                <p class="mb-2">
                  Klättrat minst en termin i våra grupper, alternativt klättrat
                  minst 1 år. Rekommendation att man klarar av att klättra minst
                  grad 6a.
                </p>
                <p class="mb-2">
                  Träningsgruppen på onsdagar riktar sig till er som vill träna
                  mer och lite hårdare. Strukturerad träning inriktad på teknik
                  och övningar för att vidareutveckla klättringen.
                </p>
                <p class="mb-2">
                  Utrustning: Sele och repbroms ingår under klättringen. Skor
                  finns att hyra men vi rekommenderar att man köper/har sin egna
                  utrustning till denna grupp.
                </p>
              </div>
            </div>
          </div>
          <div class="collapse bg-base-200 my-2">
            <input type="checkbox" class="peer" id="collapse-toggle" />
            <div class="collapse-title bg-primary text-white peer-checked:bg-secondary-focus">
              <label for="collapse-toggle" class="cursor-pointer">
                <p class="text-xl">Anmälan till de olika grupperna</p>
              </label>
            </div>
            <div class="collapse-content bg-primary text-white peer-checked:bg-secondary-focus">
              <div class="my-4 text-xl"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default YouthGroups;
