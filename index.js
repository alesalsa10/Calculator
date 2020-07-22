const display = document.getElementById('display');
const buttons = document.getElementsByTagName('button');
let displayedNum = '';

for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function(){
        if (buttons[i].innerText === '+'){
            validator(displayedNum, '+')
        } else if (buttons[i].innerText === '-'){
            validator(displayedNum, '-')
        } else if (buttons[i].innerText === 'x'){
            validator(displayedNum, '*')
        } else if (buttons[i].innerText === '/'){
            validator(displayedNum, '/')
        } else if (buttons[i].innerText === '='){
            solve(displayedNum);
        } else if (buttons[i].innerText === 'AC'){
            clearfunc();
        } else if (buttons[i].innerText === '.'){
            validator(displayedNum, '.')
        } else {
            displayfunc(buttons[i].innerText)
        }
    })
}

const displayfunc = val => {
    display.innerHTML = displayedNum += val;
}

const clearfunc = () => {
    displayedNum = '';
    displayfunc(displayedNum)
}

const solve = (input) =>{
    let lastChar = input.toString().slice(-1);
    if (lastChar == '+' || lastChar == '-' || lastChar == '*' || lastChar == '/'){
        displayedNum = input.toString().slice(0, input.length -1);
        console.log(displayedNum);
        let output = eval(displayedNum);
        display.innerHTML = output;
        displayedNum = output;
    } else {
        let output = eval(input);
        display.innerHTML = output;
        displayedNum = output;
    }
}

const validator = (input, val) => {
    let lastChar = input.toString().slice(-1);  
    //if lastChar is operator replace it with current pressed one
    if (lastChar == '+' || lastChar == '-' || lastChar == '*' || lastChar == '/' ){
        if (val != '.'){
            let newString = input.substring(0, input.length - 1) + val;
            displayedNum = newString;
            display.innerHTML = newString;
        } else {
            displayfunc(val);
        }
        
    } else if (val == '.' && input.toString().includes('.')){
        displayedNum += val;
        let formated = fixInput(displayedNum);
        displayedNum = formated;
        display.innerHTML = displayedNum;
    }else {
        displayfunc(val)
    }
}

const fixInput = (str) => {
    let strArray = str.split(/([\+\-\*\/])/);
    let formated = '';
    strArray.forEach(item => {
        if (item.includes('.')){
            let fixed = item.split('.')[0] + '.' + item.split('.').slice(1).join('');
            formated += fixed;
        } else {
            formated += item;
        }
    })
    return formated;
}







