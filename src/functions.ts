import { dateOptions, timeOptions, dateTimeOptions } from "./types/type-master";

// Array Functions
export function returnCommonRecords(array1: any[], array2: any[], key: string) {
  const commonRecords: any = [];
  const keySet = new Set(array2.map((obj: any) => obj[key]));
  array1.forEach((obj: any) => {
    if (keySet.has(obj[key])) {
      commonRecords.push(obj);
    }
  });

  return commonRecords;
}

export function removeDuplicates(array: any[], key: string) {
  const seen = new Set();
  return array.filter((obj: any) => {
    const keyValue = obj[key];
    if (seen.has(keyValue)) {
      return false;
    } else {
      seen.add(keyValue);
      return true;
    }
  });
}

export function dateManipulate(
  date: string,
  dateOnly?: boolean,
  timeOnly?: boolean,
  dateTime?: boolean
) {
  let currentDate = new Date(date);
  if (dateOnly) {
    const formattedDate = currentDate.toLocaleString("en-US", dateOptions);
    let parts = formattedDate.split(" ");
    return `${parts[1]} ${parts[0]}, ${parts[2]}`;
  }

  if (dateTime) {
    const formattedDate = currentDate.toLocaleString("en-US", dateTimeOptions);
    return formattedDate;
  }

  if (timeOnly) {
    const formattedDate = currentDate.toLocaleString("en-US", timeOptions);
    return formattedDate;
  }
}
