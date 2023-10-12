let name = document.getElementById("name");
let email = document.getElementById("email");
let date = document.getElementById("date");
let text = document.getElementById("text");
let number = document.getElementById("number");

let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    if (name.value === "" || email.value === "" || date.value === "" || number.value === "" || text.value === "") {
        alert("Please fill in all fields");
    } else {
        alert("Submitted");
        name.value = "";
        email.value = "";
        date.value = "";
        text.value = "";
        number.value = "";
    }
});

