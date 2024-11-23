import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

const formatTime = (unix: number, format?: string) => {
  const tz = dayjs.tz.guess();
  const dateInTimezone = dayjs.unix(unix).tz(tz);
  const formattedDate = dateInTimezone.format(format || "YYYY-MM-DD HH:mm:ss");
  return formattedDate;
};

export { formatTime };
