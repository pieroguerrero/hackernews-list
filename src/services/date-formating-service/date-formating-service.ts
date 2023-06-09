import { differenceInMinutes, format, isSameYear, isYesterday } from "date-fns";

export function formatPostCreationDate(creationDate: Date): string {
  const today = new Date();
  const minutesDif = differenceInMinutes(today, creationDate);

  if (minutesDif < 60) return minutesDif.toString() + " minutes ago";

  if (minutesDif < 24 * 60)
    return Math.floor(minutesDif / 60).toString() + " hours ago";

  if (isYesterday(creationDate)) return "Yesterday";

  if (isSameYear(today, creationDate))
    return "On " + format(creationDate, "MM/dd");

  return "On " + format(creationDate, "MM/dd/yy");
}
