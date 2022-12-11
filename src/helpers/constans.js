export const daysOfTheWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
]

export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

const firstDayOfTheWeek = new Date();

firstDayOfTheWeek.setDate(firstDayOfTheWeek.getDate() + 1 - firstDayOfTheWeek.getDay())

export const dates = Array.from({ length: 7 }).map(() => {
    const date = firstDayOfTheWeek.getDate();
    const month = months[firstDayOfTheWeek.getMonth()];

    firstDayOfTheWeek.setDate(date + 1);

    return `${date} ${month}`
})
