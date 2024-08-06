"use client";

import { useCountDown } from "@/hooks/useCountDown";
import { DateUtils } from "@/utils/date-utils";
import { useRef } from "react";
import styles from "./style.module.css";

const CountDown = () => {
  const date = useRef(new DateUtils().add(9, "day").toDate())?.current;
  const changeableDate = useCountDown(date);

  const diffDate = new DateUtils(changeableDate);

  return (
    <div className={styles["count-down__container"]}>
      <CountDownUnit label="days" value={diffDate.getDiff("day")} />
      <CountDownUnit label="hours" value={diffDate.getDiff("hour")} />
      <CountDownUnit label="minutes" value={diffDate.getDiff("minute")} />
      <CountDownUnit label="seconds" value={diffDate.getDiff("second")} />
    </div>
  );
};

const CountDownUnit = ({ value, label }: { value: number; label: string }) => {
  return (
    <div className={styles["count-down__item"]}>
      <span className={styles["count-down__item__value"]}>
        {`${value > 9 ? "" : "0"}` + value}
      </span>
      <span className={styles["count-down__item__label"]}>{label}</span>
    </div>
  );
};

export default CountDown;
