"use client";

import { useEffect, useRef } from "react";
import { formatValue, useIsMounted } from "./helpers";
import styles from "./style.module.css";
interface CountDownUnitProps {
  value: number;
  label: string;
}

export const CountDownSegment: React.FC<CountDownUnitProps> = ({
  value,
  label,
}) => {
  const prevValue = useRef(value);
  useEffect(() => {
    prevValue.current = value;
  });

  return (
    <div className={styles["count-down-segment"]}>
      <div className={styles["count-down-segment__units"]}>
        <CountDownTopUnit value={formatValue(value)} />
        <CountDownMiddleTopUnit
          key={"mid-top-" + value}
          value={formatValue(prevValue.current)}
        />
        <CountDownMiddleBottomUnit
          key={"mid-bottom-" + value}
          value={formatValue(value)}
        />
        <CountDownBottomUnit value={formatValue(prevValue?.current)} />
      </div>
      <p className={styles["count-down-segment__label"]}>{label}</p>
    </div>
  );
};

const CountDownTopUnit = ({ value }: { value: string }) => {
  return <CommonUnit value={value} />;
};

const CountDownMiddleTopUnit = ({ value }: { value: string }) => {
  const isMounted = useIsMounted();

  return (
    <CommonUnit
      unitContainerClassNames={["count-down-segment__unit--middle"]}
      unitContainerStyle={{
        transform: isMounted ? "rotateX(-90deg)" : "rotateX(0deg)",
      }}
      value={value}
    ></CommonUnit>
  );
};

const CountDownMiddleBottomUnit = ({ value }: { value: string }) => {
  const isMounted = useIsMounted();

  return (
    <CommonUnit
      unitContainerClassNames={["count-down-segment__unit--middle"]}
      unitContainerStyle={{
        transitionDelay: "calc(var(--animation-period) / 2)",
        transform: isMounted ? "rotateX(-180deg)" : "rotateX(-90deg)",
      }}
      unitNumberStyle={
        isMounted
          ? {
              transform: "translateY(0%) scaleY(-1)",
              filter: "brightness(1.1)",
            }
          : {}
      }
      value={value}
    />
  );
};

const CountDownBottomUnit = ({ value }: { value: string }) => {
  return (
    <CommonUnit
      value={value}
      unitNumberClassNames={["count-down-segment__unit-value--bottom"]}
    />
  );
};

const CommonUnit = ({
  value,
  unitContainerClassNames = [],
  unitContainerStyle,
  unitNumberClassNames = [],
  unitNumberStyle,
}: {
  value: string;
  unitContainerClassNames?: string[];
  unitContainerStyle?: React.CSSProperties;
  unitNumberClassNames?: string[];
  unitNumberStyle?: React.CSSProperties;
}) => (
  <div
    style={unitContainerStyle}
    className={["count-down-segment__unit", ...unitContainerClassNames]
      ?.map((key) => styles[key])
      ?.join(" ")}
  >
    <div
      style={unitNumberStyle}
      className={["count-down-segment__unit-value", ...unitNumberClassNames]
        ?.map((key) => styles[key])
        ?.join(" ")}
    >
      {value}
    </div>
  </div>
);
