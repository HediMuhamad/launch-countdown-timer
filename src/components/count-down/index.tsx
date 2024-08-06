import dynamic from "next/dynamic";
import styles from "./style.module.css";

const CountDown = dynamic(() => import("./count-down"), {
  ssr: false,
});

export const CountDownSection = () => {
  return (
    <div className={styles["count-down-section"]}>
      <h1 className={styles["count-down-section__headline"]}>
        We&rsquo;re launching soon
      </h1>
      <CountDown />
    </div>
  );
};
