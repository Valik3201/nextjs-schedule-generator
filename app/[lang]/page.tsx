import Hero from "@/components/schedule/Hero";
import ScheduleGenerator from "../../components/schedule/ScheduleGenerator";
import AppBar from "@/components/appbar/AppBar";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <AppBar />
      <Hero />
      <ScheduleGenerator />
      <Footer />
    </>
  );
}
