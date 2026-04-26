import { useState, useEffect } from "react";

const UseCountDown = (targetDate, onExpiry) => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [expired, setExpired] = useState(false);
  useEffect(() => {
    const calculate = () => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference > 0) {
        setCountdown({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
        setExpired(false);
      } else {
        setExpired(true);
        setCountdown({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
          setExpired((prev)=> {
          if(!prev) onExpire?.();
          return true;
        });
      }
    };

    calculate();

    const interval = setInterval(calculate, 1000);
    return () => clearInterval(interval);   
  }, [targetDate]);

    const pad = (num) => String(num).padStart(2, "0");
  const formattedTimeLeft = {
    days: pad(countdown.days),
    hours: pad(countdown.hours),
    minutes: pad(countdown.minutes),
    seconds: pad(countdown.seconds),
  };

  return {...countdown, expired, formattedTimeLeft};

};

export default UseCountDown;
