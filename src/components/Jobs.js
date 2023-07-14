const Jobs = () => {

  return (
    <div className="jobs">
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Personal sökes</h1>
            <p className="py-10">
            <span className="text-xl font-bold">Vi söker extra personal</span> <br /> Viktigt att du som söker jobb på Klätterdomen
          brinner för service och vill ta hand om våra kunder på bästa sätt.
          Maila oss lite information om dig själv och varför just du skulle
          passa in i vårt team på Klätterdomen.
            </p>
            <a href="mailto:klatterdomengbg@gmail.com" className="text-lg py-2 px-3 rounded-md hover:bg-neutral-focus bg-neutral text-white">Maila oss</a>
            <p className="text-xl mt-2">klatterdomengbg@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;