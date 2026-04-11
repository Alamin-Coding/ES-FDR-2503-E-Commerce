import { useEffect, useState } from "react";

const useCountdown = (targetDate, onExpire) => {
	const [timeLeft, setTimeLeft] = useState({
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
				setTimeLeft({
					days: Math.floor(difference / (1000 * 60 * 60 * 24)),
					hours: Math.floor((difference / (1000 * 60 * 60 )) % 24),
					minutes: Math.floor((difference / (1000 * 60 )) % 60),
					seconds: Math.floor((difference / 1000) % 60),
				});
        setExpired(false);
			}else {
        setTimeLeft({days: 0, hours: 0, minutes: 0, seconds: 0});
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
    days: pad(timeLeft.days),
    hours: pad(timeLeft.hours),
    minutes: pad(timeLeft.minutes),
    seconds: pad(timeLeft.seconds),
  };

  return {...timeLeft, expired, formattedTimeLeft};
};

export default useCountdown;
