//this solution gives 75/100 make an issue if you can fix it. Thanks in advance!

function makeReservation() {
    const fullNameInput = document.getElementById('fullName');
    const emailInput = document.getElementById('email');
    const phoneNumberInput = document.getElementById('phoneNumber');
    const addressInput = document.getElementById('address');
    const postalCodeInput = document.getElementById('postalCode');
    const submitBtn = document.getElementById('submit');
    submitBtn.addEventListener('click', submitInfo);
    const infoPreview = document.getElementById('infoPreview');
    const editBtn = document.getElementById('edit');
    const continueBtn = document.getElementById('continue');
    const paymentDetails = document.getElementById('container');

    function submitInfo() {
        let fullName = fullNameInput.value;
        let email = emailInput.value;
        let phoneNumber = phoneNumberInput.value;
        let address = addressInput.value;
        let postalCode = postalCodeInput.value;

        if (fullName === '' || email === '') {
            return;
        }

        editBtn.removeAttribute('disabled');
        continueBtn.removeAttribute('disabled');
        submitBtn.setAttribute('disabled', "");


        editBtn.addEventListener('click', () => editInfo(fullName, email, phoneNumber, address, postalCode));
        continueBtn.addEventListener('click', () => makePayment());

        let liName = document.createElement('li');
        liName.textContent = 'Name: ' + fullName;

        let liMail = document.createElement('li');
        liMail.textContent = 'E-mail: ' + email;

        let liPhone = document.createElement('li');
        liPhone.textContent = 'Phone: ' + phoneNumber;

        let liAddress = document.createElement('li');
        liAddress.textContent = 'Address: ' + address;

        let liPostal = document.createElement('li');
        liPostal.textContent = 'Postal Code: ' + postalCode;

        infoPreview.appendChild(liName);
        infoPreview.appendChild(liMail);
        infoPreview.appendChild(liPhone);
        infoPreview.appendChild(liAddress);
        infoPreview.appendChild(liPostal);

        fullNameInput.value = '';
        emailInput.value = '';
        phoneNumberInput.value = '';
        addressInput.value = '';
        postalCodeInput.value = '';
    }


    function editInfo(fullName, email, phoneNumber, address, postalCode) {
        editBtn.setAttribute('disabled', '');
        continueBtn.setAttribute('disabled', '');
        submitBtn.removeAttribute('disabled');

        fullNameInput.value = fullName;
        emailInput.value = email;
        phoneNumberInput.value = phoneNumber;
        addressInput.value = address;
        postalCodeInput.value = postalCode;

        infoPreview.innerHTML = '';
    }


    function makePayment() {
        editBtn.setAttribute('disabled', '');
        continueBtn.setAttribute('disabled', '');
        submitBtn.setAttribute('disabled', '');


        let h2 = document.createElement('h2');
        h2.textContent = 'Payment details';

        let select = document.createElement('select');
        select.id = 'paymentOptions';
        select.className = 'custom-select';
        select.addEventListener('change', () => getPaymentOption());


        let option1 = document.createElement('option');
        option1.setAttribute('selected', '');
        option1.setAttribute('disabled', '');
        option1.setAttribute('hidden', '');
        option1.textContent = 'Choose';


        let option2 = document.createElement('option');
        option2.value = 'creditCard';
        option2.textContent = 'Credit Card';

        let option3 = document.createElement('option');
        option3.value = 'bankTransfer';
        option3.textContent = 'Bank Transfer';

        let div = document.createElement('div');
        div.id = 'extraDetails';

        select.appendChild(option1);
        select.appendChild(option2);
        select.appendChild(option3);

        paymentDetails.appendChild(h2);
        paymentDetails.appendChild(select);
        paymentDetails.appendChild(div);
    }


    function getPaymentOption() {
        const paymentOption = document.getElementById('paymentOptions');
        const extraDetails = document.getElementById('extraDetails');

        if (paymentOption.value === 'creditCard') {


            let div1 = document.createElement('div');
            div1.className = 'inputLabel';
            div1.textContent = "Card Number";
            let input1 = document.createElement('input');
            div1.appendChild(input1);

            let br1 = document.createElement('br');
            let div2 = document.createElement('div');
            div2.className = 'inputLabel';
            div2.textContent = "Expiration Date";
            let input2 = document.createElement('input');
            div2.appendChild(input2);


            let br2 = document.createElement('br');
            let div3 = document.createElement('div');
            div3.className = 'inputLabel';
            div3.textContent = "Security Numbers";
            let input3 = document.createElement('input');
            div3.appendChild(input3);
            let br3 = document.createElement('br');


            let checkOutBtn = document.createElement('button');
            checkOutBtn.id = 'checkOut';
            checkOutBtn.textContent = 'Check out';
            checkOutBtn.addEventListener('click', () => cardDone(input1, input2, input3));

            extraDetails.appendChild(div1);
            extraDetails.appendChild(br1);
            extraDetails.appendChild(div2);
            extraDetails.appendChild(br2);
            extraDetails.appendChild(div3);
            extraDetails.appendChild(br3);
            extraDetails.appendChild(checkOutBtn);
        } else if (paymentOption.value === 'bankTransfer') {
            let p = document.createElement('p');
            let br = document.createElement('br');
            p.textContent += 'You have 48 hours to transfer the amount to:';
            p.appendChild(br);
            p.textContent += 'IBAN: GR96 0810 0010 0000 0123 4567 890'

            let checkOutBtn = document.createElement('button');
            checkOutBtn.id = 'checkOut';
            checkOutBtn.textContent = 'Check out';

            checkOutBtn.addEventListener('click', done)
            extraDetails.appendChild(p);
            extraDetails.appendChild(checkOutBtn);
        }
    }


    function done() {
        const wrapper = document.getElementById('wrapper');
        wrapper.innerHTML = '';

        const h4 = document.createElement('h4');
        h4.textContent = 'Thank you for your reservation!';
        wrapper.appendChild(h4);
    }

    function cardDone(firstEl, secondEl, thirdEl) {

        if (firstEl.value === '' || secondEl.value === '' || thirdEl.value === '') {
            return;
        }

        const wrapper = document.getElementById('wrapper');
        wrapper.innerHTML = '';

        const h4 = document.createElement('h4');
        h4.textContent = 'Thank you for your reservation!';
        wrapper.appendChild(h4);
    }
}

