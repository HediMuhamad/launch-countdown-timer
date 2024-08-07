"use client";

import { useCountDown } from "@/hooks/useCountDown";
import { DateUtils } from "@/utils/date-utils";
import { useMemo } from "react";
import { CountDownUnit } from "./unit";

const CountDown: React.FC = () => {
  const now = useMemo(() => new DateUtils().toDate(), []);
  const date = useMemo(() => new DateUtils().add(14, "day").toDate(), []);
  const changeableDate = useCountDown(date);

  const diffDate = useMemo(
    () => new DateUtils(changeableDate),
    [changeableDate]
  );
  return (
    <div className="flex gap-12">
      <CountDownUnit label="days" value={diffDate.getDiff("day", now)} />
      <CountDownUnit label="hours" value={diffDate.getDiff("hour", now)} />
      <CountDownUnit label="minutes" value={diffDate.getDiff("minute", now)} />
      <CountDownUnit label="seconds" value={diffDate.getDiff("second", now)} />
    </div>
  );
};

export default CountDown;
