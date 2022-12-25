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

const getCurrentMonday = () => {
  const date = new Date()
  const dayNumber = date.getDay()

  if (dayNumber) {
    date.setDate(date.getDate() + 1 - dayNumber)
  } else {
    date.setDate(date.getDate() - 6)
  }

  return date
}

export const getDates = () => Array.from({ length: 7 }).map((value, index) => {
  const monday = getCurrentMonday()
  const date = monday.getDate()
  const month = months[monday.getMonth()]

  monday.setDate(date + index);

  return `${monday.getDate()} ${month}`
})

export const links = [
  { text: 'Home', value: '' },
  { text: 'Task list', value: 'tasks' },
  { text: 'Contacts', value: 'contacts' }
]
