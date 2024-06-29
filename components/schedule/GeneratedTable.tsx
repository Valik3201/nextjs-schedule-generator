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

interface GeneratedTableProps {
  generatedDates: GeneratedDate[];
}

const GeneratedTable: React.FC<GeneratedTableProps> = ({ generatedDates }) => {
  const {
    setup: { period, dates },
  } = useLocale().dictionary;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>{period}</TableHead>
          <TableHead>{dates}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {generatedDates.map(({ period, dates }, index) => (
          <TableRow key={index} className="capitalize">
            <TableCell>{period}</TableCell>
            <TableCell>{dates}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default GeneratedTable;
