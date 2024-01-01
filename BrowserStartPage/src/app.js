function clockCalc() {
  const timeNow = new Date();
  let toHours = timeNow.getHours();
  const amPm = toHours <= 12 ? "AM" : "PM";
  toHours = (toHours % 12 || 12).toString().padStart(2, "0");
  const toMinutes = timeNow.getMinutes().toString().padStart(2, "0");
  const toSeconds = timeNow.getSeconds().toString().padStart(2, "0");
  document.getElementById("clock").textContent =
    toHours + ":" + toMinutes + ":" + toSeconds + " " + amPm;
}

clockCalc();
setInterval(clockCalc, 1000);
