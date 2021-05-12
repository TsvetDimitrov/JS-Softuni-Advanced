function solve() {
    let addButton = document.getElementById('add');
    const task = document.getElementById('task');
    const description = document.getElementById('description');
    const dueDate = document.getElementById('date');
    const sections = document.querySelectorAll('section div');

    const openDiv = sections[3];
    const inProgress = sections[5];
    const finished = sections[7];
    addButton.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(sections, openDiv, inProgress, finished)
        if (task.value == '' || description.value == '' || dueDate == '') {
            return;
        }
        let taskInput = task.value;
        let descriptionInput = description.value;
        let dueDateInput = dueDate.value;

        task.value = '';
        description.value = '';
        dueDate.value = '';

        let startBtn = el('button', 'Start', 'green');
        startBtn.addEventListener('click', () => start(taskInput, descriptionInput, dueDateInput, article));
        let deletetBtn = el('button', 'Delete', 'red');
        deletetBtn.addEventListener('click', () => del(article))
        let div = el('div', '', 'flex');
        div.appendChild(startBtn);
        div.appendChild(deletetBtn);

        let h3 = el('h3', taskInput);
        let p = el('p', `Description: ${descriptionInput}`);
        let p2 = el('p', `Due Date: ${dueDateInput}`);
        let article = el('article', '');

        article.appendChild(h3);
        article.appendChild(p);
        article.appendChild(p2);
        article.appendChild(div);

        openDiv.appendChild(article);

    });

    function start(taskInput, descriptionInput, dueDateInput, article) {
        article.remove();
        let newDeleteteBtn = el('button', 'Delete', 'red');
        newDeleteteBtn.addEventListener('click', () => del(newArticle));
        let finishButton = el('button', 'Finish', 'orange');
        finishButton.addEventListener('click', () => complete(taskInput, descriptionInput, dueDateInput, newArticle))
        let div = el('div', '', 'flex');
        div.appendChild(newDeleteteBtn);
        div.appendChild(finishButton);

        let h3 = el('h3', taskInput);
        let p = el('p', `Description: ${descriptionInput}`);
        let p2 = el('p', `Due Date: ${dueDateInput}`);
        let newArticle = el('article', '');

        newArticle.appendChild(h3);
        newArticle.appendChild(p);
        newArticle.appendChild(p2);
        newArticle.appendChild(div);

        inProgress.appendChild(newArticle);
    }

    function complete(taskInput, descriptionInput, dueDateInput, newArticle) {
        newArticle.remove();
        let h3 = el('h3', taskInput);
        let p = el('p', `Description: ${descriptionInput}`);
        let p2 = el('p', `Due Date: ${dueDateInput}`);
        let fineshedArticle = el('article', '');

        fineshedArticle.appendChild(h3);
        fineshedArticle.appendChild(p);
        fineshedArticle.appendChild(p2);

        finished.appendChild(fineshedArticle)

    }

    function del(article) {
        article.remove();
    }

    function el(type, content, addClass) {
        const result = document.createElement(type);
        result.textContent = content;

        if (addClass) {
            result.className = addClass;
        }

        return result;
    }
}