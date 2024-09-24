import { Inquiry } from "./api";

export const sortData = (data: Inquiry[], key: string, direction: string) =>
  [...data].sort((a, b) => {
    if (key === "date") {
      const [dateA, dateB] = [a[key], b[key]].map(
        (d) => new Date((d as string).split("/").reverse().join("-"))
      );
      return direction === "ascending"
        ? dateA.getTime() - dateB.getTime()
        : dateB.getTime() - dateA.getTime();
    }
    return direction === "ascending"
      ? (a[key] as string).localeCompare(b[key] as string)
      : (b[key] as string).localeCompare(a[key] as string);
  });
