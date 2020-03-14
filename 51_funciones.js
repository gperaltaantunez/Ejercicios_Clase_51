// TAREA CLASE 51
// 1. Hacer un codigo que determine si un password es valido o no.
// -  Hacer una funcion que reciba un string como parametro. La funcion debe retornar true si el parametro:
//      a. Tiene seis caracteres o mas
//      b. Tiene al menos un numero
//      c. Tiene al menos una letra
// -  Y false en caso contrario.

let password = "ada020"

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

const lengthPass = (password) => {
  if (password.length >= 6) {
    return true
  }
};

const numberPass = (password) => {
  for (let i = 0; i < password.length; i++) {
    if (numbers.indexOf(password[i]) != -1) {
    return true
    }
  }
};

const letterPass = (password) => {
  for (let i = 0; i < password.length; i++) {
    if (letters.indexOf(password[i]) != -1) {
      return true
    }
  }
};

const passwordValidation = (password) => 
lengthPass(password) === true 
&& numberPass(password) === true 
&& letterPass(password) === true

console.log(passwordValidation(password))