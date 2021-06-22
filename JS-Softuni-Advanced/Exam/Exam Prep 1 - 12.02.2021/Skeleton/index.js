function solve() {
    const formControls = document.querySelectorAll('.form-control input');
    const lecture = formControls[0];
    const date = formControls[1];
    const moduleName = document.querySelector('select');
    const modulesOutput = document.querySelector('.modules');
    let state = {};


    function createElement(type, text, attr) {
        let result = document.createElement(type);

        if (text) {
            result.textContent = text;
        }

        if (attr) {
            result.className = attr;
        }
        return result;
    }

    function add(e) {
        e.preventDefault();
        if (lecture.value === '' || date.value === '' || moduleName.value.includes('Select')) {
            return;
        }

        let lectureName = lecture.value;
        let dateString = date.value;
        const lectureTitle = lectureName + ' - ' + dateString.split('-').join('/').split('T').join(' - ');
        const delBtn = createElement('button', 'Del', 'red');
        const lectureH4 = createElement('h4', lectureTitle);
        const li = createElement('li', undefined, 'flex');
        li.appendChild(lectureH4);
        li.appendChild(delBtn);

        let module = undefined;
        let ul = undefined;
        if (!state[moduleName.value]) {
            let h3 = createElement('h3', `${moduleName.value.toUpperCase()}-MODULE`);
            ul = createElement('ul');
            lis = [];
            module = createElement('div', undefined, 'module');
            module.appendChild(h3);
            module.appendChild(ul);
            state[moduleName.value] = { module, ul, lis: [] };
        } else {
            module = state[moduleName.value].module;
            ul = state[moduleName.value].ul;
        }

        state[moduleName.value].lis.push({ li, date: date.value });
        state[moduleName.value].lis.sort((a, b) => { return a.date.localeCompare(b.date) }).forEach(({ li }) => {
            ul.appendChild(li);
        });

        modulesOutput.appendChild(module);
    }


    function del(e) {
        let li = e.target.parentNode;
        let ul = li.parentNode;
        let module = ul.parentNode;

        li.remove();
        if (ul.children.length === 0) {
            module.remove();
        }
    }

    document.getElementsByTagName('main')[0].addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            if (!e.target.classList.contains('red')) {
                add(e);
            } else {
                del(e);
            }
        }
    });
};


//Another solution:

function solve() {
    let addBtn = document.querySelector('.form-control > button');
    addBtn.addEventListener('click', addToTrainings);
    let state = {};

    function addToTrainings(e) {
        e.preventDefault();

        const lectureName = document.querySelector('input[name="lecture-name"]').value;
        const date = document.querySelector('input[name="lecture-date"]').value;
        const module = document.querySelector('select[name="lecture-module"]').value;

        const displayModules = document.querySelector('div[class="modules"]');

        //use this regex instead of let modifiedDate = date.replaceAll('-', '/');
        //bacause judge gives 12/100 instead
        //had to learn it in the hard way. 
        let modifiedDate = date.replace(/-/g, '/');
        modifiedDate = modifiedDate.replace('T', ' - ');


        if (lectureName == '' || date == '' || module.includes('Select')) {
            return;
        }
        const div = el('div', undefined, 'module');
        const h3 = el('h3', `${module.toUpperCase()}-MODULE`);
        const ul = el('ul');

        if (!state.hasOwnProperty(module)) {

            const li = el('li', undefined, 'flex');
            const h4 = el('h4', `${lectureName} - ${modifiedDate}`);
            const delButton = el('button', 'Del', 'red');
            delButton.addEventListener('click', delLi);

            li.appendChild(h4);
            li.appendChild(delButton);
            ul.appendChild(li);
            div.appendChild(h3);
            div.appendChild(ul);
            displayModules.appendChild(div);

            state[module] = [];
            state[module].push({ li, date });
        } else {
            let modulesArr = Array.from(displayModules.querySelectorAll('h3'));

            const li = el('li', undefined, 'flex');
            const h4 = el('h4', `${lectureName} - ${modifiedDate}`);
            const delButton = el('button', 'Del', 'red');
            delButton.addEventListener('click', delLi);

            li.appendChild(h4);
            li.appendChild(delButton);

            let ul;
            modulesArr.forEach((elem) => {
                if (elem.textContent == `${module.toUpperCase()}-MODULE`) {
                    ul = elem.parentNode.querySelector('ul');
                    ul.appendChild(li);
                }
            });

            state[module].push({ li, date });
            let sorted = Object.values(state[module]).sort((a, b) => a.date.localeCompare(b.date));
            sorted.forEach((lis) => {
                ul.appendChild(lis.li);
            });
        }

        function delLi(e) {
            let li = e.target.parentNode;
            let ul = e.target.parentNode.parentNode;

            li.remove();
            if (ul.children.length == 0) {
                ul.parentNode.remove();
                delete state[module];
            }
        }
        function el(type, content, addClass) {
            let result = document.createElement(type);
            result.textContent = content;

            if (addClass) {
                result.className = addClass;
            }
            return result;
        }
    }
};