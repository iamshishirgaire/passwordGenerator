export default generatePassword;
function generatePassword(includeNum, includeChar, maxLength) {
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specialChars = "!@#$%^&*()_-+=<>?";

  let validChars = "";

  if (includeChar) {
    validChars += specialChars;
  }
  if (includeNum) {
    validChars += numbers;
  }

  validChars += uppercaseChars + lowercaseChars;

  let password = "";

  for (let i = 0; i < maxLength; i++) {
    const randomIndex = Math.floor(Math.random() * validChars.length);
    password += validChars[randomIndex];
  }

  return password;
}
