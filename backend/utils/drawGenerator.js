const shioList = ['Tikus', 'Kerbau', 'Macan', 'Kelinci', 'Naga', 'Ular', 'Kuda', 'Kambing', 'Monyet', 'Ayam', 'Anjing', 'Babi'];

function generateRandomNumber(length) {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += Math.floor(Math.random() * 10).toString();
  }
  return result;
}

function generatePatterns(baseNumber) {
  const digits = baseNumber.split('');

  // Generate Top4D patterns using the 5 digits
  const top4dPatterns = [
    `${digits[0]}${digits[1]}${digits[2]}${digits[3]}`, // First four: 1234
    `${digits[1]}${digits[2]}${digits[3]}${digits[4]}`, // Last four: 2345
    `${digits[3]}${digits[2]}${digits[1]}${digits[0]}`, // Reverse first four: 4321
    `${digits[4]}${digits[3]}${digits[2]}${digits[1]}`, // Reverse last four: 5432
    `${digits[0]}${digits[2]}${digits[1]}${digits[3]}`, // Mix 1: 1213
    `${digits[4]}${digits[2]}${digits[3]}${digits[1]}`, // Mix 2: 5231
  ];

  // Generate Top3D patterns using the 5 digits
  const top3dPatterns = [
    `${digits[0]}${digits[1]}${digits[2]}`, // First three: 123
    `${digits[2]}${digits[1]}${digits[0]}`, // Reverse first three: 321
    `${digits[2]}${digits[3]}${digits[4]}`, // Last three: 345
    `${digits[4]}${digits[3]}${digits[2]}`, // Reverse last three: 543
    `${digits[1]}${digits[2]}${digits[3]}`, // Middle three: 234
    `${digits[0]}${digits[2]}${digits[4]}`, // Alternating: 135
    `${digits[1]}${digits[3]}${digits[0]}`, // Mix: 231
  ];

  // Generate Top2D patterns using the 5 digits
  const top2dPatterns = [
    `${digits[0]}${digits[1]}`, // First two: 12
    `${digits[1]}${digits[0]}`, // Reverse first two: 21
    `${digits[1]}${digits[2]}`, // Second pair: 23
    `${digits[2]}${digits[1]}`, // Reverse second pair: 32
    `${digits[2]}${digits[3]}`, // Third pair: 34
    `${digits[3]}${digits[2]}`, // Reverse third pair: 43
    `${digits[3]}${digits[4]}`, // Last two: 45
    `${digits[4]}${digits[3]}`, // Reverse last two: 54
    `${digits[0]}${digits[4]}`  // First and last: 15
  ];

  // Generate Colok and other patterns
  const colok = `${digits[0]} | ${digits[digits.length - 1]}`;
  const colok2d = Array(3).fill().map(() => {
    const pos1 = Math.floor(Math.random() * 5);
    let pos2 = Math.floor(Math.random() * 5);
    while (pos2 === pos1) {
      pos2 = Math.floor(Math.random() * 5);
    }
    return `${digits[pos1]},${digits[pos2]}`;
  }).join(' | ');

  return {
    Result: baseNumber,
    Top4D: top4dPatterns.join(' | '),
    Top3D: top3dPatterns.join(' | '),
    Top2D: top2dPatterns.join(' | '),
    Colok: colok,
    Colok2D: colok2d,
    Shio: shioList[Math.floor(Math.random() * shioList.length)]
  };
}

function formatDate(date) {
  return date.toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

function generateDraw(marketName, drawTime) {
  const baseNumber = generateRandomNumber(5);
  const patterns = generatePatterns(baseNumber);
  const now = new Date();
  const tomorrow = new Date(now);
  tomorrow.setHours(now.getHours() + 24); // Add 24 hours

  return {
    Name: marketName,
    Result: patterns.Result,
    Tanggal: formatDate(tomorrow), // Use tomorrow's date
    Time: drawTime,
    Top4D: patterns.Top4D,
    Top3D: patterns.Top3D,
    Top2D: patterns.Top2D,
    Colok: patterns.Colok,
    Colok2D: patterns.Colok2D,
    Shio: patterns.Shio,
    createdAt: tomorrow // Set creation time to 24 hours ahead
  };
}

module.exports = { generateDraw };
