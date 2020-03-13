let currOperation = "";
let log = "";
let res = [];
let curr = "plus";
let mult = 0;
let pos = 1;

document.getElementById("addButton").addEventListener("click", plus);
document.getElementById("subtractButton").addEventListener("click", minus);
document.getElementById("multiplicationButton").addEventListener("click", multi);
document.getElementById("divisionButton").addEventListener("click", divi);
document.getElementById("reset").addEventListener("click", resetBttn);
document.getElementById("equals").addEventListener("click", result);

function addToList() {
    if(curr === "plus") res.push(parseFloat(document.getElementById("num").value) * pos);
    else{
        if(curr === "mult") res.push(parseFloat(document.getElementById("num").value) * mult * pos);
        else res.push(mult / parseFloat(document.getElementById("num").value) * pos);
    }
}

function plus() {
    if(!isNaN(document.getElementById("num").value) && document.getElementById("num").value !== ""){
        addToList();
        if(parseFloat(document.getElementById("num").value) < 0) currOperation += "(" + document.getElementById("num").value + ")+";
        else currOperation += document.getElementById("num").value + "+";
        pos = 1;
        curr = "plus";
        mult = 0;
        document.getElementById("num").value = "";
    }
    else{
        alert("Input is not a number! Try again!");
    }
}

function minus() {
    if(!isNaN(document.getElementById("num").value) && document.getElementById("num").value !== ""){
        addToList();
        if(parseFloat(document.getElementById("num").value) < 0) currOperation += "(" + document.getElementById("num").value + ")-";
        else currOperation += document.getElementById("num").value + "-";
        pos = -1;
        curr = "plus";
        mult = 0;
        document.getElementById("num").value = "";
    }
    else{
        alert("Input is not a number! Try again!");
    }
}

function changeMult() {
    if(curr === "plus") mult = parseFloat(document.getElementById("num").value);
    else{
        if(curr === "mult") mult *= parseFloat(document.getElementById("num").value);
        else mult /= parseFloat(document.getElementById("num").value);
    }
}

function multi() {
    if(!isNaN(document.getElementById("num").value) && document.getElementById("num").value !== ""){
        changeMult();
        if(parseFloat(document.getElementById("num").value) < 0) currOperation += "(" + document.getElementById("num").value + ")*";
        else currOperation += document.getElementById("num").value + "*";
        curr = "mult";
        document.getElementById("num").value = "";
    }
    else{
        alert("Input is not a number! Try again!");
    }
}

function divi() {
    if(!isNaN(document.getElementById("num").value) && document.getElementById("num").value !== ""){
        changeMult();
        if(parseFloat(document.getElementById("num").value) < 0) currOperation += "(" + document.getElementById("num").value + ")/";
        else currOperation += document.getElementById("num").value + "/";
        curr = "div";
        document.getElementById("num").value = "";
    }
    else{
        alert("Input is not a number! Try again!");
    }
}

function reset() {
    currOperation = "";
    res = [];
    curr = "plus";
    mult = 0;
    pos = 1;
}

function resetBttn() {
    reset();
    document.getElementById("num").value = "";
    document.getElementById("resultValue").value = "";
}

function result() {
    if(!isNaN(document.getElementById("num").value) && document.getElementById("num").value !== ""){
        addToList();
        let result = 0;
        res.forEach(element => console.log(element));
        res.forEach(element => result += element);
        document.getElementById("resultValue").value = result;
        if(parseFloat(document.getElementById("num").value) < 0) currOperation += "(" + document.getElementById("num").value + ")"+" = "+ result +"\n";
        else currOperation += document.getElementById("num").value+" = "+ result +"\n";
        log += currOperation;
        document.getElementById("num").value = "";
        document.getElementById("logInformation").value = log;
        reset();
    }
    else{
        alert("Input is not a number! Try again!");
    }
}