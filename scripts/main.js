

const myImage = document.querySelector('img');
myImage.addEventListener('click', () => {
    const mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/cat.jpg') {
        myImage.setAttribute('src', 'images/mountain.jpg');
    } else {
        myImage.setAttribute('src', 'images/cat.jpg');
    }
});



// const myImage = document.querySelector("img");
// myImage.addEventListener("click", () => {
//   const mySrc = myImage.getAttribute("src");
//   if (mySrc === "images/cat.jpg") {
//     myImage.setAttribute("src", "images/mountain.jpg");
//   } else {
//     myImage.setAttribute("src", "images/cat.jpg");
//   }
// });

let myButton = document.querySelector("button")
let myHeading = document.querySelector("h1")

function setUserName() {
    const userName = prompt("Enter your name:");
    if (!userName) {
        setUserName();
    } else {
        localStorage.setItem("userName", userName);
        myHeading.textContent = `Hello, ${localStorage.getItem("userName")}`;
    }

} 

if (!localStorage.getItem("userName")) {
    setUserName();
} else {
    myHeading.textContent = `Hello, ${localStorage.getItem("userName")}`;
}

myButton.addEventListener("click", setUserName)