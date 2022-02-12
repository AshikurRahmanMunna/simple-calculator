const valueField = document.getElementById('input');
function numbers(btnId, textToAdd) {
    const valueField = document.getElementById('input')
    const button7 = document.getElementById(btnId).addEventListener('click', function() {
        if(valueField.innerText == '0') {
            valueField.innerText = textToAdd;
        }
        else{
            valueField.innerText = valueField.innerText + textToAdd;
        }
    })
}
const button7 = numbers('btn-7', '7');
const button8 = numbers('btn-8', '8');
const button9 = numbers('btn-9', '9');
const button4 = numbers('btn-4', '4');
const button5 = numbers('btn-5', '5');
const button6 = numbers('btn-6', '6');
const button1 = numbers('btn-1', '1');
const button2 = numbers('btn-2', '2');
const button3 = numbers('btn-3', '3');
const button0 = numbers('btn-0', '0');
const buttonDot = numbers('btn-.', '.');

const previousValue = document.getElementById('input');
const previousValueText = previousValue.innerText;
const previousValueAmount = parseFloat(previousValueText);
console.log(previousValueAmount);
    // const newId = document.getElementById('input')
    // const newIdText = newId.innerText;
    // const newIdValue = parseFloat(newIdText);
    // const total = prevIdValue + newIdValue;
    // console.log(total);
    

const ac = document.getElementById('btn-ac').addEventListener('click', function() {
    previousValue.innerText = '0';
})
const del = document.getElementById('btn-del').addEventListener('click', function() {
    previousValue.innerText = valueAfaterDelete;
})
const plus = document.getElementById('btn-+').addEventListener('click', function() {
    // previousValue.innerText = '0';
    
    const equal = document.getElementById('btn-=').addEventListener('click', function() {
        const newId = document.getElementById('input');
        const newIdText = newId.innerText;
        const newIdValue = parseFloat(newIdText);
        console.log(newIdValue);
        const total = previousValueAmount + newIdValue;
        valueField.innerText = total;
    })
})
