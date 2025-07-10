import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import StatsGrid from "./components/StatsGrid";
import Alerts from "./components/Alerts";
import TrendWeather from "./components/TrendWeather";
import InventoryTable from "./components/InventoryTable";
import AIRecommendations from "./components/AIRecommendations";
import Footer from "./components/Footer";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Navbar />
      <HeroSection />
      <StatsGrid />
      <Alerts />
      <TrendWeather />
      <InventoryTable />
      <AIRecommendations />
      <Footer />
    </div>
  );
};

export default Dashboard;
