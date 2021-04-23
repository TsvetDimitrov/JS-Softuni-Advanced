function encodeAndDecodeMessages() {
    const textAreas = document.querySelectorAll('textarea');
    const buttons = document.querySelectorAll('button');

    const map = {
        encode: {
            text: textAreas[0],
            button: buttons[0],
            func: (char) => {
                return String.fromCharCode(char.charCodeAt(0)+1);
            }
        },
        decode: {
            text: textAreas[1],
            button: buttons[1],
            func: (char) => {
                return String.fromCharCode(char.charCodeAt(0)-1);
            }
        }
    };
    document.getElementById('main').addEventListener('click', function(e) {
        if(e.target.tagName !== 'BUTTON'){
            return;
        }

        const type = e.target.textContent.toLowerCase().trim().includes('encode') ? 'encode' : 'decode';

        const message = map[type].text.value.split('').map(map[type].func).join('');


        map.encode.text.value = '';
        map.decode.text.value = message;

    });
}




//solution with 2 eventlisteners:


function encodeAndDecodeMessagesTEST() {
    const textAreas = document.querySelectorAll('textarea');
    const buttons = document.querySelectorAll('button');


    buttons[0].addEventListener('click', function (e) {
        const message = textAreas[0].value.split('').map((char) => String.fromCharCode(char.charCodeAt(0) + 1)).join('');
        textAreas[0].value = '';
        textAreas[1].value = message;
    });

    buttons[1].addEventListener('click', function (e) {
        const message = textAreas[1].value.split('').map((char) => String.fromCharCode(char.charCodeAt(0) - 1)).join('');
        textAreas[1].value = message;
    })
}