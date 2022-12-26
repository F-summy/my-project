export default function (date, detail = false) {
  const time = new Date(+date);
  const month = (time.getMonth() + 1).toString().padStart(2, "0");
  const day = time.getDate().toString().padStart(2, "0");

  const hour = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");
  if (detail) {
    return `${time.getFullYear()}-${month}-${day}  ${hour}:${minutes}:${seconds}`;
  } else {
    return `${time.getFullYear()}-${month}-${day}`;
  }
}
