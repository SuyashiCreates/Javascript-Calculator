function appendToResult(value) {
    document.getElementById('result').value += value;
}

function clearResult() {
    document.getElementById('result').value = '';
}

function calculate() {
    var result = document.getElementById('result').value;
    try {
        var output = eval(result);
        document.getElementById('result').value = output;
        addToHistory(result, output); 
        displayHistory(); 
    } catch (error) {
        alert('Invalid expression!');
    }
}

let history = [];

function addToHistory(expression, result) {
    history.push({ expression: expression, result: result });
}

function displayHistory() {
    let historyElement = document.getElementById('history');
    historyElement.innerHTML = '';

    for (let i = 0; i < history.length; i++) {
        let historyItem = document.createElement('div');
        historyItem.textContent = history[i].expression + ' = ' + history[i].result;
        historyElement.appendChild(historyItem);
    }
}
f