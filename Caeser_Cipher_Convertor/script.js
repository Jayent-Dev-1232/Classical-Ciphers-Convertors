function caesarCipher(text, shift) {
  let result = '';
  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    if (char.match(/[a-z]/i)) {
      let code = text.charCodeAt(i);
      let base = code >= 65 && code <= 90 ? 65 : 97;
      result += String.fromCharCode((code - base + shift + 26) % 26 + base);
    } else {
      result += char;
    }
  }
  return result;
}

function encrypt() {
  const text = document.getElementById('message').value;
  const shift = parseInt(document.getElementById('shift').value);
  const encrypted = caesarCipher(text, shift);
  document.getElementById('output').textContent = encrypted;
}

function decrypt() {
  const text = document.getElementById('message').value;
  const shift = parseInt(document.getElementById('shift').value);
  const decrypted = caesarCipher(text, -shift);
  document.getElementById('output').textContent = decrypted;
}