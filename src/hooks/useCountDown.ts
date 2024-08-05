import { useEffect, useState } from "react";

export const useCountDown = (time: number) => {
  const [count, setCount] = useState(time);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => prev - 1000);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return count;
};
