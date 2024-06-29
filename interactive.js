function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function deleteChar(input) {
    if(input.value.length == 1) {
        input.value = '';
    } else {
        input.value = input.value.substring(0, input.value.length - 1);
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}


function calculateResult() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
