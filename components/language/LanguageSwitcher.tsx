"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n, type Locale } from "@/i18n-config";
import { Check, ChevronDown } from "lucide-react";
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

const languages: Record<Locale, string> = {
  en: "English",
  pl: "Polish",
  ru: "Russian",
  ua: "Ukrainian",
};

const LanguageSwitcher: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<Locale | "">("");

  const pathName = usePathname();

  useEffect(() => {
    if (pathName) {
      const segments = pathName.split("/");
      const locale = segments[1] as Locale;
      if (i18n.locales.includes(locale)) {
        setValue(locale);
      } else {
        setValue(i18n.defaultLocale);
      }
    }
  }, [pathName]);

  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-36 justify-between pl-6"
        >
          {languages[value as Locale] || ""}
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-36 p-0">
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
};

export default LanguageSwitcher;
