function solution() {
    const input = document.querySelector(`div input`);
    const addBtn = document.querySelector(`div button`);
    const sections = document.querySelectorAll(`section ul`);
    const listGifts = sections[0];
    const sentGifts = sections[1];
    const discardedGifts = sections[2];

    function el(type, content, addClass){
        let result = document.createElement(type);
        result.textContent = content;

        if(addClass){
            result.className = addClass;
        }
        return result;
    }

    addBtn.addEventListener('click', listGift);

    function listGift(e){
        if(input.value === ''){
            return;
        }
        let giftName = input.value;
        input.value = '';
        const sendButton = el('button', 'Send', 'sendButton');
        sendButton.addEventListener('click', () => sendGift(giftName, li));
        const discardButton = el('button', 'Discard', 'discardButton');
        discardButton.addEventListener('click', () => discardGift(giftName, li))
        const li = el('li', giftName);

        li.appendChild(sendButton);
        li.appendChild(discardButton);

        listGifts.appendChild(li);    

        sortGifts();
    }
    
    
    function sendGift(input, li){
        li.remove();
        const elem = el('li', input, 'sentGifts');
        sentGifts.appendChild(elem);
    }


    function discardGift(input, li){
        li.remove();
        const elem = el('li', input, 'sentGifts');
        discardedGifts.appendChild(elem);
    }

    function sortGifts(){
        Array.from(listGifts.children).sort((a, b) => a.textContent.localeCompare(b.textContent)).forEach((g) => {
           listGifts.appendChild(g);
        })
    }
}