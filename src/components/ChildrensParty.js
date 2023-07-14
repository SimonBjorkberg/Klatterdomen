const Barnkalas = () => {
  return (
    <div className="barnkalas">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-vector/watercolor-birthday-background-with-empty-space_52683-42227.jpg?w=2000)",
        }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center bg-red-50 rounded-lg">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl text-neutral">
              Barnkalas på Klätterdomen
              <hr className="bg-red-200 py-[0.5px] mx-16 border-none" />
            </h1>
            <div>
              <p className="text-left text-neutral">
                - Tid: Totalt ca. 1,5 timma <br /> - 1 timma: repklättring med
                instruktör. <br /> - 30 min: korv med bröd (2
                st), saft och glass. <br /> - Alla barn får klättra väldigt
                mycket, <br /> oavsett hur många barn som kommer på kalaset. <br /> -
                Från 6 år Minst: 5st Pris: 290 kr/person skor och sele ingår i
                priset.
              </p>
            </div>
            <div className="mt-2 text-neutral">
              <h1 className="text-2xl">Att tänka på:</h1>
              <p className="text-left">
                - Inte klänning eller kjol (detta är för att de ska ha sele på
                sig) <br /> - Medtag av ballonger är inte tillåtet. <br />{" "}
                Levande ljus får inte användas.
                <br /> - Presentpapper och dylikt ska tas med hem och inte
                slängas hos oss.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Barnkalas;
