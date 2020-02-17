export const dateStringToDate = (dateString: string): Date => {
  const dateParts = dateString
    .split("/")
    .map((value: string): number => {
      return parseInt(value);
    });
  return new Date(dateParts[2], dateParts[0] - 1, dateParts[1]);
};
