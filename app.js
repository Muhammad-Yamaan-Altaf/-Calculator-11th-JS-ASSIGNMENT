let result = document.getElementById("input-text");
function calculate(value) {
    result.value += value;
}
function Result() {
    try {
        result.value = eval(result.value);
    } catch (err) {
        alert("Enter valid input!");
    }
}
function clearInput() {
    result.value = "";
}
function del() {
    result.value = result.value.slice(0, -1);
}
