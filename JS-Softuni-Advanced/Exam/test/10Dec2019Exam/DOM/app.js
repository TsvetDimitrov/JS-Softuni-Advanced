function solution() {
    document.querySelector('div > button').addEventListener('click', () => {
        let giftName = document.querySelector('input[placeholder="Gift name"]');
        const listGifts = document.querySelector('.card > ul');

        if(giftName.value == ''){
            return;
        }

        const li = el('li', giftName.value, 'gift');
        const sendBtn = el('button', 'Send', 'sendButton');
        const discardBtn = el('button', 'Discard', 'discardButton');

        sendBtn.addEventListener('click', sendGift);
        discardBtn.addEventListener('click', discardGift);

        li.appendChild(sendBtn);
        li.appendChild(discardBtn);


        listGifts.appendChild(li);
        giftName.value = '';

        const sections = document.querySelectorAll(`section ul`);
        const listGiftss = sections[0];
        Array.from(listGiftss.children).sort((a, b) => a.textContent.localeCompare(b.textContent)).forEach((li) => {
            listGiftss.appendChild(li);
        });
    });

    function discardGift(e) {
        let li = e.target.parentNode;

        e.target.parentNode.children[0].remove();
        e.target.parentNode.children[0].remove();
        let liText = li;
        li.remove();

        const discardedGifts = document.querySelectorAll('section[class="card"]')[3];
        let ul = discardedGifts.querySelector('ul');
        ul.className = 'sentGifts';

        ul.appendChild(liText);
    }


    function sendGift(e) {
        let li = e.target.parentNode;

        e.target.parentNode.children[1].remove();
        e.target.parentNode.children[0].remove();
        let liText = li;
        li.remove();

        const sendGifts = document.querySelectorAll('section[class="card"]')[2];
        let ul = sendGifts.querySelector('ul');
        ul.className = 'sentGifts';

        ul.appendChild(liText);
    }

    function el(type, content, addClass, id) {
        let result = document.createElement(type);
        result.textContent = content;

        if (addClass) {
            result.className = addClass;
        }

        if (id) {
            result.id = id;
        }
        return result;
    }
}