import { useLocale } from "../providers/LocaleProvider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CustomLocale } from "../../types/types";
import { Label } from "@/components/ui/label";

interface LanguageSettingsProps {
  language: string;
  handleLanguageChange: (value: string) => void;
  locales: Record<string, CustomLocale>;
}

const LanguageSettings: React.FC<LanguageSettingsProps> = ({
  language,
  handleLanguageChange,
  locales,
}) => {
  const { dictionary } = useLocale();
  const { language: langLabel, selectLanguage, languages } = dictionary.setup;

  return (
    <div className="w-1/2 flex flex-col gap-2">
      <Label className="text-sm font-bold">{langLabel}</Label>

      <Select value={language} onValueChange={handleLanguageChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={selectLanguage} />
        </SelectTrigger>
        <SelectContent>
          {Object.keys(locales).map((key) => (
            <SelectItem key={key} value={key}>
              {languages[key]}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSettings;
