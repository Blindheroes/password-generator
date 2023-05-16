let password = document.getElementById("password")
let passwordLenght = document.getElementById("passLenght")
let currentPass = document.getElementById("currentPass")

function generatePass(len) {
    if (len == '') len = 8
    const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz"
    const numberic = "1234567890"
    const data = upperAlphabet + lowerAlphabet + numberic
    let generator = '';

    for (let index = 0; index < len; index++) {
        generator += data[~~(Math.random() * data.length)]
    }

    return generator
}

function getPass() {
    let newPass = generatePass(passwordLenght.value)
    password.value = newPass
    currentPass.textContent = newPass
    console.log(passwordLenght.value)
    console.log(newPass)
}

function savePass() {

}