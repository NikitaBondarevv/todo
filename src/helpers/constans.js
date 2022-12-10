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

export const getDate = () => {
  const date = new Date()
  const targetDay = -6
  const targetDate = new Date()
  const delta = targetDay - date.getDay()

  if (delta >= 0) {
    targetDate.setDate(date.getDate() + delta)
  } else {
    targetDate.setDate(date.getDate() + 7 + delta)
  }

  return targetDate
}
