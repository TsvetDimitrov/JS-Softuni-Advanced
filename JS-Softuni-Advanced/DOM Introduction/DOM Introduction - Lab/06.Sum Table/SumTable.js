function sumTable() {
    const rows = document.querySelectorAll('table tr');
    let sum = 0;
    for (let i = 1; i < rows.length - 1; i++) {
        const cols = rows[i].children;
        sum += Number(cols[cols.length - 1].textContent);

    }

    document.getElementById('sum').textContent = sum;
}



//Another solution 
/*
function sumTable() {
    const costTdItems = Array.from(document.querySelectorAll('td:nth-child(2)'));
    let sumElements = costTdItems.pop();


    let sum = costTdItems.reduce((a, x) => a + Number(x.textContent), 0);
    sumElements.textContent = sum;
}
*/