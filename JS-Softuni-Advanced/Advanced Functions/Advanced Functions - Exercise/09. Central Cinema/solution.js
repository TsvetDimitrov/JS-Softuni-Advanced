//Solution 90/100 Make an issue if you see the error. 
//TODO
function solve() {
    const formElements = document.querySelector('#container').children;
    const inputs = Array.from(formElements).slice(0, formElements.length - 1);
    const onScreenButton = Array.from(formElements).slice(formElements.length - 1)[0];
    const moviesUl = document.querySelector('#movies>ul');
    const archiveUl = document.querySelector('#archive>ul');
    const clearButton = document.querySelector('#archive>button');

    function clear(e) {
        Array.from(e.target.parentNode.children[1].children).forEach(e => e.remove());
         e.target.parentNode.children[1].innerHTML = '';
    }

    function archive(e) {
        const li = e.target.parentNode.parentNode;
        const div = e.target.parentNode;
        const input = div.children[1];

        if (!Number(input.value)) {
            return;
        }

        const span = document.createElement('span');

        const name = li.children[0].textContent;
        span.textContent = name;

        const strong = document.createElement('strong');
        const price = +div.children[0].textContent;

        const totalPrice = price * Number(input.value)

        strong.textContent = `Total amount: ${totalPrice.toFixed(2)}`;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', (e) => {
            e.target.parentNode.remove();
        });

        const resultLi = document.createElement('li');
        resultLi.appendChild(span);
        resultLi.appendChild(strong);
        resultLi.appendChild(deleteButton);

        archiveUl.appendChild(resultLi);

        li.remove();
    }

    function createMovie(e) {
        e.preventDefault();

        const name = inputs[0].value;
        const hall = inputs[1].value;
        const price = Number(inputs[2].value);

        if (!name || !hall || !price || !Number(price)) {
            return;
        }
        inputs[0].value = '';
        inputs[1].value = '';
        inputs[2].value = '';

        const li = document.createElement('li');

        const span = document.createElement('span');
        span.textContent = name;
        li.appendChild(span);
        const strong = document.createElement('strong');
        strong.textContent = `Hall: ${hall}`;
        li.appendChild(strong);
        const div = document.createElement('div');

        const strongDiv = document.createElement('strong');
        strongDiv.textContent = price.toFixed(2);

        const inputDiv = document.createElement('input');
        inputDiv.setAttribute('placeholder', 'Tickets Sold');

        const buttonDiv = document.createElement('button');
        buttonDiv.textContent = 'Archive';
        buttonDiv.addEventListener('click', archive);


        div.appendChild(strongDiv);
        div.appendChild(inputDiv);
        div.appendChild(buttonDiv);

        li.appendChild(div);
        moviesUl.appendChild(li);
    }
    clearButton.addEventListener('click', clear);
    onScreenButton.addEventListener('click', createMovie);
}


//Another solution 100/100
function solve() {
    const getInputField = n =>
        document.querySelector(`#container > input[type=text]:nth-child(${n})`)
    const inputs = [getInputField(1), getInputField(2), getInputField(3)]
    const html = {
        moviesList: document.querySelector("#movies > ul"),
        archivesList: document.querySelector("#archive > ul"),
    }

    const checkValidInput = (arr, num) =>
        arr.every(x => x !== "") && !isNaN(Number(num))
    const clearInputs = arr => arr.map(x => (x.value = ""))

    function onScreenTemplate(n, h, p) {
        const wrapper = document.createElement("li")

        wrapper.innerHTML = `<span>${n}</span><strong>Hall: ${h}</strong>
<div><strong>${p.toFixed(2)}</strong><input placeholder="Tickets Sold"/>
<button>Archive</button></div>`

        return wrapper
    }

    function archivedTemplate(n, p) {
        const wrapper = document.createElement("li")

        wrapper.innerHTML = `<span>${n}</span>
<strong>Total amount: ${p.toFixed(2)}</strong>
<button>Delete</button>`

        return wrapper
    }

    document.addEventListener("click", e => {
        e.preventDefault()

        if (e.target.tagName === "BUTTON") {
            const [n, h, p] = inputs.map(x => x.value)

            const buttons = {
                "On Screen": () => {
                    if (checkValidInput([n, h, p], p)) {
                        clearInputs(inputs)
                        html.moviesList.appendChild(
                            onScreenTemplate(n, h, Number(p))
                        )
                    }
                },
                Archive: e => {
                    const ticketsSold = e.previousElementSibling.value

                    if (checkValidInput([ticketsSold], ticketsSold)) {
                        const parent = e.parentNode.parentNode
                        const name = parent.children[0].innerHTML
                        const price =
                            e.previousElementSibling.previousElementSibling
                                .innerHTML

                        html.archivesList.appendChild(
                            archivedTemplate(name, ticketsSold * Number(price))
                        )
                        parent.remove()
                    }
                },
                Delete: e => e.parentNode.remove(),
                Clear: () => (html.archivesList.innerHTML = ""),
            }

            buttons[e.target.textContent](e.target)
        }
    })
}