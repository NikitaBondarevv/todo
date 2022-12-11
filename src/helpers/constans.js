export const daysOfTheWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
]

export const month = [
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

export const getDateOfThisMonday = () => {
  const date = new Date()

  if (date.getDay() === 0) {
    date.setDate(date.getDate() - 6)
  } else {
    date.setDate(date.getDate() + 1 - date.getDay())
  }

  return date
}
