function attachEvents() {
    document.querySelector('.load').addEventListener('click', getAllCatches);
    document.getElementById('loginBtn').addEventListener('click', login);
}

attachEvents();

async function getAllCatches() {
    let url = 'http://localhost:3030/data/catches';
    const data = await fetch(url);
    const catches = await data.json();


    const catchesList = document.getElementById('catches');
    catchesList.innerHTML = '';
    catches.forEach((obj) => {
        const result = el(obj);
        catchesList.innerHTML += result;
    });

}

async function login() {
    
}






function el(obj) {
    let result = `
    <div class="catch" id="${obj._ownerId}">
        <label>Angler</label>
        <input type="text" class="angler" value="${obj.angler}" />
        <hr>
        <label>Weight</label>   
        <input type="number" class="weight" value="${obj.weight}" />
        <hr>
        <label>Species</label>
        <input type="text" class="species" value="${obj.species}" />
        <hr>
        <label>Location</label>
        <input type="text" class="location" value="${obj.location}" />
        <hr>
        <label>Bait</label>
        <input type="text" class="bait" value="${obj.bait}" />
        <hr>
        <label>Capture Time</label>
        <input type="number" class="captureTime" value="${obj.captureTime}" />
        <hr>
        <button disabled class="update">Update</button>
        <button disabled class="delete">Delete</button>
</div>
`
    return result;
}

