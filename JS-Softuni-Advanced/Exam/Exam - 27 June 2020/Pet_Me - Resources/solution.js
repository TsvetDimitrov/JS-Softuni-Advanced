// The solution is 87/100 pts. Correct the solution using open issue if you can. Thank you in advance. 

function solve() {
    const allInputs = document.getElementById('container').children;
    const nameInput = allInputs[0];
    const ageInput = allInputs[1];
    const kindInput = allInputs[2];
    const currentOwnerInput = allInputs[3];
    const addButton = allInputs[4];
    const adoptionUl = document.getElementById('adoption').children[1];
    const adoptedUl = document.getElementById('adopted').children[1];


    addButton.addEventListener('click', addToAdoptSection);

    function addToAdoptSection(e) {
        e.preventDefault();
        if (nameInput.value === '' || ageInput.value === '' || kindInput.value === '' || currentOwnerInput.value === '' || !Number(ageInput.value)) {
            return;
        }

        if(Number(ageInput.value) < 0){
            return;
        }


        let name = nameInput.value;
        let age = ageInput.value;
        let kind = kindInput.value;
        let currentOwner = currentOwnerInput.value;
        const strong1 = el('strong', name);
        const strong2 = el('strong', age);
        const strong3 = el('strong', kind);

        const p = el('p');
        p.appendChild(strong1);
        p.innerHTML += ' is a ';


        p.appendChild(strong2);
        p.innerHTML += ' year old ';
        p.appendChild(strong3);

        const span = el('span', `Owner: ${currentOwner}`);
        const button = el('button', 'Contact with owner');
        button.addEventListener('click', () => takePet(li, button));
        const li = el('li');
        li.appendChild(p);
        li.appendChild(span);
        li.appendChild(button);

        adoptionUl.appendChild(li);



        nameInput.value = '';
        ageInput.value = '';
        kindInput.value = '';
        currentOwnerInput.value = '';
    }

    function takePet(li, button) {
        button.remove();
        let div = el('div');
        let input = el('input');
        input.setAttribute('placeholder', 'Enter your names');
        let newBtn = el('button', 'Yes! I take it!');
        newBtn.addEventListener('click', () => adopted(input.value, li));
        div.appendChild(input);
        div.appendChild(newBtn);
        li.appendChild(div);
    }

    function adopted(nameAdopter, li) {

        if(nameAdopter.value === ''){
            
            return;
        }
        
        let name = li.children[0].children[0].textContent;
        let age = li.children[0].children[1].textContent;
        let kind = li.children[0].children[2].textContent;

        let strong1 = el('strong', name);
        let strong2 = el('strong', age);
        let strong3 = el('strong', kind);

        let p = el('p');
        p.appendChild(strong1);
        p.innerHTML += ' is a ';
        p.appendChild(strong2);
        p.innerHTML += ' year old ';
        p.appendChild(strong3);


        const span = el('span', `New Owner: ${nameAdopter}`);
        const newButton = el('button', 'Checked');

        const newLi = el('li');
        newLi.appendChild(p);
        newLi.appendChild(span);
        newLi.appendChild(newButton);
        adoptedUl.appendChild(newLi);
        newButton.addEventListener('click', removePet);
        li.remove();
    }

    function removePet(e) {
        e.target.parentNode.remove();
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

