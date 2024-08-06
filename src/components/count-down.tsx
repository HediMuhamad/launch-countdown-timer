"use client";

import { useCountDown } from "@/hooks/useCountDown";
import { DateUtils } from "@/utils/date-utils";
import { useRef } from "react";

const CountDown = () => {
  const date = useRef(new DateUtils().add(9, "day").toDate())?.current;
  const changeableDate = useCountDown(date);

  const diffDate = new DateUtils(changeableDate);

  return (
    <div>
      <h1>Countdown</h1>
      <div>
        <span>{diffDate?.getDiff("day")}</span> days
      </div>
      <div>
        <span>{diffDate?.getDiff("hour")}</span> hours
      </div>
      <div>
        <span>{diffDate?.getDiff("minute")}</span> minutes
      </div>
      <div>
        <span>{diffDate?.getDiff("second")}</span> seconds
      </div>
    </div>
  );
};

export default CountDown;
