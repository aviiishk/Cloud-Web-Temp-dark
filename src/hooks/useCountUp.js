import { useEffect, useState } from "react";

export const useCountUp = ({
  start = 0,
  end,
  duration = 1500,
  enabled,
}) => {
  const [value, setValue] = useState(start);

  useEffect(() => {
    if (!enabled) return;

    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      const current = Math.floor(
        start + (end - start) * progress
      );

      setValue(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [enabled, start, end, duration]);

  return value;
};
