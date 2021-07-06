async function getInfo() {
    const input = document.getElementById('stopId');
    const id = input.value;

    const url = `http://localhost:3030/jsonstore/bus/businfo/` + id;
    const buses = document.getElementById('buses');

    //clearing the innerHTML and declaring it here is better, because if we had declared it in try block we 
    //wouldn't get the error message properly.
    buses.innerHTML = '';

    try {
        const response = await fetch(url);
        const data = await response.json();

        document.getElementById('stopName').textContent = data.name;
        Object.entries(data.buses).map(([bus, time]) => {
            const result = document.createElement('li');
            result.textContent = `Bus ${bus} arrives in ${time} minutes`;
            buses.appendChild(result);
        });
    } catch (error) {
        document.getElementById('stopName').textContent = 'Error';
    }
}



//solution with
//fetch, then
/*
async function getInfo() {
    const input = document.getElementById('stopId');
    const id = input.value;

    const url = `http://localhost:3030/jsonstore/bus/businfo/` + id;

    fetch(url)
        .then(body => body.json())
        .then(stopInfo => {
            let stopNameDiv = document.getElementById('stopName');
            stopNameDiv.textContent = stopInfo.name;
            let busesUl = document.getElementById('buses');

            Array.from(busesUl.querySelectorAll('li')).forEach(li => li.remove());
            Object.keys(stopInfo.buses).forEach(key => {
                let busInfoLi = docuent.createElement('li');
                busInfoLi.textContent = `Bus ${key} arrives in ${stopInfo.buses[key]}`;
                busesUl.appendChild(busInfoLi);
            })
        })
        .catch(err => {
        let stopNameDiv = document.getElementById('stopName');
            stopNameDiv.textContent = 'Error';
            let busesUl = document.getElementById('buses');
            Array.from(busesUl.querySelectorAll('li')).forEach(li => li.remove());

        });

}
*/