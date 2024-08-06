import { useEffect, useState } from "react";

export const useCountDown = (date: Date) => {
  const [count, setCount] = useState(date?.getTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => prev - 1000);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return new Date(count);
};
