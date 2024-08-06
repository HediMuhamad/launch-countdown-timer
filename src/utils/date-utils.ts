export class DateUtils {
  date = new Date();

  constructor(date?: Date) {
    this.date = date ?? new Date();
  }

  add(count: number, period: keyof typeof DateUtils._periodToMilliseconds) {
    const milliseconds = DateUtils._periodToMilliseconds[period] * count;
    return new DateUtils(new Date(this.date.getTime() + milliseconds));
  }

  subtract(
    count: number,
    period: keyof typeof DateUtils._periodToMilliseconds
  ) {
    const milliseconds = DateUtils._periodToMilliseconds[period] * count;
    return new DateUtils(new Date(this.date.getTime() - milliseconds));
  }

  getDiff(type: keyof typeof DateUtils._periodToMilliseconds, diffDate?: Date) {
    const newInstance = new DateUtils(this.date);

    const subtractCount = (diffDate ?? new Date())?.getTime();
    const subtractedInstance = newInstance?.subtract(
      subtractCount,
      "millisecond"
    );

    const diff =
      subtractedInstance?.toDate().getTime() /
      DateUtils._periodToMilliseconds[type];

    if (type === "day") return Math.floor(diff);
    return Math.floor(diff % DateUtils._maxPeriods[type]);
  }

  toDate() {
    return this.date;
  }

  //Month are unstable, so we are not supporting it (some months are 30 days, others 31, and February has 28 or 29 days)
  //It is easy, but we won't invest time on it while we don't need it
  private static _periodToMilliseconds = {
    day: 86400000,
    hour: 3600000,
    minute: 60000,
    second: 1000,
    millisecond: 1,
  };

  private static _maxPeriods = {
    hour: 24,
    minute: 60,
    second: 60,
    millisecond: 1000,
  };
}
