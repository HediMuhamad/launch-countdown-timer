import { DateUtils } from "./date-utils";

it("Should return the correct date string after adding 1 day", () => {
  const date = new Date("2021-01-01");
  const dateUtils = new DateUtils(date);
  const newDate = dateUtils.add(1, "day").toDate();
  expect(newDate.toISOString()).toBe("2021-01-02T00:00:00.000Z");
});

it("Should return the correct date string after subtracting 1 day", () => {
  const date = new Date("2021-01-02");
  const dateUtils = new DateUtils(date);
  const newDate = dateUtils.subtract(1, "day").toDate();
  expect(newDate.toISOString()).toBe("2021-01-01T00:00:00.000Z");
});

it("Should return the correct date string after adding 1 hour", () => {
  const date = new Date("2021-01-01T00:00:00.000Z");
  const dateUtils = new DateUtils(date);
  const newDate = dateUtils.add(1, "hour").toDate();
  expect(newDate.toISOString()).toBe("2021-01-01T01:00:00.000Z");
});

it("Should return the correct date string after subtracting 1 hour", () => {
  const date = new Date("2021-01-01T01:00:00.000Z");
  const dateUtils = new DateUtils(date);
  const newDate = dateUtils.subtract(1, "hour").toDate();
  expect(newDate.toISOString()).toBe("2021-01-01T00:00:00.000Z");
});

it("Should return the correct date string after adding 1 minute", () => {
  const date = new Date("2021-01-01T00:00:00.000Z");
  const dateUtils = new DateUtils(date);
  const newDate = dateUtils.add(1, "minute").toDate();
  expect(newDate.toISOString()).toBe("2021-01-01T00:01:00.000Z");
});

it("Should return the correct date string after subtracting 1 minute", () => {
  const date = new Date("2021-01-01T00:01:00.000Z");
  const dateUtils = new DateUtils(date);
  const newDate = dateUtils.subtract(1, "minute").toDate();
  expect(newDate.toISOString()).toBe("2021-01-01T00:00:00.000Z");
});

it("Should return the correct date string after adding 1 second", () => {
  const date = new Date("2021-01-01T00:00:00.000Z");
  const dateUtils = new DateUtils(date);
  const newDate = dateUtils.add(1, "second").toDate();
  expect(newDate.toISOString()).toBe("2021-01-01T00:00:01.000Z");
});

it("Should return the correct date string after subtracting 1 second", () => {
  const date = new Date("2021-01-01T00:00:01.000Z");
  const dateUtils = new DateUtils(date);
  const newDate = dateUtils.subtract(1, "second").toDate();
  expect(newDate.toISOString()).toBe("2021-01-01T00:00:00.000Z");
});

it("Should return the correct date string after subtracting 1 second and adding 2 hours", () => {
  const date = new Date("2021-01-01T00:00:01.000Z");
  const dateUtils = new DateUtils(date);
  const newDate = dateUtils.subtract(1, "second").add(2, "hour").toDate();
  expect(newDate.toISOString()).toBe("2021-01-01T02:00:00.000Z");
});

it("Should return the correct date string after adding 1 second and subtracting 2 hours", () => {
  const date = new Date("2021-01-01T00:00:01.000Z");
  const dateUtils = new DateUtils(date);
  const newDate = dateUtils.add(1, "second").subtract(2, "hour").toDate();
  expect(newDate.toISOString()).toBe("2020-12-31T22:00:02.000Z");
});

it("Should return the correct date string after adding 1 second and subtracting 2 hours and adding 3 minutes", () => {
  const date = new Date("2021-01-01T00:00:01.000Z");
  const dateUtils = new DateUtils(date);
  const newDate = dateUtils
    .add(1, "second")
    .subtract(2, "hour")
    .add(3, "minute")
    .toDate();
  expect(newDate.toISOString()).toBe("2020-12-31T22:03:02.000Z");
});
