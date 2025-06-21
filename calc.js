function aa(X) {
    document.getElementById("input").innerHTML += X;
}

function vide() {
    document.getElementById("input").innerHTML = "";
}

function res() {
    const b = document.getElementById("input").innerHTML; // Use innerHTML to get the content
   
    const result = Function('return (' + b + ')')(); // Proper syntax for Function constructor
    document.getElementById("input").innerHTML =  result; // Display result in innerHTML
    
}