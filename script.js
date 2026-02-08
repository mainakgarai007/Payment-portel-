function toggle(header) {
  const body = header.nextElementSibling;
  body.classList.toggle("show");
}

function payFail() {
  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
