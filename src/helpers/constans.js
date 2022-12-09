export const daysOfTheWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
]

const month = [
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

function dateRange(startDate, endDate, steps = 1) {
  const dateArray = []
  const currentDate = new Date(startDate)

  while (currentDate <= new Date(endDate)) {
    dateArray.push(`${new Date(currentDate).getDate()} ${month[new Date(currentDate).getMonth()]}`)

    currentDate.setUTCDate(currentDate.getUTCDate() + steps)
  }

  return dateArray;
}

export const dates = dateRange('2022-12-05', '2022-12-11')
