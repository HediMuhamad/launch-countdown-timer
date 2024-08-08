"use client";

import { useCountDown } from "@/hooks/useCountDown";
import { DateUtils } from "@/utils/date-utils";
import { useMemo } from "react";
import { CountDownSegment } from "./segment";
import styles from "./style.module.css";

const CountDown: React.FC = () => {
  const now = useMemo(() => new DateUtils().toDate(), []);
  const date = useMemo(() => new DateUtils().add(14, "day").toDate(), []);
  const changeableDate = useCountDown(date);

  const diffDate = useMemo(
    () => new DateUtils(changeableDate),
    [changeableDate]
  );
  return (
    <div className={styles["count-down"]}>
      <CountDownSegment label="days" value={diffDate.getDiff("day", now)} />
      <CountDownSegment label="hours" value={diffDate.getDiff("hour", now)} />
      <CountDownSegment
        label="minutes"
        value={diffDate.getDiff("minute", now)}
      />
      <CountDownSegment
        label="seconds"
        value={diffDate.getDiff("second", now)}
      />
    </div>
  );
};

export default CountDown;
