function extractText() {
    const liElements = [...document.getElementsByTagName('li')];
    const elementsText = liElements.map(e => e.textContent);

    document.getElementById('result').value = elementsText.join("\n");
}


//Another solution:

/*
function extractText() {
    let listItems = document.querySelectorAll('#items li');
    let result = '';

    for (const item of listItems) {
        result += item.textContent.trim() + `\n`;
    }

    let resultElements = document.getElementById('result');
    resultElements.textContent = result.trim();
}

*/