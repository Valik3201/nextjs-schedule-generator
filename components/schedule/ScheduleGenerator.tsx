"use client";

import GeneratedTable from "./GeneratedTable";
import SchedulePattern from "../patterns/SchedulePattern";
import ScheduleCard from "./ScheduleCard";

export default function ScheduleGenerator() {
  return (
    <div className="relative container md:px-20 lg:px-52">
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-16 min-h-svh pt-24 pb-16"
        id="setup"
      >
        <ScheduleCard />
        <GeneratedTable />
      </div>

      <SchedulePattern />
    </div>
  );
}
