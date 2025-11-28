export default function typeOfWord() {
    return (
      <>
        <section
          className="relative w-full h-screen flex flex-col justify-center items-center text-center overflow-hidden mt-16"
          style={{
            backgroundImage: "url('https://lh3.googleusercontent.com/sitesv/AAzXCkfg--hpYTTUOYLvX0gFt6DbYWsVne_qbSaNWbBx_N7Gc8s53ObJX2OHcTbvi6DzLSJ5pxyhcvI_khWRYG9GRrZj_306ck-prhJ51Y3RVN2-ooIHAv104veStLUtsmfzN52p1Ej4i74XJjx6Vd9KyNLcEwZfAuuH0GGGsB7AvuueeApmH_kcqsU8lcY=w16383')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/20" />
  
          <div className="relative px-6 md:px-12 z-10">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 text-white drop-shadow-2xl">
              ประเภทของคำ
            </h1>
            <div className="w-48 md:w-72 h-2 bg-green-700 mx-auto mb-4 rounded-full" />
          </div>
  
          <div className="absolute bottom-10 animate-bounce text-white z-10">
            <div className="flex flex-col items-center">
              <span className="text-sm md:text-base mb-2">เลื่อนลงเพื่อดูเพิ่มเติม</span>
              <div className="text-3xl">↓</div>
            </div>
          </div>
        </section>
      </>
    );
  }
  