import Footer from "../components/landing-page/footer/Footer";
import Hero from "../components/landing-page/hero";
import TrendingCoinsTable from "../components/landing-page/hot-coins/hot-coins";
import Navbar from "../components/landing-page/nav-bar/navbar";
// import Platform from "../components/landing-page/platform/Platform";
import StartRow from "../components/landing-page/start-now/start-now";
import StartToday from "../components/landing-page/start-today/start-today";
import Brag from "../components/landing-page/why-us/Brag";

export default function Home() {
  return (
    <div className="bg-bg">
      <Navbar />
      <Hero />
      <TrendingCoinsTable />
      <StartToday />
      {/* <Platform /> */}
      <Brag />
      <StartRow />
      <Footer />
    </div>
  );
}
