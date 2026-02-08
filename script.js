function openApp(app) {
  showPopup();

  let link = "";

  if (app === "paytm") link = "paytmmp://";
  if (app === "phonepe") link = "phonepe://";
  if (app === "gpay") link = "tez://";

  // App may open, but payment will NEVER happen
  setTimeout(() => {
    window.location.href = link;
  }, 400);
}

function showPopup() {
  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
