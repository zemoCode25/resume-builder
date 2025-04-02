import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Calendar as CalendarIcon } from "lucide-react";
import { format, getMonth, getYear, setMonth, setYear } from "date-fns";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DatePickerProps {
  label?: string;
  startYear?: number;
  endYear?: number;
  formType?: string;
  updateResumeDate?: (date: Date | undefined) => void;
}

export function DatePicker({
  label = "Select a date",
  startYear = new Date().getFullYear() - 100,
  endYear = new Date().getFullYear() + 100,
  updateResumeDate = () => {},
}: DatePickerProps) {
  const [date, setDate] = useState<Date>(new Date());

  useEffect(() => {
    updateResumeDate(date);
  }, [date, updateResumeDate]);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const years = Array.from(
    { length: endYear - startYear + 1 },
    (_, i) => startYear + i
  );

  function handleMonthChange(month: string) {
    const monthIndex = months.indexOf(month);
    const updatedDateByMonth = setMonth(date, monthIndex); // Creates new date object with a modified month
    setDate(updatedDateByMonth);
  }

  function handleYearChange(year: string) {
    const updatedDateByYear = setYear(date, Number(year)); // Creates new date object with a modified year
    setDate(updatedDateByYear);
  }

  function handleSelectedDate(selectedDate: Date | undefined) {
    if (selectedDate) {
      setDate(selectedDate);
    }
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="w-full">
          {" "}
          {/* This wrapper ensures the Button isn't directly referenced */}
          <Button
            type="button"
            variant="outline"
            className="cursor-pointer flex justify-baseline gap-2 w-full"
          >
            <CalendarIcon className="h-4 w-4" />
            {date ? format(date, "PPP") : label}
          </Button>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <div className="flex justify-between w-full p-3 gap-2">
          <Select
            onValueChange={handleMonthChange}
            value={months[getMonth(date)]}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Month" />
            </SelectTrigger>
            <SelectContent>
              {months.map((month, i) => (
                <SelectItem className="text-sm" value={month} key={i}>
                  {month}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select
            onValueChange={handleYearChange}
            value={String(getYear(date))}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              {years.map((year, i) => (
                <SelectItem className="text-sm" value={String(year)} key={i}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleSelectedDate}
          initialFocus
          onMonthChange={setDate}
          month={date}
        />
      </PopoverContent>
    </Popover>
  );
}
