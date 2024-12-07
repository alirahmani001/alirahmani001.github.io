var TodoList = [];

function HandleEnterKeyUp(e) {
    var TestEmail = e.target.value

    if (!TestEmail.endsWith("@gmail.com")) {
        TestEmail = document.getElementById("in").style.border = "3px solid Red";
    } else {
        if (e.key === "Enter") {
            for (var i = 0; i < TodoList.length; i++) {
                
            }
            e.target.value = "";
        }
        TestEmail = document.getElementById("in").style.border = "";
    }
    console.log(TodoList[i]);
}
function ToggleNavbar() {
var navbar = document.getElementById("navbar");
    navbar.classList.toggle("show")
}