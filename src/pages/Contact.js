const Contact = () => {
  return (
    <div className="contact">
      <div className="hero pt-28">
        <div className="hero-content text-center">
          <div className="w-[800px]">
            <h1 className="text-5xl font-bold">Kontakt</h1>
            <p className="pt-10 pb-5">
              <span className="font-bold text-2xl">Ta sig hit</span> <br />
            </p>
            <div className="text-left w-1/2 mx-auto bg-base-200 p-4 rounded-xl">
              <h1 className="font-bold text-xl text-center">Kollektivt</h1>
              <div className="text-left mt-2">
                <h1 className="font-bold">Från Centralen:</h1>
                <p>
                  Spårvagn 7 & 11 mot Kortedala <br />
                  Buss 58 mot Bergsjön <br />
                  Restid: 11 min <br />
                </p>
              </div>
              <div className="text-left mt-5">
                <h1 className="font-bold">Från Korsvägen:</h1>
                <p>
                  Spårvagn 7 & 11 mot Kortedala <br />
                  Buss 58 mot Bergsjön <br />
                  Restid: 11 min <br />
                </p>
              </div>
              <div className="text-left mt-5">
                <h1 className="font-bold">Från Partille Centrum:</h1>
                <p>
                  Spårvagn 7 & 11 mot Kortedala <br />
                  Buss 58 mot Bergsjön <br />
                  Restid: 11 min <br />
                </p>
              </div>
            </div>
            <div className="text-left w-1/2 mx-auto mt-4 bg-base-200 p-4 rounded-xl">
              <h1 className="font-bold text-xl text-center">Med bil</h1>
              <div className="text-left mt-2">
                <p>
                  Spårvagn 7 & 11 mot Kortedala <br />
                  Buss 58 mot Bergsjön <br />
                  Restid: 11 min <br />
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
