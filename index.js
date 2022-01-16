const pw = document.getElementById("pw");
const copy = document.getElementById("copy");
const lenEl = document.getElementById("len");
const upperEl = document.getElementById("upper");
const lowerEl = document.getElementById("lower");
const numEl = document.getElementById("number");
const symEl = document.getElementById("symbol");
const generateEl = document.getElementById("generate");

//
const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";

function getSign(type) {
    return type[Math.floor(Math.random() * type.length)];
}

function generatePassword() {
    let len = lenEl.value;
    let password = "";

    for(let i = 0; i < len; i++){
        password += generateX();
    }
    pw.innerText = password;

}

function generateX() {
    const xs = [];
    if(upperEl.checked)
        xs.push(getSign(upperLetters));
    if(lowerEl.checked)
        xs.push(getSign(lowerLetters));
    if(numEl.checked)
        xs.push(getSign(numbers));
    if(symEl.checked)
        xs.push(getSign(symbols));
    if(xs.length === 0 ) return "";

    return getSign(xs);

}
generateEl.addEventListener("click", generatePassword);

function copyPW(){
    let copyText = pw;
    copyText.select();
    document.execCommand("copy");
  
    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
}
copy.addEventListener("click", copyPW);

