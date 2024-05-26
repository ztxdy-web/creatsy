const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div>
          <h1 className="mb-5 text-5xl font-bold">
            Platform Pembuat Website dengan Integrasi Pemasaran Online
            Terlengkap
          </h1>
          <h2 className="mb-5 text-3xl">
            Kami siap memperluas jejak digital situs web bisnis Anda.
          </h2>
          <button className="btn btn-accent rounded-full text-3xl text-white font-semibold px-10">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
