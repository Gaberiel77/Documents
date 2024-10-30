
// selection by id
const first=document.getElementById("first");

first.style.color = "red";


const elements=document.getElementsByClassName("para");

console.log(elements);

elements[0].innerHTML ="This is a modified paragraph"

function changeTextColor() {
    const selectedText= document.getElementById("text")

    selectedText.style.fontWeight="bold";
    selectedText.style.color="purple";
    selectedText.style.fontSize="30px";
}

function greetMe(){
    console.log("WelCome Gabriel!")
}