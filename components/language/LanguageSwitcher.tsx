"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n, type Locale } from "@/i18n-config";
import { Check, ChevronDown } from "lucide-react";
import { useLocale } from "../providers/LocaleProvider";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);

  const { locale: value } = useLocale();

  const pathName = usePathname();

  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const languages: Record<Locale, string> = {
    en: "English",
    pl: "Polish",
    ru: "Russian",
    ua: "Ukrainian",
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-10 md:w-32 justify-between ps-2.5 md:ps-4"
        >
          <span className="md:hidden uppercase">{value}</span>
          <span className="hidden md:block">{languages[value as Locale]}</span>
          <ChevronDown className="hidden md:block ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-32 p-0">
        <Command>
          <CommandList>
            <CommandGroup>
              {i18n.locales.map((lang) => (
                <CommandItem key={lang} value={lang} className="w-full">
                  <Link
                    href={redirectedPathName(lang)}
                    className="w-full flex items-center"
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === lang ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {languages[lang]}
                  </Link>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
