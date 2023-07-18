const About = () => {
  return (
    <div className="about bg-[#fbf5f6] min-h-screen">
      <div className="hero pt-32">
        <div className="hero-overlay bg-opacity-0"></div>
        <div className="hero-content text-center text-neutral-content w-[98%] max-w-[700px] flex flex-col">
          <div>
            <h1 className="text-neutral text-4xl mb-7">FAQ</h1>
          </div>
          <div className="w-full">
            <div
              tabIndex={0}
              className="collapse bg-neutral text-white focus:bg-white focus:text-neutral rounded-md w-[98%] max-w-[700px] mx-auto shadow-md"
            >
              <div className="collapse-title text-xl text-left">
                Vanliga frågor
              </div>
              <div className="collapse-content text-left">
                <h1 className="text-xl">
                  Kan man hyra utrustning för utomhusbruk hos er?
                </h1>
                <p>- Nej, det kan man inte.</p>
                <h1 className="text-xl mt-5">
                  Kan man köpa presentkort hos er?{" "}
                </h1>
                <p>
                  - Man kan köpa presentkort hos oss i kassan. Vi skickar inte
                  presentkort med posten utan man får komma in till oss.
                  Presentkorten gäller i 2 år.
                </p>
                <h1 className="text-xl mt-5">
                  Kan man köpa klätterutrustning hos er?
                </h1>
                <p>
                  {" "}
                  Ja, vi har en butik där vi säljer all utrustning som man
                  behöver för inomhus- och utomhusklättring.
                </p>
                <h1 className="text-xl mt-5">Får man ta med sig hunden?</h1>
                <p>
                  Nej, det är endast vi som får ta med hundar till Klätterdomen
                </p>
                <h1 className="text-xl mt-5">Finns dusch?</h1>
                <p>Ja, vi har 2 duschar i vardera omklädningsrum.</p>
                <h1 className="text-xl mt-5">Vad är Topprepskort? </h1>
                <p>
                  Topprepskort är den licens som krävs för att få topprepssäkra
                  på inomhusgym i Sverige.{" "}
                </p>
                <h1 className="text-xl mt-5">Vad är topprep och led?</h1>
                <p>
                  Topprep betyder att repet redan är uppsatt på väggen. Höga
                  väggar där det hänger upsatta rep, dessa kallas för topprep.
                  För att säkra på dessa krävs Topprepskort.
                </p>
                <p className="mt-3">
                  Sen finns det höga väggar hos oss där det inte sitter rep
                  uppsatt, på dessa väggar ska man fästa upp repet på egen hand,
                  det kallas för ledklättring. För att kunna säkra och klättra
                  på led behöver man inneha Ledkort. För att ta ledkort går man
                  en ledkurs.
                </p>
                <h1 className="text-xl mt-5">Vad är bouldering?</h1>
                <p>
                  Bouldring är klättring på lägre väggar, vanligtvis 4-5 meter
                  höga, och man har en tjockmatta under som fallskydd. Bouldring
                  är en egen disciplin inom klättring som är lite mer
                  styrkebaserat och explosivare än repklättring. Vill man testa
                  bouldring kan man kan komma hit under våra öppettider, betala
                  entré och hyra klätterskor. Personal ger dig en regel- och
                  säkerhetsgenomgång.
                </p>
                <h1 className="text-xl mt-5">
                  Vad är autobelay och vad krävs för att få klättra på dem?
                </h1>
                <p>
                  Autobelay är en maskin som säkrar. Vid topprepsklättring
                  behöver man normalt vara 2 st, en som säkrar och en som
                  klättrar, men en autobelay gör att man kan klättra själv på
                  topprepsväggarna. För använda sig av autobelay krävs
                  Topprepskort. På Klätterdomen har vi 9 väggar med autobelay.
                </p>
              </div>
            </div>
            <div
              tabIndex={0}
              className="collapse bg-neutral text-white focus:bg-white focus:text-neutral rounded-md w-[98%] max-w-[700px] mx-auto shadow-md mt-2"
            >
              <div className="collapse-title text-xl text-left">Regler</div>
              <div className="collapse-content">
                <h1 className="text-xl">I hela hallen</h1>
                <p className="text-left">
                  - Uppmaningar från Klätterdomens personal ska följas <br />
                  - Endast Klätterdomens personal har tillåtelse att ha
                  kursverksamhet & lära ut säkringsarbete <br />
                  - Föräldrar har ansvaret för sina barn och att de följer
                  reglerna på Klätterdomen. <br />
                  - Barn under 7 år ska vara inom armlängds avstånd <br />
                  - Inget lek/spring <br />- Man ska ta det lugnt och vara
                  uppmärksam på sin omgivning <br />
                  - Var/gå aldrig under någon som klättrar <br />
                  - Förbjudet att måla med krita på väggarna <br />
                  - Förbjudet att klättra barfota/i sockar <br />
                  - För att vara på övre plan måste man vara 13 år fyllda <br />
                  - För att få vara på gymavdelning måste man vara 16 år fyllda{" "}
                  <br />- Man får inte leka med våra topprep – de blir lätt
                  neddragna <br />
                  - Förbjudet att ställa vattenflaskor och dylikt under
                  klättrare <br />
                  - Klätterdomen ansvarar inte för personliga tillhörigheter
                  eller kvarglömda tillhörigheter. Vi sparar kvarglömt i ca. 2
                  veckor. <br />- Upprepade överträdelser av våra
                  säkerhetsföreskrifter kan leda till avstängning från
                  Klätterdomen
                </p>
                <h1 className="text-xl mt-5">Ledväggar</h1>
                <p className="text-left">
                  - Både klättrare & säkrare ska inneha Ledkort <br />
                  - Klätterdomen rekommenderar använding av hjälplåsande
                  bromsar. <br />
                  - Ledkortet ska hänga synligt i selen <br />
                  - Obligatoriskt att göra Kamratkontroll <br />
                  - Slarvig/dålig säkring kan leda till indraget Ledkort <br />
                  - Vid stor viktskillnad mellan klättrare & säkrare ska våra
                  sandsäckar användas eller en ohm. <br />
                  - Säkraren ska stå nära väggen/under första slingan <br />
                  - Slingorna ska klippas i följd <br />
                  - Förbjudet att hoppa över klipp <br />
                  - Förbjudet att ha för mycket slack <br />- Förbjudet att
                  ställa vattenflaskor/dylikt under klättrare
                </p>
                <h1 className="text-xl mt-5">Bouldering</h1>
                <p className="text-left">
                  - Inget lek/spring på tjockmattorna eller i övriga hallen
                  <br />
                  - Var/gå aldrig under någon som klättrar <br />- Förbjudet att
                  bouldra med sele och/eller kritpåse på sig <br />
                  - Förbjudet att ställa personliga tillhörigheter på blåa
                  bouldermattan <br />- För att klättra på övre plan måste man
                  vara 13 år fyllda <br />- För att använda Gymavdelning måste
                  man vara 16 år fyllda
                </p>
                <h1 className="text-xl mt-5">Topprepsväggar</h1>
                <p className="text-left">
                  - Alla som säkrar på topprep ska inneha Topprepskort <br />
                  - Klätterdomen rekommenderar använding av hjälplåsande
                  bromsar. <br />
                  - Topprepskortet ska hänga synligt i selen <br />
                  - Obligatoriskt att göra Kamratkontroll <br />- Slarvig/dålig
                  säkring kan leda till indraget Topprepskort <br />-
                  Firningsåttan och HMS-knuten är förbjudna som repbroms <br />
                  - Inknytning ska ske direkt i selen & enbart dubbelåttan är
                  tillåten <br />
                  - Stoppknut ska alltid göras på den passiva änden <br />
                  - Golvankare finns & ska användas vid stor viktskillnad mellan
                  klättrare & säkrare <br />
                  - Säkraren ska stå nära väggen/under ankaret <br />
                  - Gå inte emellan säkrare och klättrare <br />- Man får inte
                  leka med våra topprep – de blir lätt neddragna <br />- Klipp
                  ej i topprepen i den slingan som finns bredvid ankaret
                </p>
                <h1 className="text-xl mt-5">Autobelay</h1>
                <p className="text-left">
                  - Användning av autobelay kräver Topprepskort <br />
                  - Topprepskortet ska hänga synligt i selen <br />-
                  Klätterdomens kursverksamhet har företräde på autobelyerna{" "}
                  <br />
                  - Obligatoriskt att göra egen Kamratkontroll <br />- Förbjudet
                  att använda mer än en autobelay per topprepskortinnehavare
                </p>
              </div>
            </div>
            <div
              tabIndex={0}
              className="collapse bg-neutral text-white focus:bg-white focus:text-neutral rounded-md w-[98%] max-w-[700px] mx-auto shadow-md mt-2"
            >
              <div className="collapse-title text-left text-xl">
                Medlemskaps föreskrifter
              </div>
              <div className="collapse-content">
                <h1 className="text-xl">10-klippkort</h1>
                <p className="text-left">
                  - Kortet är personligt <br />
                  - Kortet gäller 2 år från inköpsdatum <br />
                  - Går inte att förlänga <br />- Man kan inte föra över kort
                  till en annan person
                </p>
                <h1 className="text-xl mt-5">10-klippkort junior</h1>
                <p className="text-left">
                  - Under 16 år räknas man som junior <br />- Kortet är inte
                  personligt, kan användas av flera juniorer <br />
                  - Kortet gäller 2 år från inköpsdatum <br />- Går inte att
                  förlänga
                </p>
                <h1 className="text-xl mt-5">25-klippkort</h1>
                <p className="text-left">
                  - Kortet är personligt <br />
                  - Kortet gäller 3 år från inköpsdatum <br />
                  - Går inte att förlänga <br />- Man kan inte föra över kort
                  till en annan person
                </p>
                <h1 className="text-xl mt-5">Halvårskort</h1>
                <p className="text-left">
                  - Kortet är personligt <br />
                  - Kortet gäller 6 månader från inköpsdatum <br />
                  - Går inte att förlänga <br />
                  - Man kan inte föra över kort till en annan person <br />-
                  Frysa kort kostar 200 kr (maxlängd för frysning: 3 månader)
                </p>
                <h1 className="text-xl mt-5">Helårskort</h1>
                <p className="text-left">
                  - Kortet är personligt
                  <br />
                  - Kortet gäller 12 månader från inköpsdatum
                  <br />
                  - Går inte att förlänga
                  <br />
                  - Man kan inte föra över kort till en annan person
                  <br />- Frysa kort kostar 200 kr (maxlängd för frysning: 6
                  månader)
                </p>
                <h1 className="text-xl mt-5">Autogiro</h1>
                <p className="text-left">
                  - Kortet är personligt <br />
                  - 3 månaders bindningstid <br />
                  - 1 månads uppsägningstid (kalendermånad) <br />- Svensk bank
                  och Svenskt id krävs för att teckna autogiro <br />
                  - Dragning sker månadsvis i förskott från angivet konto <br />
                  - Dragningen sker den 27 varje månad <br />
                  - Det är kundens ansvar: att tillräckligt med pengar finns på
                  kontot på förfallodagen att kontrollera att dragningen
                  genomförts enligt betalplan att vid utebliven betalning, se
                  till att månadsavgiften betalas att meddela eventuella
                  ändringar av bankkonto.nr. eller personuppgifter <br />
                  - Vid utebliven betalning blir man alltid kontakad.
                  Betalningen förskjuts vanligen till nästkommande
                  betalningstillfälle. Detta görs endast en gång. Vid upprepade
                  misslyckade dragningar är du tvungen att betala de misslyckade
                  betalningarna och administrativ avgift på 250kr <br />-
                  Uppsägning av autogiro ska alltid ske via Klätterdomen. <br />
                  - Uppsägning sker via kassan på Klätterdomen eller via
                  Klätterdomens mail: klatterdomengbg@gmail.com <br />
                  - Autogiro gäller tillsvidare med 1 kalendermånads
                  uppsägningstid. <br />
                  - Eventuella höjningar av pris meddelas till
                  autogiroinnehavare via mail 4 månader i förväg. <br />- Man
                  kan inte föra över kort till en annan person
                </p>
              </div>
            </div>

            <div
              tabIndex={0}
              className="collapse bg-neutral text-white focus:bg-white focus:text-neutral rounded-md w-[98%] max-w-[700px] mx-auto shadow-md mt-2"
            >
              <div className="collapse-title text-left text-xl">
                Avtalsvillkor
              </div>
              <div className="collapse-content">
                <h1 className="text-xl">1. Allmänt</h1>
                <p className="text-left">
                  Följande Allmänna avtalsvillkor gäller för de kunder som köper
                  träningskort på Klätterdomen. Träning sker i enlighet med
                  dessa villkor och de villkor som framgår av avtalet.
                  Klätterdomen äger rätt att ändra villkoren och eventuella
                  ändringar skall då meddelas via mail till kunden 30 dagar i
                  förväg. förutom ändringar på autogiropris - (se punkt 4)
                  förutom ändringar på öppettider och utbud - (se punkt 6)
                </p>
                <h1 className="text-xl mt-5">2. Träningskort</h1>
                <p className="text-left">
                  Ett träningskort köps till det pris som är gällande vid
                  köptillfället. Giltighetstiden framgår i avtalet och kan ej
                  förlängas. Ett träningskort kan inte föras över till en annan
                  medlem. Eventuellt kvarstående klipp på klippkort som passerat
                  utgångsdatum går ej att få tillbaka. Halvårskort kan max
                  frysas 3 månader. Helårskort kan max frysas 6 månader.
                </p>
                <h1 className="text-xl mt-5">3. Betalningsvillkor</h1>
                <p className="text-left">
                  Träningskortet betalas med kort eller via autogiro i förskott.
                </p>
                <h1 className="text-xl mt-5">
                  4. Autogirobetalning & Uppsägning
                </h1>
                <p className="text-left">
                  Dragning sker månadsvis i förskott från angivet konto,
                  dragningen sker den 27 varje månad. <br />
                  Det är kundens ansvar: <br />
                  - Att tillräckligt med pengar finns på kontot på
                  förfallodagen. <br />- Att kontrollera att dragningen
                  genomförts enligt betalplan. <br />
                  - Att vid utebliven betalning, se till att månadsavgiften
                  betalas. <br />- Att meddela eventuella ändringar av
                  bankkonto.nr. eller personuppgifter.
                </p>
                <p className="text-left mt-2">
                  Vid utebliven betalning blir man alltid kontaktad. Betalningen
                  förskjuts vanligen till nästkommande betalningstillfälle.
                  Detta görs endast en gång. Vid upprepade misslyckade
                  dragningar är du tvungen att betala de misslyckade
                  betalningarna och administrativ avgift på 250kr, 10 dagar från
                  den senaste misslyckade dragningen.
                </p>
                <p className="text-left mt-2">
                  Uppsägning av autogiro ska alltid ske via Klätterdomen.
                  Uppsägning sker via kassan på Klätterdomen eller via
                  Klätterdomens mail: klatterdomengbg@gmail.com Autogiro gäller
                  tillsvidare med 1 kalendermånads uppsägningstid.
                </p>
                <p className="text-left mt-2">
                  Eventuella höjningar av pris meddelas till autogiroinnehavare
                  via mail 4 månader i förväg.
                </p>
                <h1 className="text-xl mt-5">5. Ordnings & säkerhetsregler</h1>
                <p className="text-left">
                  Kunden förbinder sig att följa de säkerhetsföreskrifter och
                  förhållningsregler som finns på Klätterdomen. Klätterdomen har
                  rätt att stänga av kunder som inte följer Klätterdomens
                  förhållningsregler och säkerhetsföreskrifter.
                </p>
                <h1 className="text-xl mt-5">
                  6. Ändringar i öppettider & utbud
                </h1>
                <p className="text-left">
                  Klätterdomen äger rätt att göra ändringar i öppettider och
                  utbud. Ändringar meddelas via Klätterdomens hemsida, sociala
                  medier och på Klätterdomen.
                </p>
                <h1 className="text-xl mt-5">7. Frysning & förlängning</h1>
                <p className="text-left">
                  Läs fliken 'Medlemskaps föreskrifter'{" "}
                </p>
                <h1 className="text-xl mt-5">
                  8. Ansvar & ansvarsfriskrivning
                </h1>
                <p className="text-left">
                  All träning sker på egen risk. Klätterdomen ansvarar inte för
                  skada som åsamkats kunden p.g.a. olycksfall till följd av
                  annan kunds agerande eller underlåtenhet att följa
                  ordningsregler och säkerhetsföreskrifter. Klätterdomen
                  förbehåller sig rätten att avbryta träning som innebär fara
                  för kundens liv. Kunden har eget ansvar att se till att
                  uppsatta regler och säkerhetsföreskrifter är lästa och
                  förstådda. Varje kund ansvarar själv för att deras
                  hälsotillstånd är sådant att de utan risk kan utöva de
                  aktiviteter som de väljer i anläggningen. Klätterdomen
                  ansvarar inte för förluster p.g.a. stöld, inbrott eller annan
                  anledning, eller för skador på kundens tillhörigheter.
                  Klätterdomen ansvarar inte för avbrott i träningsmöjligheter
                  som beror på omständigheter som är utanför Klätterdomens
                  kontroll, såsom vattenskada, brandskada eller annan skada på
                  träningsanläggningen, strejk, lockout, naturkatastrof eller
                  myndighetsbeslut.
                </p>
                <h1 className="text-xl mt-5">
                  9. Behandling av personuppgifter
                </h1>
                <p className="text-left">
                  Läs Klätterdomens Personuppgiftspolicy nedan.
                </p>
              </div>
            </div>
            <div
              tabIndex={0}
              className="collapse bg-neutral text-white focus:bg-white focus:text-neutral rounded-md w-[98%] max-w-[700px] mx-auto shadow-md mt-2"
            >
              <div className="collapse-title text-left text-xl">
                Klätterdomens Personuppgiftspolicy{" "}
              </div>
              <div className="collapse-content">
                <p className="text-left">
                  Uppgifter om medlem behandlas i enlighet med
                  Dataskyddsförordningen (GDPR). Du kan direkt eller indirekt
                  komma att ge oss information om dig själv på ett antal olika
                  sätt, såsom när du tecknar ett medlemskap, när du väljer att
                  handla i vår kassa, när du kontaktar oss eller någon annan av
                  Klätterdomens tjänster där du lämnar personuppgifter. <br />
                  Detta kan vara:
                </p>
                <ul className="text-left list-disc">
                  <li className="ml-3">
                    Person- och kontaktinformation - namn, födelsedatum,
                    personnummer, faktura- och leveransadress, e-postadress,
                    mobiltelefonnummer, etc.
                  </li>
                  <li className="ml-3">
                    Betalningsinformation - fakturainformation, bankkontonummer,
                    etc.
                  </li>
                  <li className="ml-3">
                    Information om varor/tjänster - detaljer angående de
                    varor/tjänster du har köpt.
                  </li>
                  <li className="ml-3">
                    Historisk information - dina köp och din betalningshistorik.
                  </li>
                  <li className="ml-3">
                    Information om hur du interagerar med Klätterdomen - hur du
                    använder våra tjänster, hur du lämnade tjänsten.
                  </li>
                </ul>
                <p className="mt-3 text-left">
                  Informationen du ger oss, såväl som information om
                  varorna/tjänsterna är generellt sett nödvändig för att ingå
                  ett avtalsförhållande med oss, medan den övriga informationen
                  vi samlar in generellt sett är nödvändig för andra syften.
                </p>
                <p className="mt-3 text-left">
                  Barn under 16 år behöver målsmans samtycke för att bli
                  registrerade som medlemmar hos Klätterdomen
                </p>
                <h1 className="text-xl mt-5">
                  När hanterar vi dina personuppgifter?
                </h1>
                <ul className="text-left list-disc">
                  <li className="ml-3">Tecknande av träningskort</li>
                  <li className="ml-3">Medlemsregister</li>
                  <li className="ml-3">
                    Deltagande/Bokning på kurser (teknik, barn- och
                    ungdomsgrupper, topprep- och ledkurser)
                  </li>
                  <li className="ml-3">Topprep och Ledkort register</li>
                  <li className="ml-3">Fakturering</li>
                  <li className="ml-3">
                    Statistik för utveckling av Klätterdomen
                  </li>
                  <li className="ml-3">Incidentrapportering</li>
                </ul>
                <h1 className="text-xl mt-5">
                  Vilka kan ta del av din information?
                </h1>
                <p className="text-left">
                  Klätterdomen och Klätterdomens personal. <br />
                  Medarbetare till Klätterdomen har med olika behörigheter
                  tillgång till dina personuppgifter. De uppgifterna som
                  vidarebefordras till tredje part används endast för att vi
                  skall kunna tillhandahålla våra tjänster till dig. För de
                  personuppgifter som delas med tredje part gäller deras
                  dataskyddspolicy och personuppgiftshantering. <br />
                  Myndigheter, Klätterdomen kan komma att behöva lämna
                  information till myndigheter såsom polisen, skatteverket eller
                  andra myndigheter om vi är skyldiga att göra det enligt lag
                  eller om du har godkänt att vi gör det.
                </p>
                <h1 className="text-xl mt-5">
                  Vad vi INTE kommer att göra med din data
                </h1>
                <p className="text-left">
                  Vi kommer inte att sälja dina personuppgifter till tredje
                  part.
                </p>
                <h1 className="text-xl mt-5">
                  Hur länge sparar vi dina personuppgifter?
                </h1>
                <p className="text-left">
                  Dina uppgifter sparas så länge de är nödvändiga för oss att
                  utföra våra åtagande gentemot dig och så länge det krävs
                  enligt lagstadgande lagringstider.
                </p>
                <p className="mt-3">
                  Som registrerad medlem med träningskort sparas du så länge du
                  har gällande kort. Din information raderas efter 1 år av
                  inaktivitet.
                </p>
                <h1 className="text-xl mt-5">Dina Rättigheter</h1>
                <p className="text-left">
                  - Du har rätt att få tillgång till din data och begära en
                  kopia på de uppgifter vi tillhandahåller gällande dig. Kopian
                  är gratis att begära.
                </p>
                <p className="text-left">
                  - Du har rätt att korrigera felaktiga eller icke-komplett
                  information om dig själv
                </p>
                <p className="text-left">
                  - Du har rätt att bli raderad. Du har rätt att vända dig till
                  Klätterdomen och be att alla dina uppgifter raderas - om inte
                  uppgifterna är nödvändiga för att fullfölja avtal eller andra
                  lagstadgade åtaganden.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-md w-[98%] max-w-[700px] mx-auto shadow-md bg-white pt-6 pb-10">
            <h1 className="text-xl text-neutral">
              Om du har andra frågor så ber vi dig kontakta oss
            </h1>
            <p className="text-xl my-5 text-neutral">klatterdomengbg@gmail.com</p>
              <a
                href="mailto:klatterdomengbg@gmail.com"
                className="mail-btn text-xl text-neutral"
              >
                Maila oss
              </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
