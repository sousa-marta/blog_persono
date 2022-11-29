export function convert_to_ddmmyyyy(inputDate) {

  const date = new Date(inputDate)

  let day, month, year;

  day = date.getDate();
  month = date.getMonth() + 1;
  year = date.getFullYear();

  day = day.toString().padStart(2, '0');

  month = month.toString().padStart(2, '0');

  return `${day}/${month}/${year}`;
};
