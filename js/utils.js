const capitalizeString = (string) => string[0].toUpperCase() + string.slice(1);

const getWeekNumber = (date) => {
  const monthStart = new Date(date);
  monthStart.setDate(0);
  const offset = ((monthStart.getDay() + 1) % 7) - 1;
  return Math.ceil((date.getDate() + offset) / 7);
};

const getDayInfo = (string) => {
  const weekDays = [
    'воскресенье',
    'понедельник',
    'вторник',
    'среда',
    'четверг',
    'пятница',
    'суббота',
  ];

  const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ];

  const [d, m, y] = string.split('.');
  const date = new Date([y, m, d].join('-'));

  const weekDay = capitalizeString(weekDays[date.getDay()]);
  const weekNumber = getWeekNumber(date);
  const month = capitalizeString(months[date.getMonth()]);
  const year = date.getFullYear();

  return `${weekDay}, ${weekNumber} неделя ${month} ${year} года`;
};
