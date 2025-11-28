export default function Banner() {
  return (
    <section
      className="relative w-full h-screen flex flex-col justify-center items-center text-center overflow-hidden"
      style={{
        backgroundImage: "url('https://i.pinimg.com/1200x/76/39/ac/7639acef8f2153030eead43160414483.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-white/30 backdrop-sm" />

      <div className="relative px-6 md:px-12">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 text-gray-900 drop-shadow-lg">
          ไทยภูมิรู้
        </h1>
        <div className="w-48 md:w-72 h-2 bg-green-700 mx-auto mb-4 rounded-full" />
        <p className="text-lg md:text-2xl text-gray-800 tracking-wide">
          thai poom ru
        </p>
      </div>

      <div className="absolute bottom-10 animate-bounce text-gray-700">
        <span className="text-sm md:text-base">เลื่อนลงเพื่อดูเพิ่มเติม</span>
      </div>
    </section>
  );
}
