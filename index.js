let password = document.getElementById("password")
let passwordLenght = document.getElementById("passLenght")
let currentPass = document.getElementById("currentPass")
let saveBtn = document.getElementById("saveBtn")

const btnGenerate = document.getElementById("btnGenerate")

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
    document.title = password.value
    saveBtn.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(`password saya: ${document.title}`))
    saveBtn.setAttribute("download", "my password from generator.txt")
    setTimeout(() => { alert("berhasil disimpan") }, 500)
}