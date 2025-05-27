import React, { useEffect, useState } from "react";

const TARGET_DATE = new Date("2025-10-29T08:30:00");

function getTimeLeft() {
  const now = new Date();
  const diff = TARGET_DATE - now;
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

export default function Counter() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#235D89] rounded-xl p-6 flex justify-center text-white gap-12 mt-30">
      <div className="text-center">
        <div className="text-4xl font-semibold">{String(timeLeft.days).padStart(2, '0')}</div>
        <div className="text-sm">Dias</div>
      </div>
      <div className="text-center">
        <div className="text-4xl font-semibold">{String(timeLeft.hours).padStart(2, '0')}</div>
        <div className="text-sm">Horas</div>
      </div>
      <div className="text-center">
        <div className="text-4xl font-semibold">{String(timeLeft.minutes).padStart(2, '0')}</div>
        <div className="text-sm">Minutos</div>
      </div>
      <div className="text-center">
        <div className="text-4xl font-semibold">{String(timeLeft.seconds).padStart(2, '0')}</div>
        <div className="text-sm">Segundos</div>
      </div>
    </div>
  );
}
