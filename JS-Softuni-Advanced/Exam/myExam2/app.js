window.addEventListener('load', solve);

function solve() {
    let modelInput = document.getElementById('model');
    let yearInput = document.getElementById('year');
    let descriptionInput = document.getElementById('description');
    let priceInput = document.getElementById('price');
    const listFurnitures = document.getElementById('furniture-list');
    
    const totalPrice = document.querySelector('.total-price');


    document.getElementById('add').addEventListener('click', addFurniture);

    function addFurniture(e) {
        e.preventDefault();

        let model = modelInput.value;
        let year = yearInput.value;
        let description = descriptionInput.value;
        let price = priceInput.value;


        if (!model || !year || !description || !price) {
            return;
        }

        if (year < 0 || price < 0) {
            return;
        }

        const tr = el('tr', undefined, 'info');
        const td1 = el('td', model);
        const td2 = el('td', Number(price).toFixed(2));

        tr.appendChild(td1);
        tr.appendChild(td2);
        const td3 = el('td');
        const moreBtn = el('button', 'More Info', 'moreBtn');
        moreBtn.addEventListener('click', moreInfo);
        const buyBtn = el('button', 'Buy it', 'buyBtn');
        buyBtn.addEventListener('click', buyItem);
        td3.appendChild(moreBtn);
        td3.appendChild(buyBtn);

        tr.appendChild(td3);


        const tr2 = el('tr', undefined, 'hide');
        const td4 = el('td', `Year: ${year}`);
        const td5 = el('td', `Description: ${description}`);
        td5.setAttribute('colspan', '3')
        tr2.appendChild(td4);
        tr2.appendChild(td5);

        listFurnitures.appendChild(tr);
        listFurnitures.appendChild(tr2);

        modelInput.value = '';
        yearInput.value = '';
        descriptionInput.value = '';
        priceInput.value = '';

        function moreInfo(e) {
            const btn = e.target;
            if (btn.textContent == 'More Info') {
                btn.textContent = 'Less Info';
                const tr = e.target.parentNode.parentNode;
                tr.nextSibling.style.display = 'contents';
            } else {
                btn.textContent = 'More Info';
                const tr = e.target.parentNode.parentNode;
                tr.nextSibling.style.display = 'none';
            }
        }

        function buyItem(e) {
            e.preventDefault();
            const firstTr = e.target.parentNode.parentNode;
            const secondTr = firstTr.nextSibling;

            const price = firstTr.querySelectorAll('td')[1].textContent;
            console.log(price);

            let totalPrice = document.querySelector('.total-price');
            console.log(totalPrice);
            let sum = Number(price) + Number(totalPrice.textContent);
            console.log(sum);
            totalPrice.textContent = sum.toFixed(2);
            console.log(totalPrice);
            
            firstTr.remove();
            secondTr.remove();

        }
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
