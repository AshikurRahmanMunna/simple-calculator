const valueField = document.getElementById('input');
function numbers(btnId, textToAdd) {
    const valueField = document.getElementById('input')
    const button7 = document.getElementById(btnId).addEventListener('click', function() {
        if(valueField.innerText == '') {
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

const operator = document.getElementById('operator');
const ac = document.getElementById('btn-ac').addEventListener('click', function(event) {
    reload = location.reload();
})
function getPreviousValue() {
    const previousValue = document.getElementById('input');
    const previousValueText = previousValue.innerText;
    const previousValueAmount = parseFloat(previousValueText);
    console.log(previousValueAmount);
    previousValue.innerText = '';
    return previousValueAmount;
}

const del = document.getElementById('btn-del').addEventListener('click', function() {
    const deleteText = document.getElementById('input').innerText;
    document.getElementById('input').innerText = deleteText.substring(0, deleteText.length -1);
})

const plus = document.getElementById('btn-+').addEventListener('click', function() {
    operator.innerText = '+';
    operator.classList.add('text-white');
    operator.classList.remove('text-dark');

    const previousValueAmount = getPreviousValue();
    
    document.getElementById('btn-=').addEventListener('click', function() {
        const newValue = document.getElementById('input');
        const newValueText = newValue.innerText;
        const newValueAmount = parseFloat(newValueText);
        console.log(newValueAmount);
        const total = previousValueAmount + newValueAmount;
        newValue.innerText = total;
        operator.innerText = previousValueAmount + ' + ' + newValueAmount;
    })
})

const minus = document.getElementById('btn-').addEventListener('click', function() {
    operator.innerText = '-';
    operator.classList.add('text-white');
    operator.classList.remove('text-dark');

    const previousValueAmount = getPreviousValue();
    
    document.getElementById('btn-=').addEventListener('click', function() {
        const newValue = document.getElementById('input');
        const newValueText = newValue.innerText;
        const newValueAmount = parseFloat(newValueText);
        console.log(newValueAmount);
        const total = previousValueAmount - newValueAmount;
        newValue.innerText = total;
        operator.innerText = previousValueAmount + ' - ' + newValueAmount;
    })
})
const multiplication = document.getElementById('btn-*').addEventListener('click', function() {
    operator.innerText = 'X';
    operator.classList.add('text-white');
    operator.classList.remove('text-dark');

    const previousValueAmount = getPreviousValue();
    
    document.getElementById('btn-=').addEventListener('click', function() {
        const newValue = document.getElementById('input');
        const newValueText = newValue.innerText;
        const newValueAmount = parseFloat(newValueText);
        console.log(newValueAmount);
        const total = previousValueAmount * newValueAmount;
        newValue.innerText = total;
        operator.innerText = previousValueAmount + ' X ' + newValueAmount;
    })
})
const division = document.getElementById('btn-/').addEventListener('click', function() {
    operator.innerText = '/';
    operator.classList.add('text-white');
    operator.classList.remove('text-dark');

    const previousValueAmount = getPreviousValue();
    
    document.getElementById('btn-=').addEventListener('click', function() {
        const newValue = document.getElementById('input');
        const newValueText = newValue.innerText;
        const newValueAmount = parseFloat(newValueText);
        console.log(newValueAmount);
        const total = previousValueAmount / newValueAmount;
        newValue.innerText = total;
        operator.innerText = previousValueAmount + ' / ' + newValueAmount;
    })
})

const percentage = document.getElementById('btn-%').addEventListener('click', function() {
    operator.innerText = '%';
    operator.classList.add('text-white');
    operator.classList.remove('text-dark');

    const previousValueAmount = getPreviousValue();
    
    document.getElementById('btn-=').addEventListener('click', function() {
        const newValue = document.getElementById('input');
        const newValueText = newValue.innerText;
        const newValueAmount = parseFloat(newValueText);
        console.log(newValueAmount);
        const total = (previousValueAmount / 100) * newValueAmount;
        newValue.innerText = total;
        operator.innerText = previousValueAmount + ' % ' + newValueAmount;
    })
})

