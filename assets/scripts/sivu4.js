let divElement = document.getElementById("myLaatikko");

divElement.addEventListener("click", function() {
    alert("Tuohon tulee laskurin vastaukset");
});

function addNumbers() {
    setTimeout(myFunction, 2000);
    const num1 = document.getElementById('numero1').value;
    const num2 = document.getElementById('numero2').value;
    const int1 = parseInt(num1, 10);
    const int2 = parseInt(num2, 10);    
    if (isNaN(int1) || isNaN(int2) || num1.trim() === "" || num2.trim() === "") {
        document.getElementById('myLaatikko').innerText = "Vain kokonaislukuja kiitos";
    } else if (int1.toString() !== num1 || int2.toString() !== num2) {
        document.getElementById('myLaatikko').innerText = "Vain kokonaislukuja kiitos";
    } else {
        const sum = int1 + int2;
        document.getElementById('myLaatikko').innerText = sum;
    }
    
}

function myFunction() {
  alert('Käytit laskuria hähhähhää');
}

function addWisdom() {
    let newParagraph = document.createElement("p");
    newParagraph.innerText = "Lisää viisautta";
   // newParagraph.style.color = "blue";
    newParagraph.setAttribute("id", "newWisdom"); 
    divElement.appendChild(newParagraph);
}
function removeWisdom() {
    let newParagraph = document.getElementById("newWisdom");
    if(newParagraph) {
        newParagraph.remove();
    }
}