const box = document.getElementById('errorBox');


export function notify(message) {
    box.innerHTML = `<span>MESSAGE</span>`;
    box.style.display = 'block';

    setTimeout(() => {
        box.style.display = 'none';
    }, 3000)
};