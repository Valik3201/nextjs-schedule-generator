import { getYear } from "date-fns";
import Link from "next/link";
import { Button } from "../ui/button";
import BuyMeACoffeeIcon from "../icons/BuyMeACoffeeIcon";

export default function Footer() {
  return (
    <footer className="py-8 md:px-20 lg:px-52">
      <div className="container w-full border-t pt-8">
        <div className="grid grid-cols-3 items-center gap-2">
          <p className="text-sm text-secondary-foreground font-medium">
            Made with ❤ by{" "}
            <Link
              href="https://github.com/Valik3201"
              className="font-bold hover:underline"
            >
              Valik
            </Link>
          </p>

          <Button variant={"outline"} asChild className="w-fit mx-auto">
            <Link href="https://www.buymeacoffee.com/valik3201">
              <BuyMeACoffeeIcon />
              Buy me a coffee
            </Link>
          </Button>

          <p className="text-sm text-secondary-foreground font-medium text-right">
            © {getYear(new Date())}
          </p>
        </div>
      </div>
    </footer>
  );
}
