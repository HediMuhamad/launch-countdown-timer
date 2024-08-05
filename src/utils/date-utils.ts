export class DateUtils {
  date = new Date();

  constructor(date: Date) {
    this.date = date;
  }

  add(count: number, period: keyof typeof this._periodToMilliseconds) {
    const milliseconds = this._periodToMilliseconds[period] * count;
    return new DateUtils(new Date(this.date.getTime() + milliseconds));
  }

  subtract(count: number, period: keyof typeof this._periodToMilliseconds) {
    const milliseconds = this._periodToMilliseconds[period] * count;
    return new DateUtils(new Date(this.date.getTime() - milliseconds));
  }

  toDate() {
    return this.date;
  }

  //Month are unstable, so we are not supporting it (some months are 30 days, others 31, and February has 28 or 29 days)
  private _periodToMilliseconds = {
    day: 86400000,
    hour: 3600000,
    minute: 60000,
    second: 1000,
  };
}
