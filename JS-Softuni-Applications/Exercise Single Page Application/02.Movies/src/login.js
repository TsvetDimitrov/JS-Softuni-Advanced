let main;
let section;


export function setupLogin(mainTarget, sectionTarget){
    main = mainTarget;
    section = sectionTarget;

    const form = section.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        // const email = 
    });
}


export async function showLogin(){
    main.innerHTML = '';
    main.appendChild(section);
}
