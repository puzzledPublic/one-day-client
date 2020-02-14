export function printDate(date: Date) {
  return `${date.getFullYear()}.${addZeroUnderNine(
    date.getMonth() + 1
  )}.${addZeroUnderNine(date.getDate())} ${addZeroUnderNine(
    date.getHours()
  )}:${addZeroUnderNine(date.getMinutes())}:${addZeroUnderNine(
    date.getSeconds()
  )}`;
}

export function getWrittenTime(date: Date) {
  const secondGap = Math.floor((Date.now() - date.getTime()) / 1000);
  const minuteGap = Math.floor(secondGap / 60);
  const timeGap = Math.floor(minuteGap / 60);
  const printGap =
    secondGap > 0
      ? secondGap > 60
        ? minuteGap > 60
          ? timeGap > 24
            ? `${addZeroUnderNine(date.getMonth() + 1)}-${addZeroUnderNine(
                date.getDate()
              )}`
            : `${addZeroUnderNine(date.getHours())}:${addZeroUnderNine(
                date.getMinutes()
              )}`
          : `${minuteGap}분전`
        : `${secondGap}초전`
      : `방금전`;
  return printGap;
}

function addZeroUnderNine(time: number) {
  return time < 10 ? `0${time}` : `${time}`;
}
