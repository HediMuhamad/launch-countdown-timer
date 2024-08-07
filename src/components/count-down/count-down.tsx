"use client";

import { useCountDown } from "@/hooks/useCountDown";
import { cn } from "@/utils/cn";
import { DateUtils } from "@/utils/date-utils";
import { useEffect, useMemo, useState } from "react";

const ANIMATION_PERIOD = 250;

const CountDown: React.FC = () => {
  const now = useMemo(() => new DateUtils().toDate(), []);
  const date = useMemo(() => new DateUtils().add(9, "day").toDate(), []);
  const changeableDate = useCountDown(date);

  const diffDate = useMemo(
    () => new DateUtils(changeableDate),
    [changeableDate]
  );
  const secondsDiff = diffDate.getDiff("second", now);

  return (
    <div className="flex gap-4">
      <CountDownUnit value={secondsDiff} />
    </div>
  );
};

interface CountDownUnitProps {
  value: number;
}

const CountDownUnit: React.FC<CountDownUnitProps> = ({ value }) => {
  const formattedValue = value.toString().padStart(2, "0");

  return (
    <div className="flex flex-col">
      <CountDownUnitPart value={formattedValue} type="top" />
      <CountDownUnitPart value={formattedValue} type="middle" />
      <CountDownUnitPart value={formattedValue} type="bottom" />
    </div>
  );
};

interface CountDownUnitPartProps {
  value: string;
  type: "top" | "middle" | "bottom";
}

const CountDownUnitPart: React.FC<CountDownUnitPartProps> = ({
  value: initialValue,
  type,
}) => {
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        setValue(initialValue);
        setShouldAnimate(true);
      },
      type === "top"
        ? 0
        : type === "middle"
        ? ANIMATION_PERIOD / 2
        : ANIMATION_PERIOD
    );

    const animationTimeout = setTimeout(() => {
      setShouldAnimate(false);
    }, ANIMATION_PERIOD);

    return () => {
      clearTimeout(timeout);
      clearTimeout(animationTimeout);
    };
  }, [initialValue, type]);

  return (
    <div
      className={cn(
        "h-[75px] overflow-hidden",
        type === "middle" && "absolute transition-all origin-bottom",
        shouldAnimate && "z-10 duration-500"
      )}
      style={{
        transform:
          type === "middle"
            ? `rotateX(${shouldAnimate ? "-180deg" : "0deg"}) ${
                value !== initialValue ? "scale(1, -1)" : "scale(1)"
              }`
            : undefined,
      }}
    >
      <div
        className={cn(
          "bg-blue-950 text-9xl w-52 h-[150px] text-center py-5 text-pink-900",
          type === "bottom" && "-translate-y-1/2 saturate-200"
        )}
      >
        {value}
      </div>
    </div>
  );
};

export default CountDown;
