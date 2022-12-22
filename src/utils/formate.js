export default function (date) {
  const time = new Date(+date);
  const month = (time.getMonth() + 1).toString().padStart(2, "0");
  const day = time.getDate().toString().padStart(2, "0");
  return `${time.getFullYear()}-${month}-${day}`;
}
