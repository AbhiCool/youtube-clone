import { useEffect } from "react";

const useDebounce = (value, delay, callback) => {
  useEffect(() => {
    if (!value) return;
    const timer = setTimeout(() => {
      callback(value);
    }, delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
};

export default useDebounce;
