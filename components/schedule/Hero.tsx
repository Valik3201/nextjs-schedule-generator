import { ArrowRight, Star } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Pattern from "../patterns/Pattern";

export default function Hero() {
  return (
    <div className="container md:px-20 lg:px-52">
      <div className="relative flex flex-col justify-center gap-8 h-svh">
        <Pattern />

        <h1 className="scroll-m-20 text-xl lg:text-3xl font-extrabold tracking-tight text-center">
          <span className="font-light">(custom) </span>
          Schedule Generator
        </h1>

        <h2 className="font-serif text-3xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-center">
          Never worry about{" "}
          <span className="text-emerald">
            manually <br />
            selecting dates
          </span>{" "}
          again <br />
        </h2>

        <p>
          This application is a utility for creating and visualizing structured
          data based on user-selected date ranges and sets of weekdays. It
          allows users to customize data generation parameters and view results
          in a convenient format, where each entry represents a specific time
          period starting from a specified initial date and includes the
          selected weekdays for each of these periods.
        </p>

        <p>
          For example, if a user selects a date range and chooses Monday and
          Wednesday, the schedule will display week numbers and the
          corresponding dates for these Mondays and Wednesdays.
        </p>

        <div className="flex gap-2 justify-center">
          <Link className={buttonVariants()} href={"#setup"}>
            Get Started
            <ArrowRight className="ms-2 h-4 w-4" />
          </Link>

          <Link
            className={buttonVariants({ variant: "outline" })}
            href={"https://github.com/Valik3201/nextjs-schedule-generator"}
          >
            Give a project star
            <Star className="ms-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
