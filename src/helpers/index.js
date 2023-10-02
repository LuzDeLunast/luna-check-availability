export function objectToArray(obj) {
  return Object.entries(obj).map(([key, value], index) => ({
    id: key,
    numRoom: index + 1,
    data: value,
  }));
}

export function differencesDays(startDate, endDate) {
  const timeDifference = endDate.getTime() - startDate.getTime();
  return Math.floor(timeDifference / (24 * 60 * 60 * 1000)) + 1;
}

export function startDay() {
  const startDay = new Date();
  startDay.setHours(0);
  startDay.setMinutes(0);
  startDay.setSeconds(0);
  startDay.setMilliseconds(0);
  return startDay;
}
