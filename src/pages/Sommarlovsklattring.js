const Sommarlov = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center pt-[100px] 2xl:pt-0">
      <div className="max-w-lg p-8 bg-white rounded-lg shadow-lg text-left">
        <h1 className="text-2xl font-bold mb-4">
          Sommarklättring för Barn & Ungdommar
        </h1>
        <p>Snart drar Klätterdomens Sommarklättring igång!</p>
        <ul className="mt-4">
          <li>Vecka: 25, 26, 27</li>
          <li>Tisdag, Onsdag & Torsdag</li>
          <li>Tid: kl 11:30 - 14:00</li>
          <li>Ålder: 7 - 15år</li>
        </ul>
        <p className="mt-4">
          Priset inkluderar all nödvändig utrustning.
          Aktiviteterna kommer att innefatta klättring på höga väggar med sele
          och rep, samt bouldering på lägre väggar med tjockmattor under. Allt
          kommer att genomföras under en instruktörs ledning.
        </p>
        <p className="mt-4">
          Det är bra att ha med sig en vattenflaska och något litet extra att
          äta, som till exempel en frukt. Lunchen ingår och består av korv med
          bröd.
        </p>
        <p className="mt-4">
          Vänligen skicka ett mail till{" "}
          <span className="font-bold">klatterdomengbg@gmail.com</span> om ni
          önskar att anmäla er eller har några frågor. Vi behöver information om
          vilka dagar ni planerar att delta, samt namn och ålder på de
          barn/ungdomar ni vill anmäla. Om det finns barn med allergier eller
          behov av specialkost, ber vi er att kontakta oss i förväg så att vi
          kan hantera det.
        </p>
        <p className="mt-4">Pris: 250 kr/person per dag.</p>
        <p className="mt-4">Hoppas vi ses i sommar!</p>
      </div>
    </div>
  );
};
export default Sommarlov;
