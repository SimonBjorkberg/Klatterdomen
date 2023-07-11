const Contact = () => {
  return (
    <div className="contact min-h-screen bg-base-200">
      <div className="hero pt-24">
        <div className="hero-content text-center">
          <div className="">
            <h1 className="text-5xl font-bold">Kontakt</h1>
            <p>klatterdomengbg@gmail.com</p>
            <p className="pt-5 pb-5">
              <span className="font-bold text-2xl">Ta sig hit</span> <br />
            </p>
            <div className="text-left mx-auto bg-white p-4 rounded-xl">
              <h1 className="font-bold text-xl text-center">Kollektivt</h1>
              <div className="text-left mt-2">
                <h1 className="font-bold">Från Centralen:</h1>
                <p>
                  - Spårvagn 7 & 11 mot Kortedala <br />
                  - Buss 58 mot Bergsjön <br />
                  - Restid: 11 min <br />
                </p>
              </div>
              <div className="text-left mt-5">
                <h1 className="font-bold">Från Korsvägen:</h1>
                <p>
                  - Spårvagn 6 mot Kortedala <br />
                  - Restid: 19 min
                </p>
              </div>
              <div className="text-left mt-5">
                <h1 className="font-bold">Från Partille Centrum:</h1>
                <p>
                  - Buss 519 mot Heden <br />
                  - Restid: 11 min
                </p>
              </div>
            </div>
            <div className="text-left mx-auto mt-4 bg-white p-4 rounded-xl">
              <h1 className="font-bold text-xl text-center">Med bil</h1>
              <div className="text-left mt-2">
                <p>
                  Klätterdomen ligger i Kvibergs Gamla Regemente. <br />
                  Kör in på kasernen, sedan kör upp på övre kasernplan. <br />
                  I första huset till vänster ligger Klätterdomen. <br />
                  På övre plan finns en stor parkering.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
