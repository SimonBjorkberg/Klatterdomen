const Shop = () => {
  return (
    <div className="shop">
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
      </section>
    </div>
  );
};

export default Shop;
