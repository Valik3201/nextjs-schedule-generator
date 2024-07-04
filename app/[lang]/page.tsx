import { SettingsProvider } from "@/components/providers/SettingsProvider";
import { ScheduleProvider } from "@/components/providers/ScheduleProvider";
import AppBar from "@/components/appbar/AppBar";
import Hero from "@/components/hero/Hero";
import ScheduleGenerator from "@/components/schedule/ScheduleGenerator";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <AppBar />
      <Hero />

      <SettingsProvider>
        <ScheduleProvider>
          <ScheduleGenerator />
        </ScheduleProvider>
      </SettingsProvider>

      <Footer />
    </>
  );
}
