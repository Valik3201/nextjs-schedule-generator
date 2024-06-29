import LanguageSwitcher from "../language/LanguageSwitcher";
import { FileSpreadsheet } from "lucide-react";

export default function AppBar() {
  return (
    <header className="fixed top-0 left-auto w-full mt-4 z-50">
      <div className="container md:px-20 lg:px-52 w-full">
        <div className="flex justify-between items-center px-4 py-3 w-full bg-white/40 backdrop-filter backdrop-blur-lg rounded-full border shadow-sm">
          <div className="flex items-center gap-1 pl-4">
            <FileSpreadsheet />
            <h2 className="scroll-m-20 text-md font-bold tracking-tight text-center">
              Schedule Generator
            </h2>
          </div>

          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
