var expression = '';

function press(num) {
    expression+=num;
    document.getElementById("entry").value=expression;

}


function equal() {
    document.getElementById("entry").value = eval(expression);
    expression='';
}
function erase() {
    expression='';
    document.getElementById("entry").value=expression;
}