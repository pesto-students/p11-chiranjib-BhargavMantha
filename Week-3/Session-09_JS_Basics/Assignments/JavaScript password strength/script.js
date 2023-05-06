// Your solution goes here
function isStrongPassword(password) {
  const passwordRegex = /^(?=.*[A-Z])(?!.*password).{8,}$/;
  if (passwordRegex.test(password)) {
    return true;
  } else {
    return false;
  }
}
