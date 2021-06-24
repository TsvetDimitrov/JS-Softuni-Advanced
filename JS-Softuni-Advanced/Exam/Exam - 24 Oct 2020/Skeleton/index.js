function solve() {

    let addBtn = document.querySelector('.form-control button');
    let lectureNameEl = document.querySelector('input[name="lecture-name"]');
    let dateEl = document.querySelector('input[name="lecture-date"]');
    let selectEl = document.querySelector('.form-control > select');

    let training = document.querySelector('.modules');


    addBtn.addEventListener('click', function (e) {
        e.preventDefault();
        let modules = [...document.querySelectorAll('.modules h3')];

      

        if (lectureNameEl.value === '' || dateEl.value === '' || selectEl.value === 'Select module') { return; }

        let lectureName = lectureNameEl.value;
        let date = dateEl.value;
        let currentModuleName = selectEl.value;

        date = date.replace('-', '/');
        date = date.replace('-', '/');
        date = date.replace('T', ' - ');


        let module = modules.find(mod => mod.textContent.includes(currentModuleName.toUpperCase()));

        if (module === undefined) {
            module = el('div', [
                el('h3', `${currentModuleName.toUpperCase()}-MODULE`)
            ], { className: 'module' }) // end div;

            let delBtn = el('button', 'Del', { className: 'red' });
            delBtn.addEventListener('click', deleteElement);

            let ul = el('ul');
            let li = el('li', [
                el('h4', `${lectureName} - ${date}`),
                delBtn
            ], { className: 'flex' });

            ul.appendChild(li);
            module.appendChild(ul);
            training.appendChild(module);
        } else {
            let div = module.parentElement;
            let delBtn = el('button', 'Del', { className: 'red' });
            delBtn.addEventListener('click', deleteElement);

            let ul = div.querySelector('ul');

            let li = el('li', [
                el('h4', `${ lectureName } - ${ date }`),
                delBtn
            ], { className: 'flex' });
            ul.appendChild(li);
            div.appendChild(ul);
        }

        [...document.querySelectorAll('.modules ul')]
        .forEach(u => {
            let li = [...u.querySelectorAll('li')].sort((a, b) => {

                let startIndexA = a.textContent.indexOf(' ');
                let startIndexB = b.textContent.indexOf(' ');
                let tempA = a.textContent.substr(startIndexA);
                let tempB = b.textContent.substr(startIndexB);

                return tempA.localeCompare(tempB); })
                .forEach(l => u.appendChild(l));
        })
       
        

        function deleteElement(e) {
            let li = e.target.parentElement;
            let ul = li.parentElement;
            li.remove();
            let ulArr = [...ul.querySelectorAll('li')];
            if (ulArr.length === 0) { ul.parentElement.remove() }
        } // end deleteElement;

    }) // end addBtn;

    function el(type, node, attributes) {
        let element = document.createElement(type);
        if (node == undefined) { return element; }

        if (attributes !== undefined) {
            Object.assign(element, attributes);
        }

        if (Array.isArray(node)) {
            node.forEach(e => appendEl(e));
        } else {
            appendEl(node);
        }

        function appendEl(currentNode) {
            if (typeof currentNode == 'string' || typeof currentNode == 'number') {
                element.innerText = currentNode;
                return;
            }
            element.appendChild(currentNode);
        } // end appendEl;
        return element;
    } // end el;
};





  