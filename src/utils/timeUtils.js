export const getNextDrawTime = (timeStr, frequency) => {
  const now = new Date();
  const [hours, minutes, seconds] = timeStr.split(':').map(Number);
  
  let nextDraw = new Date(now);
  nextDraw.setHours(hours, minutes, seconds, 0);

  // If the draw time has passed for today, set it for tomorrow
  if (nextDraw < now) {
    nextDraw.setDate(nextDraw.getDate() + 1);
  }

  // If frequency is not daily, check if it's a valid day
  if (frequency !== 'Daily') {
    const days = frequency.split(', ');
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let daysToAdd = 0;
    
    while (!days.includes(dayNames[nextDraw.getDay()])) {
      nextDraw.setDate(nextDraw.getDate() + 1);
      daysToAdd++;
      if (daysToAdd > 7) break; // Safety check
    }
  }

  return nextDraw;
};

export const formatTimeLeft = (timeLeft) => {
  if (timeLeft < 0) return '00:00:00';
  
  const hours = Math.floor(timeLeft / 3600000);
  const minutes = Math.floor((timeLeft % 3600000) / 60000);
  const seconds = Math.floor((timeLeft % 60000) / 1000);

  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};
