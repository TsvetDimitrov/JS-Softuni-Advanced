function solve() {
    const formControls = document.querySelectorAll('.form-control input');
    const lecture = formControls[0];
    const date = formControls[1];
    const moduleName = document.querySelector('select');
    const modulesOutput = document.querySelector('.modules');

    let state = {};
    function createElement(type, text, attributes = []) {
        let element = document.createElement(type);
        if (text) {
            element.textContent = text;
        }
        attributes.map(attr => attr.split('=')).forEach(([name, value]) => {
            element.setAttribute(name, value);
        })

        return element;
    }

    function add(e) {
        e.preventDefault();
        if (lecture.value === '' || date.value === '' || moduleName.value.includes === 'Select module') {
            return;
        }
        let lectureName = lecture.value;
        let dateString = date.value;
        const lectureTitle = lectureName + ' - ' + dateString.split('-').join('/').split('T').join(' - ');
        const delBtn = createElement('button', 'Del', ['class=red']);
        const lectureH4 = createElement('h4', lectureTitle);
        const li = createElement('li', undefined, ['class=flex']);
        li.appendChild(lectureH4);
        li.appendChild(delBtn);
        let module = undefined;
        let ul = undefined;
        if (!state[moduleName.value]) {
            let h3 = createElement('h3', `${moduleName.value.toUpperCase()}-MODULE`);
            ul = createElement('ul');
            lis = [];
            module = createElement('div', undefined, ['class=module']);
            module.appendChild(h3);
            module.appendChild(ul);
            state[moduleName.value] = { module, ul, lis: [] };
        } else {
            module = state[moduleName.value].module;
            ul = state[moduleName.value].ul;
        }

        state[moduleName.value].lis.push({ li, date: date.value });
        state[moduleName.value].lis.sort((a, b) => {
            return a.date.localeCompare(b.date)
        }).forEach(({ li }) => {
            ul.appendChild(li);
        })

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

// function solve() {
//     const lectureNameInput = document.querySelector('input[name="lecture-name"]');
//     const dateInput = document.querySelector('input[name="lecture-date"]');
//     const moduleInput = document.querySelector('select[name="lecture-module"]');
//     const button = document.querySelector('button');

//     button.addEventListener('click', (e) => addModule(e));

//     const trainings = document.querySelector('div[class="modules"]');


//     function addModule(e) {
//         e.preventDefault();
//         if (lectureNameInput.value === '' || dateInput.value === '' || moduleInput.value.includes('Select')) {
//             return;
//         }

//         let state = {};
//         let lectureName = lectureNameInput.value;
//         let date = dateInput.value;
//         let module = moduleInput.value;

//         date = date.replaceAll('-', '/');
//         date = date.replace('T', ' - ')




//         let li = el('li', undefined, 'flex');
//         let h4 = el('h4', `${lectureName} - ${date}`);
//         let btn = el('button', 'Del', 'red');
//         li.appendChild(h4);
//         li.appendChild(btn);
//         let ul = undefined;
//         let div = undefined;
//         if (!state[moduleInput.value]) {
//             let h3 = el('h3', `${module.toUpperCase()}-MODULE`);
//             ul = el('ul');
//             let lis = [];
//              div = el('div', undefined, 'module');
//             div.appendChild(h3);
//             div.appendChild(ul);
//             state[moduleInput.value] = { div, ul, lis: [] };
//         } else {
//             div = state[moduleInput.value].div;
//             ul = state[moduleInput.value].ul;
//         }

//         state[moduleInput.value].lis.push({ li, date: dateInput.value });
//         state[moduleInput.value].lis.sort((a, b) => a.date.localeCompare(b.date)).forEach(({ li }) => {
//             ul.appendChild(li)
//         });


//         trainings.appendChild(div)

//         lectureNameInput.value = '';
//         dateInput.value = '';
//     }



//     function el(type, content, addClass) {
//         let result = document.createElement(type);
//         result.textContent = content;


//         if (addClass) {
//             result.className = addClass;
//         }

//         return result;
//     }
// };