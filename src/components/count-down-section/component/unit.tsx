"use client";

import { cn } from "@/utils/cn";
import { useEffect, useRef } from "react";
import { formatValue, useIsMounted } from "./helpers";
import {
  ANIMATION_PERIOD,
  COMMON_UNIT_CONTAINER_STYLE,
  COMMON_UNIT_TEXT_STYLE,
  COUNT_DOWN_MIDDLE_UNIT_CONTAINER_STYLE,
} from "./styles";

interface CountDownUnitProps {
  value: number;
  label: string;
}

export const CountDownUnit: React.FC<CountDownUnitProps> = ({
  value,
  label,
}) => {
  const prevValue = useRef(value);
  useEffect(() => {
    prevValue.current = value;
  });

  return (
    <div className="flex flex-col gap-8 justify-center items-center">
      <div className="flex flex-col">
        <CountDownTopUnit value={formatValue(value)} />
        <CountDownMiddleTopUnit
          key={"mid-top-" + value}
          value={formatValue(value)}
        />
        <CountDownMiddleBottomUnit
          key={"mid-bottom-" + value}
          value={formatValue(value)}
        />
        <CountDownBottomUnit value={formatValue(prevValue?.current)} />
      </div>
      <p className="uppercase opacity-50" style={{ letterSpacing: 4 }}>
        {label}
      </p>
    </div>
  );
};

const CountDownTopUnit = ({ value }: { value: string }) => {
  return (
    <div className={cn(COMMON_UNIT_CONTAINER_STYLE)}>
      <div className={COMMON_UNIT_TEXT_STYLE}>{value}</div>
    </div>
  );
};

const CountDownMiddleTopUnit = ({ value }: { value: string }) => {
  const isMounted = useIsMounted();

  return (
    <div
      className={cn(
        COMMON_UNIT_CONTAINER_STYLE,
        COUNT_DOWN_MIDDLE_UNIT_CONTAINER_STYLE
      )}
      style={{
        transform: isMounted ? "rotateX(-90deg)" : "rotateX(0deg)",
      }}
    >
      <div className={COMMON_UNIT_TEXT_STYLE}>{value}</div>
    </div>
  );
};

const CountDownMiddleBottomUnit = ({ value }: { value: string }) => {
  const isMounted = useIsMounted();

  return (
    <div
      className={cn(
        COMMON_UNIT_CONTAINER_STYLE,
        COUNT_DOWN_MIDDLE_UNIT_CONTAINER_STYLE,
        `delay-[${ANIMATION_PERIOD / 2}]`
      )}
      style={{
        transform: isMounted ? "rotateX(-180deg)" : "rotateX(-90deg)",
      }}
    >
      <div
        className={cn(
          COMMON_UNIT_TEXT_STYLE,
          isMounted && "-translate-y-1/2 saturate-150"
        )}
        style={{
          transform: isMounted ? "scaleY(-1)" : "",
        }}
      >
        {value}
      </div>
    </div>
  );
};

const CountDownBottomUnit = ({ value }: { value: string }) => {
  return (
    <div className={COMMON_UNIT_CONTAINER_STYLE}>
      <div
        className={COMMON_UNIT_TEXT_STYLE + " -translate-y-1/2 saturate-150"}
      >
        {value}
      </div>
    </div>
  );
};
