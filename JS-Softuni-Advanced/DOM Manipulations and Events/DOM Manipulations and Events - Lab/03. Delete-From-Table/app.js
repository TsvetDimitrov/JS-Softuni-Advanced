function deleteByEmail() {
    let input = document.querySelector('input').value;
    let tableEmails = Array.from(document.querySelectorAll('tbody tr'));

    let deleted = false;
    for (const row of tableEmails) {
        if (row.children[1].textContent == input) {
            row.parentNode.removeChild(row);

            document.getElementById('result').textContent = 'Deleted.';
            deleted = true;
        }

    }

    if (!deleted) {
        document.getElementById('result').textContent = 'Not found.';
    }
}