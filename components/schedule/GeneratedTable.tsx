import { useLocale } from "../providers/LocaleProvider";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { GeneratedDate } from "../../types/types";
import { Trash2 } from "lucide-react";

interface GeneratedTableProps {
  generatedDates: GeneratedDate[];
  onDelete: (index: number) => void;
}

const GeneratedTable: React.FC<GeneratedTableProps> = ({
  generatedDates,
  onDelete,
}) => {
  const {
    setup: { period, dates },
  } = useLocale().dictionary;

  return (
    <div className="rounded-md border shadow-sm overflow-hidden bg-background h-fit">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center w-[10%]">{period}</TableHead>
            <TableHead colSpan={2} className="text-center w-[90%]">
              {dates}
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {generatedDates.map(({ period, dates }, index) => (
            <TableRow key={index} className="capitalize">
              <TableCell className="text-center w-[10%]">{period}</TableCell>
              <TableCell className="w-[80%]">{dates}</TableCell>
              <TableCell className="text-center w-[10%]">
                <button onClick={() => onDelete(index)}>
                  <Trash2 className="h-4 w-4 text-destructive" />
                  <span className="sr-only">Delete</span>
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default GeneratedTable;
