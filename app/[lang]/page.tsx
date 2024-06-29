import Hero from "@/components/schedule/Hero";
import ScheduleGenerator from "../../components/schedule/ScheduleGenerator";
import AppBar from "@/components/appbar/AppBar";

export default function Home() {
  return (
    <>
      <AppBar />
      <Hero />
      <ScheduleGenerator />
    </>
  );
}
