let password = document.getElementById("password")
let passwordLenght = document.getElementById("passLenght")




function generatePass(len) {


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
    console.log(passwordLenght.value)
    console.log(newPass)
}

function savePass() {

}