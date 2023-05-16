let password = document.getElementById("password")
let passwordLenght = document.getElementById("passLenght")




function generatePass(len) {
    // console.log(password.val)
    // console.log(passwordLenght.textContent)

    const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz"
    const numberic = "1234567890"
    const data = upperAlphabet + lowerAlphabet + numberic
    let generator = '';

    for (let index = 0; len < 10; index++) {
        generator += data[~~(Math.random() * data.length)]
    }

    return generator
}

function getPass() {
    let newPass = generatePass(passwordLenght.value)
    console.log(passwordLenght.value)
    console.log(newPass)
}

function savePass() {

}