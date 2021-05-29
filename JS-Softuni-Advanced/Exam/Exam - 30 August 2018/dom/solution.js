function addDestination() {
    const cityInput = document.querySelectorAll('input')[0];
    const countryInput = document.querySelectorAll('input')[1];
    const seasonInput = document.getElementById('seasons');

    const summerDestCounter = document.getElementById('summer');
    const autumnDestCounter = document.getElementById('autumn');
    const winterDestCounter = document.getElementById('winter');
    const springDestCounter = document.getElementById('spring');


    const destList = document.getElementById('destinationsList');

    // console.log(cityInput.value, countryInput.value, seasonInput.value);

    if (cityInput.value === '' || countryInput.value === '' || seasonInput.value === '') {
        return;
    }
    console.log(seasonInput.value);
    let season;
    if (seasonInput.value === 'summer') {
        season = seasonInput.value = 'Summer';
        summerDestCounter.value = Number(summerDestCounter.value) + 1;
    } else if (seasonInput.value === 'autumn') {
        season = seasonInput.value = 'Autumn';
        autumnDestCounter.value = Number(autumnDestCounter.value) + 1;
    } else if (seasonInput.value === 'winter') {
        season = seasonInput.value = 'Winter';
        winterDestCounter.value = Number(winterDestCounter.value) + 1;
    } else if (seasonInput.value === 'spring') {
        season = seasonInput.value = 'Spring';
        springDestCounter.value = Number(springDestCounter.value) + 1;
    }


    let tdCityCountry = e('td', `${cityInput.value}, ${countryInput.value}`);
    let tdSeason = e('td', season);
    let tr = e('tr');

    tr.appendChild(tdCityCountry);
    tr.appendChild(tdSeason);
    destList.appendChild(tr);

    function e(type, content, addClass) {
        let result = document.createElement(type);
        result.textContent = content;

        if (addClass) {
            result.className = addClass;
        }

        return result;
    }

    cityInput.value = '';
    countryInput.value = '';
}