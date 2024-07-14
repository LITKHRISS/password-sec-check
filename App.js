function validatePassword () {
  const password = document.getElementById('password').value
  const message = document.getElementById('message')
  const result = zxcvbn(password)

  // Validate conditions
  const hasUppercase = /[A-Z]/.test(password)
  const hasLowercase = /[a-z]/.test(password)
  const hasDigit = /\d/.test(password)
  const hasSpecialCharacter = /[!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\\/?]/.test(password)
  const isLengthValid = password.length >= 8

  // Display appropriate message
  let strengthMessage = ''
  if (hasUppercase) strengthMessage += 'Uppercase, '
  if (hasLowercase) strengthMessage += 'Lowercase, '
  if (hasDigit) strengthMessage += 'Digit, '
  if (hasSpecialCharacter) strengthMessage += 'Special character '
  if (isLengthValid) strengthMessage += ',Length '

  if (result.score >= 3) {
    message.textContent = `Strong password!👍 (${strengthMessage.trim()})`
    message.style.color = 'green'
  } else {
    message.textContent = `Weak password👎 Improve: ${strengthMessage.trim()}`
    message.style.color = 'red'
  }
}

// Attach the validatePassword function to the input field's keyup event
document.getElementById('password').addEventListener('keyup', validatePassword)
