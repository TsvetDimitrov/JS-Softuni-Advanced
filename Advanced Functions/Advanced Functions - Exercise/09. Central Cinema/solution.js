function solve() {
    const formElements = document.querySelector('#container').children;
    const inputs = Array.from(formElements).slice(0, formElements.length - 1);
    const onScreenButton = Array.from(formElements).slice(formElements.length - 1)[0];
    const moviesUl = document.querySelector('#movies>ul');
    const archiveUl = document.querySelector('#archive>ul');
    const clearButton = document.querySelector('#archive>button');

    function clear(e){
        Array.from(e.target.parentNode.children[1].children).forEach(e=>e.remove());
        // e.target.parentNode.children[1].innerHTML = '';
    }

    function archive(e){
        const li = e.target.parentNode.parentNode;
        const div = e.target.parentNode;
        const input = div.children[1];

        if(!Number(input.value)){
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
        deleteButton.addEventListener('click',(e) => {
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

   

        if(!name || !hall || !price){
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