import arrowDown from "../images/arrow-down.png";
import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <div className="courses min-h-screen bg-base-300 flex justify-center items-center flex-col">
      <h1 className="text-3xl w-[90%] max-w-[700px] mt-32">
        Kurs-information för dig som vill börja klättra & säkra på
        repväggarna
      </h1>
      <img src={arrowDown} alt="Down" className="w-6 mb-8 mt-3" />
      <div className="collapse collapse-arrow bg-base-300 rounded-md w-[90%] max-w-[700px] mx-auto mt-2 shadow-md">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-neutral text-white peer-checked:text-neutral text-left peer-checked:bg-white">
          <p className="text-xl">Grundkurs för Topprepskort</p>
        </div>
        <div className="collapse-content bg-neutral text-white peer-checked:text-neutral text-left peer-checked:bg-white">
          <div>
            <h1 className="text-xl">Grundkurs</h1>
            <p>
              Kursen kräver inga förkunskaper och är en bra första kurs om man
              ska börja klättra! På grundkursen lär man sig topprepssäkring,
              utrustning, klätterteknik och säkerhetstänk vid inomhusklättring.
              Blir man godkänd efter kursen erhåller man Topprepskort.
            </p>
          </div>
          <div>
            <h1 className="text-xl mt-5">Grundkurs upplägg</h1>
            <p>
              - Fasta tider(info nedan): 895 kr/person <br /> - Två
              kurstillfällen på olika - dagar. <br />
              - Del 1: 2 timmar <br />
              - Del 2: 2 timmar <br />
              - Skor och sele ingår i priset. <br />
              - Lägsta ålder 14 år. <br />- Under 18 år krävs målsmans
              tillstånd.
            </p>
          </div>
          <div>
            <h1 className="text-xl mt-5">Vad är Topprepskort?</h1>
            <p>
              Topprepskort är den licens som krävs för att få topprepssäkra på
              inomhusgym i Sverige. <br />
              Innehavare av topprepskort får även använda våra Autobelays.{" "}
              <br />
              <Link to="/om-oss" className="text-blue-500">
                Vill du veta vad topprep & autobelay innebär? Klicka här
              </Link>
            </p>
          </div>
          <div>
            <h1 className="text-xl mt-5">Tidtabell</h1>
            <div>
              <h1 className="mt-2 text-lg">- Del 1</h1>
              <p>Tisdag: 19:15 - 21:15</p>
              <p>Onsdag: 17:00 - 19:00</p>
              <p>Torsdag: 19:15 - 21:15</p>
            </div>
            <div>
              <h1 className="mt-2 text-lg">- Del 2</h1>
              <p>Tisdag: 17:00 - 19:00</p>
              <p>Onsdag: 19:15 - 21:15</p>
              <p>Torsdag: 17:00 - 19:00</p>
            </div>
            <div>
              <h1 className="mt-2 text-lg">
                Vill du boka utöver våra fasta tider?
              </h1>
              <p>
                Då behöver man vara minst 2 st och det kostar 1 050 kr/person.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-300 rounded-md w-[90%] max-w-[700px] mx-auto mt-2 shadow-md">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-neutral text-white peer-checked:text-neutral text-left peer-checked:bg-white">
          <p className="text-xl">Ledkort</p>
        </div>
        <div className="collapse-content bg-neutral text-white peer-checked:text-neutral text-left peer-checked:bg-white">
          <div>
            <p className="font-bold text-xl mb-3">Förkrav: Topprepskort</p>
            <h1 className="text-xl">Ledkurs</h1>
            <p>
              För att klara av att genomföra kursen rekommenderar vi att man kan
              klättra 6a på topprep. <br />
              Kursen innefattar ledsäkring, ledklättring, genonmgång av
              utrustning, fall m.m. Blir man godkänd vid kursens slut erhåller
              man ledkort.
            </p>
          </div>
          <div>
            <h1 className="text-xl mt-5">Ledkurs upplägg</h1>
            <p>
              - Kurstid: 3 timmar <br />
              - Pris: 945 kr/person <br />
              - Har ni gått topprepskursen hos oss? Visa ert topprepskort så får
              ni 50 kr rabatt! <br />
              - Tag med: sele, skor & den repbroms du använder. <br />- Övrig
              utrustning som behövs ordnar vi.
            </p>
          </div>
          <div>
            <h1 className="text-xl mt-5">Bokning</h1>
            <p>För att boka in en ledkurs behöver ni vara två stycken.</p>
          </div>
          <div>
            <h1 className="text-xl mt-5">Bokningsbara tider</h1>
            <div>
              <h1 className="mt-2 text-lg">Kvällstid:</h1>
              <p>- Endast Torsdag</p>
              <h1 className="mt-2 text-lg">Dagtid:</h1>
              <p>- Måndag, Tisdag & Torsdag</p>
              <h1 className="mt-2 text-lg">Helg:</h1>
              <p>- Behöver bokas några veckor i förväg</p>
              <p className="mt-3">
                Är man ensam kan man kolla av med oss när det är ledkurser
                inbokat.
              </p>
            </div>
          </div>
        </div>
      </div>
      <h1 className="mt-12 text-3xl w-[90%] max-w-[700px]">
        Teknikkurs med Axel Hultqvist
      </h1>
      <img src={arrowDown} alt="Down" className="w-6 mt-3 mb-8" />
      <div className="collapse collapse-arrow bg-base-300 rounded-md w-[90%] max-w-[700px] mx-auto mt-2 shadow-md">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-neutral text-white peer-checked:text-neutral text-left peer-checked:bg-white">
          <p className="text-xl">Teknikkurs Del 1</p>
        </div>
        <div className="collapse-content bg-neutral text-white peer-checked:text-neutral text-left peer-checked:bg-white">
          <div>
            <p>
              Denna kurs är för dig som precis börjat klättra eller har klättrat
              ett litet tag och klättrar leder runt grad 5c-6b+.
            </p>
            <p className="mt-2">
              På kursen kommer du att lära dig grundläggande till lite mer
              avancerad teknik och hur du ska komma igång med att träna
              klättring på bästa sätt för att kunna öka i graderna.
            </p>
            <p className="mt-2">
              Fokus på kursen kommer att ligga på topprepsklättring men även
              bouldering kommer utövas.
            </p>
          </div>
          <div>
            <h1 className="text-xl mt-5">Upplägg</h1>
            <p className="mt-1">
              Kursen är 3 tillfällen på onsdagskvällar: <br />
              18:30 - 20:30
            </p>
            <p className="mt-2">
              Pris: <br />
              850 kr/deltagare + entré
            </p>
            <p className="mt-2">
              Krav: <br />
              Topprepskort, minst 16 år
            </p>
            <p className="mt-2">
              Utrustning: <br />
              Ta med egen eller hyr på Klätterdomen
            </p>
          </div>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-300 rounded-md w-[90%] max-w-[700px] mx-auto mt-2 shadow-md">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-neutral text-white peer-checked:text-neutral text-left peer-checked:bg-white">
          <p className="text-xl">Teknikkurs Del 2</p>
        </div>
        <div className="collapse-content bg-neutral text-white peer-checked:text-neutral text-left peer-checked:bg-white">
          <div>
            <p>
              Denna kurs riktar sig till dig som har klättrat ett tag och
              klättrar runt 6c-7b.
            </p>
            <p className="mt-2">
              Fokus på denna kurs ligger på mer avancerad klätterteknik och
              rörelselära samt att få en inblick i hur du ska träna rätt för att
              kunna bli en bättre klättrare. Mellan passen kommer ni att få
              tränings övningar för att kunna utvecklas i er klättring.
            </p>
            <p className="mt-2">
              Fokus på kursen kommer att ligga på topprepsklättring men även
              bouldering kommer utövas.
            </p>
            <p className="mt-2">
              Efter att du gått kursen är syftet att ha fått förbättrad teknik
              och förstå vikten av att strukturera upp sin träning för att gå
              vidare och utvecklas som klättrare.
            </p>
          </div>
          <div>
            <h1 className="text-xl mt-5">Upplägg</h1>
            <p className="mt-2">
              Kursen är 5 tillfällen på onsdagskvällar: <br /> 18:00 - 20:30
            </p>
            <p className="mt-2">
              Pris: <br />
              1600 kr/deltagare + entré
            </p>
            <p className="mt-2">
              Krav: <br />
              Topprepskort (& Gärna ledkort), minst 16 år
            </p>
            <p className="mt-2">
              Utrustning: <br />
              Ta med egen eller hyr på Klätterdomen
            </p>
          </div>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-300 rounded-md w-[90%] max-w-[700px] mx-auto mt-2 shadow-md">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-neutral text-white peer-checked:text-neutral text-left peer-checked:bg-white">
          <p className="text-xl">Privat Tekinkkurs</p>
        </div>
        <div className="collapse-content bg-neutral text-white peer-checked:text-neutral text-left peer-checked:bg-white">
          <div>
            <p>
              Om du vill få tekniktips för att komma vidare i klättringen är 1,5
              timmars kursen på ett tillfälle något för dig. <br />
              Få tips och träningsövningar på det du behöver <br />
              förbättra din klättring.
            </p>
          </div>
          <div>
            <p className="mt-2">
              Pris: <br />
              450 kr/deltagare + entré (minst 2 personer)
            </p>
            <p className="mt-2">
              Krav: <br />
              Topprepskort (& Gärna ledkort), minst 16 år
            </p>
            <p className="mt-2">
              Utrustning: <br />
              Ta med egen eller hyr på Klätterdomen
            </p>
            <p className="mt-2">
              Privata teknikkursen bokas in via överenskommelse med instruktören
              på onsdag kvällar, mån, tis, tors, fre förmiddag/tidig
              eftermiddag.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[90%] mt-8 pb-8 text-neutral">
        <h1 className="text-3xl">Anmälan</h1>
        <p className="text-lg">
          Anmälan till samtliga kurser görs via <br />
          klatterdomengbg@gmail.com{" "}
        </p>
        <p className="mt-5">
          Teknikkurs Del 1 & 2 startar när tillräckligt många anmält sig och meddelas i god tid förväg via mejl.
        </p>
      </div>
    </div>
  );
};

export default Courses;
