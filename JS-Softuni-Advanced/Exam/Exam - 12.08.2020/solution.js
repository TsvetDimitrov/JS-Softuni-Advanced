//Note The task is 87/100 


function solve() {
    const inputValues = document.getElementById('container');

    const nameInput = inputValues.children[0];
    const hallInput = inputValues.children[1];
    const ticketPriceInput = inputValues.children[2];
    const onScreenBtn = inputValues.children[3];
    onScreenBtn.addEventListener('click', moviesOnScreen);
    const moviesOnScreenSection = document.getElementById('movies').children[1];
    const archiveSection = document.getElementById('archive').children[1];
    const archiveButton = Array.from(document.querySelectorAll('button')).filter(x => x.textContent === 'Clear')[0];

    function moviesOnScreen(e){
        e.preventDefault();
        if(nameInput.value === '' || !hallInput.value === '' || !ticketPriceInput.value === '' || !Number(ticketPriceInput.value)){
            return;
        }
    
            let name = nameInput.value;
            let hall = hallInput.value;
            let ticketPrice = ticketPriceInput.value;
    
            const strong = el('strong', `${Number(ticketPrice).toFixed(2)}`);
            const input = el('input');
            input.placeholder = 'Tickets Sold';
            const button = el('button', 'Archive');
            button.addEventListener('click', () => addToArchive(li, input.value, Number(ticketPrice).toFixed(2), name))
            const div = el('div');
    
            div.appendChild(strong);
            div.appendChild(input);
            div.appendChild(button);
    
            
            const span = el('span', name);
            const strongLi = el('strong', `Hall: ${hall}`);
            const li = el('li');
    
            li.appendChild(span);
            li.appendChild(strongLi);
            li.appendChild(div);
    
            moviesOnScreenSection.appendChild(li);

            nameInput.value = '';
            hallInput.value = '';
            ticketPriceInput.value = '';
    }



    function addToArchive(liToRemove, quantity, price, name){
        liToRemove.remove();
        if(!Number(quantity)){
            return;
        }
        const li = el('li');
        const span = el('span', name);
        let totalPrice = Number(quantity) * Number(price);
        const strong = el('strong', `Total amount: ${Number(totalPrice).toFixed(2)}`);
        const delBtn = el('button', 'Delete');
        delBtn.addEventListener('click', () => del(li));
        li.appendChild(span);
        li.appendChild(strong);
        li.appendChild(delBtn);

        archiveSection.appendChild(li);

        archiveButton.addEventListener('click', e => {
            document.querySelector(`#archive ul`).innerHTML = '';
        });

    }
    //We can use this method to delete all. 
    // function delArchive(arr){
    //     Array.from(arr).forEach((e) => {
    //         e.remove();
    //     });
    // }


    function del(li){
        li.remove();
    }

    function el(type, content, addClass){
        let result = document.createElement(type);
        result.textContent = content;

        if(addClass){
            result.className = addClass;
        }

        return result;
    }
}


