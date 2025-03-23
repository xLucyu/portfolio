export function updateTime() {

  const now = new Date();

  let hours: number | string = now.getHours();
  let minutes: number | string = now.getMinutes();
  let seconds: number | string = now.getSeconds();
  let zone: string = hours >= 12 ? "PM": "AM";

  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  const month = now.toLocaleString("default", { month: "long" });
  const day = now.getDate();

  return `${month}/${day} - ${hours}:${minutes}:${seconds} ${zone}`;
}

export default updateTime();
