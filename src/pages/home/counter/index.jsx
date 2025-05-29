import React, { useEffect, useState } from "react";

import { LiaArrowRightSolid } from "react-icons/lia"
import { GiWorld } from "react-icons/gi"

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
    <div class="max-w-4xl mx-auto bg-white rounded-lg overflow-hidden">
        <div class="flex flex-row">
            <div class="lg:w-1/2 relative">
              <img src="./slide5.png" />
            </div>
            <div class="lg:w-1/2 p-6 lg:p-8 flex flex-col justify-center">
                <div class="flex flex-col gap-2 mb-6">
                    <div class="w-12 h-12 bg-[#235D89] rounded-full flex items-center justify-center mr-4">
                        <GiWorld size={30} color="#FFFFFF" />
                    </div>
                    <div>
                        <h2 class="text-xl font-bold text-gray-800">Contagem regressiva!</h2>
                        <p class="text-sm text-gray-600">Evento especial</p>
                    </div>
                </div>
                
                <div class="mb-6 flex justify-center items-center">
                  <a
                    href="https://www.even3.com.br/2saneabrasil/"
                    className="flex items-center gap-2 bg-white text-[#235D89] border-[1px] border-[#0002] px-4 py-2 rounded-full"
                  >
                    PARTICIPE <LiaArrowRightSolid />
                  </a>
                </div>
            </div>
             <div class="px-6 py-8">
              <div class="max-w-2xl mx-auto">
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
              </div>
          </div>
        </div>
    </div>
  );
}
