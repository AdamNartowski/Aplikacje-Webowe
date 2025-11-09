function showHideImages(id) {
  const item = document.getElementById(id);
  if (window.getComputedStyle(item).display == "none") {
    item.style.display = "flex";
  } else {
    item.style.display = "none";
  }
}

function runClock() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = check(m);
  s = check(s);
  document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;
  setTimeout(runClock, 1000);
}

function check(x) {
  if (x < 10) {
    x = "0" + x;
  }
  return x;
}

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value.trim();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Podaj poprawny adres e-mail.");
    return;
  }

  if (!subject) {
    alert("Wybierz temat wiadomości.");
  }

  if (message.length == 0) {
    alert("Wpisz swoją wiadomość.");
    return;
  }

  alert("Wiadomość została wysłana. Dziękujemy!");
  form.submit();
});
