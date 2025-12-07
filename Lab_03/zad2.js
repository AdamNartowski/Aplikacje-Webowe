function generatePassword() {
  const minLen = parseInt(document.getElementById("minLen").value);
  const maxLen = parseInt(document.getElementById("maxLen").value);
  const useUpper = document.getElementById("upper").checked;
  const useSpecial = document.getElementById("special").checked;

  if (minLen > maxLen) {
    alert("Minimalna długość nie może być większa od maksymalnej!");
    return;
  }

  let chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const specialChars = "!@#$%^&*()_+{}[]<>?,.";

  if (useUpper) chars += upperChars;
  if (useSpecial) chars += specialChars;

  const length = Math.floor(Math.random() * (maxLen - minLen + 1)) + minLen;

  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  alert("Wygenerowane hasło: " + password);
}
