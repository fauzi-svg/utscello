function appendNumber(number) {
    const display = document.getElementById('display');
    if (display.textContent === '0') {
        display.textContent = number;
    } else {
        display.textContent += number;
    }
}

function appendOperator(operator) {
    const display = document.getElementById('display');
    display.textContent += operator;
}

function clearDisplay() {
    document.getElementById('display').textContent = '0';
}

function toggleSign() {
    const display = document.getElementById('display');
    if (display.textContent.startsWith('-')) {
        display.textContent = display.textContent.substring(1);
    } else {
        display.textContent = '-' + display.textContent;
    }
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.textContent = eval(parseExpression(display.textContent));
    } catch {
        display.textContent = 'Error';
    }
}
function parseExpression(expression) {
    if (expression.includes('!')) {
        const parts = expression.split('!');
        return parts.map(part => factorial(parseFloat(part.trim()))).join('');
    }

    if (expression.includes('^')) {
        expression = expression.replace(/\^/g, '**');
    }
    return expression;
}

function factorial(n) {
    return (n <= 1) ? 1 : n * factorial(n - 1);
}
