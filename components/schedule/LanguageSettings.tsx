import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { languageNames } from "../../helpers/helpers";
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
  return (
    <div className="w-1/2 flex flex-col gap-2">
      <Label className="text-sm font-bold">Language</Label>

      <Select value={language} onValueChange={handleLanguageChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Выберите язык" />
        </SelectTrigger>
        <SelectContent>
          {Object.keys(locales).map((key) => (
            <SelectItem key={key} value={key}>
              {languageNames[key]}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSettings;
