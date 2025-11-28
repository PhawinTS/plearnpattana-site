import Banner from "./components/Banner";
import Description from "./components/Description";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="w-screen min-h-screen font-serif overflow-x-hidden m-0 p-0">
      <Navbar />
      <Banner />
      <Description />
      {/* <Footer /> */}
    </div>
  );
}
