import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";
import Description from "./components/Description";
import Navbar from "./components/Navbar";
import PoomThaiPage from "./components/PoomThaiPage"; // สร้างไฟล์นี้
// import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Description />
              {/* <Footer /> */}
            </>
          }
        />
        <Route path="/poomthai" element={<PoomThaiPage />} />
      </Routes>
    </Router>
  );
}
