let divElement = document.getElementById("myDiv");


divElement.addEventListener("click", function() {
    alert("Div was clicked!");
});
function changeText() {
    divElement.innerText = "painoit nappia";
}
