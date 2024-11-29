import React, { useState, useEffect } from 'react';
import { getNextDrawTime } from '../utils/timeUtils';

const MarketCard = ({ market }) => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const nextDrawTime = getNextDrawTime(market.times[0], market.frequency);
      const now = new Date();
      const difference = nextDrawTime.getTime() - now.getTime();
      
      if (difference > 0) {
        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        setTimeLeft({ hours, minutes });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 60000);

    return () => clearInterval(timer);
  }, [market]);

  return (
    <div className="card bg-base-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="card-body p-4">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-bold text-primary">{market.realName}</h3>
            <div className="flex items-center gap-2 text-xs opacity-70 mt-1">
              <span>{market.times.join(', ')}</span>
              <span className="badge badge-sm">{market.frequency}</span>
            </div>
          </div>
          <div className="flex gap-1 items-center text-sm">
            <div className="bg-neutral px-2 py-1 rounded">
              <span className="countdown font-mono">
                <span style={{ "--value": timeLeft.hours }}></span>
              </span>h
            </div>
            <div className="bg-neutral px-2 py-1 rounded">
              <span className="countdown font-mono">
                <span style={{ "--value": timeLeft.minutes }}></span>
              </span>m
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketCard;
