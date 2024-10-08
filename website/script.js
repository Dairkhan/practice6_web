//1
function calculate() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("multiplyResult").innerHTML = "Multiplication: " + (num1 * num2);
    document.getElementById("divideResult").innerHTML = num2 !== 0 ? "Division: " + (num1 / num2) : "Division by zero is not allowed";
}

//2
function findLargest() {
    let num1 = parseFloat(document.getElementById("numA").value);
    let num2 = parseFloat(document.getElementById("numB").value);
    let num3 = parseFloat(document.getElementById("numC").value);
    document.getElementById("largestResult").innerHTML = "Largest: " + Math.max(num1, num2, num3);
}

//3
function sumTriple() {
    let num1 = parseFloat(document.getElementById("sum1").value);
    let num2 = parseFloat(document.getElementById("sum2").value);
    let result = (num1 === num2) ? 3 * (num1 + num2) : num1 + num2;
    document.getElementById("sumResult").innerHTML = "Result: " + result;
}

//4
function closestTo100() {
    let num1 = parseFloat(document.getElementById("close1").value);
    let num2 = parseFloat(document.getElementById("close2").value);
    let diff1 = Math.abs(num1 - 100);
    let diff2 = Math.abs(num2 - 100);
    let closest = diff1 < diff2 ? num1 : diff2 < diff1 ? num2 : "Both are equally close";
    document.getElementById("closestResult").innerHTML = "Closest: " + closest;
}

//5
function extractFirstHalf() {
    let str = document.getElementById("stringInput").value;
    if (str.length % 2 === 0) {
        document.getElementById("halfResult").innerHTML = "First Half: " + str.slice(0, str.length / 2);
    } else {
        document.getElementById("halfResult").innerHTML = "String length is not even.";
    }
}