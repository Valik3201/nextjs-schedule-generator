"use client";

import { useLocale } from "../providers/LocaleProvider";
import { ArrowRight, Star } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Pattern from "../patterns/Pattern";

export default function Hero() {
  const { dictionary } = useLocale();
  const { hero: d } = dictionary;

  const title = d.title
    .replace("{colorStart}", '<span class="text-emerald">')
    .replace("{br}", "<br />")
    .replace("{colorEnd}", "</span>");

  return (
    <div className="container md:px-20 lg:px-52">
      <div className="relative flex flex-col justify-center gap-8 h-svh">
        <Pattern />

        <h1
          className="font-serif text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-extrabold tracking-tight text-center"
          dangerouslySetInnerHTML={{ __html: title }}
        />

        <p className="text-center text-xs md:text-sm">{d.description}</p>

        <p className="text-center text-xs md:text-sm">{d.example}</p>

        <div className="flex gap-2 justify-center">
          <Link className={buttonVariants()} href={"#setup"}>
            {d.getStartedButton}
            <ArrowRight className="ms-2 h-4 w-4" />
          </Link>

          <Link
            className={buttonVariants({ variant: "outline" })}
            href={"https://github.com/Valik3201/nextjs-schedule-generator"}
          >
            {d.starButton}
            <Star className="ms-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
