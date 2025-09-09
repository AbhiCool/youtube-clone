import React, { useEffect } from "react";

const useDebounce = (fn, delay) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      fn();
    }, delay);
    return () => clearTimeout(timer);
  }, [fn, delay]);
};

export default useDebounce;
