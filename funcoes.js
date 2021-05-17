function calculo(p1, p2){
    return p1 * p2;
}

document.getElementById("calculo").innerHTML = calculo(4, 3);

var x = myCalc(5, 3);
document.getElementById("teste").innerHTML = x;

function myCalc(a, b){
    return a * b;
}


function toCelsius(f){
    return (5/9) * (f - 32);
}
document.getElementById("fahrenheit").innerHTML = toCelsius(77);