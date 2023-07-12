const Contact = () => {
  return (
    <div className="contact min-h-screen bg-base-200">
      <div className="hero pt-24">
        <div className="hero-content text-center">
          <div>
            <h1 className="text-5xl">Kontakt</h1>
            <p className="py-2">
              <span className="text-2xl">Ta sig hit</span> <br />
            </p>
            <div className="text-left mx-auto bg-white p-4 rounded-lg">
              <h1 className="font-bold text-xl text-center">Kollektivt</h1>
              <div className="text-left mt-2">
                <h1 className="text-lg">Från Centralen:</h1>
                <p>
                  - Spårvagn 7 & 11 mot Kortedala <br />
                  - Buss 58 mot Bergsjön <br />
                  - Restid: 11 min <br />
                </p>
              </div>
              <div className="text-left mt-5">
                <h1 className="text-lg">Från Korsvägen:</h1>
                <p>
                  - Spårvagn 6 mot Kortedala <br />
                  - Restid: 19 min
                </p>
              </div>
              <div className="text-left mt-5">
                <h1 className="text-lg">Från Partille Centrum:</h1>
                <p>
                  - Buss 519 mot Heden <br />
                  - Restid: 11 min
                </p>
              </div>
            </div>
            <div className="text-left mx-auto mt-4 bg-white p-4 rounded-lg">
              <h1 className="text-xl text-center font-bold">Med bil</h1>
              <div className="text-left mt-2">
                <p>
                  Klätterdomen ligger i Kvibergs Gamla Regemente. <br />
                  Kör in på kasernen, sedan kör upp på övre kasernplan. <br />
                  I första huset till vänster ligger Klätterdomen. <br />
                  På övre plan finns en stor parkering.
                </p>
              </div>
            </div>
            <h1 className="text-2xl mt-4">klatterdomengbg@gmail.com</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
