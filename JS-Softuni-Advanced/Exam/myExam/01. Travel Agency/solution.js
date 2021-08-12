window.addEventListener('load', solution);

function solution() {
  const fullNameInput = document.getElementById('fname');
  const emailInput = document.getElementById('email');
  const phonelInput = document.getElementById('phone');
  const addresslInput = document.getElementById('address');
  const postalCodelInput = document.getElementById('code');

  const submitBtn = document.getElementById('submitBTN');

  submitBtn.addEventListener('click', submitInfo);

  function submitInfo(e) {
    e.preventDefault();
    let editButton = document.getElementById('editBTN');
    let continueButton = document.getElementById('continueBTN');
    const ul = document.getElementById('infoPreview');

    if (!fullNameInput.value || !emailInput.value) {
      return;
    }

    editButton.disabled = false;
    continueButton.disabled = false;
    submitBtn.disabled = true;


    const liFullName = el('li', `Full Name: ${fullNameInput.value}`);
    const liEmail = el('li', `Email: ${emailInput.value}`);
    const liPhone = el('li', `Phone Number: ${phonelInput.value}`);
    const liAddress = el('li', `Adress: ${addresslInput.value}`);
    const liPostal = el('li', `Postal Code: ${postalCodelInput.value}`);
    ul.appendChild(liFullName);
    ul.appendChild(liEmail);
    ul.appendChild(liPhone);
    ul.appendChild(liAddress);
    ul.appendChild(liPostal);

    let fullName = fullNameInput.value;
    let email = emailInput.value;
    let phone = phonelInput.value;
    let address = addresslInput.value;
    let postalCode = postalCodelInput.value;

    editButton.addEventListener('click', (e) => editInfo(e, fullName, email, phone, address, postalCode));
    continueButton.addEventListener('click', continueInfo);
    fullNameInput.value = '';
    emailInput.value = '';
    phonelInput.value = '';
    addresslInput.value = '';
    postalCodelInput.value = '';

    function editInfo(e, fullName, email, phone, address, postalCode) {
      e.preventDefault();


      fullNameInput.value = fullName;
      emailInput.value = email;
      phonelInput.value = Number(phone);
      addresslInput.value = address;
      postalCodelInput.value = Number(postalCode);

      ul.innerHTML = '';
      editButton.disabled = true;
      continueButton.disabled = true;
      submitBtn.disabled = false;
    }

    function continueInfo(e) {
      e.preventDefault();
      let block = document.getElementById('block');
      block.innerHTML = '';

      let h3 = el('h3', 'Thank you for your reservation!');
      block.appendChild(h3);
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


function solution() {
  //1.Getting the user’s personal information
  let fullNameInputElement = document.getElementById('fname');
  let emailInputElement = document.getElementById('email');
  let phoneNumberInputElement = document.getElementById('phone');
  let addressInputElement = document.getElementById('address');
  let postalCodeInputElement = document.getElementById('code');
 
  let submitButtonElement = document.getElementById('submitBTN');
 
  submitButtonElement.addEventListener('click', (e) => {
    e.preventDefault();
 
    if (!fullNameInputElement.value || !emailInputElement.value) {
      return;
    }
    //2.Previewing the user’s personal information 
    submitButtonElement.disabled = true;
 
    let editButtonElement = document.getElementById('editBTN');
    editButtonElement.disabled = false;
    let continueButtonElement = document.getElementById('continueBTN');
    continueButtonElement.disabled = false;
 
    let ulElelement = document.getElementById('infoPreview');
 
    let nameLi = document.createElement('li');
    nameLi.textContent = `Full Name: ${fullNameInputElement.value}`;
 
    let emailLi = document.createElement('li');
    emailLi.textContent = `Email: ${emailInputElement.value}`;
 
    let phoneLi = document.createElement('li');
    phoneLi.textContent = `Phone Number: ${phoneNumberInputElement.value}`;
 
    let addressLi = document.createElement('li');
    addressLi.textContent = `Address: ${addressInputElement.value}`;
 
    let postalLi = document.createElement('li');
    postalLi.textContent = `Postal Code: ${postalCodeInputElement.value}`;
 
    ulElelement.appendChild(nameLi);
    ulElelement.appendChild(emailLi);
    ulElelement.appendChild(phoneLi);
    ulElelement.appendChild(addressLi);
    ulElelement.appendChild(postalLi);
    //clear input fields
    fullNameInputElement.value = '';
    emailInputElement.value = '';
    phoneNumberInputElement.value = '';
    addressInputElement.value = '';
    postalCodeInputElement.value = '';
 
 
    editButtonElement.addEventListener('click', (e) => {
      e.preventDefault();
 
      while (ulElelement.firstChild) {
        ulElelement.removeChild(ulElelement.firstChild);
      }
 
      fullNameInputElement.value = nameLi.textContent;
      emailInputElement.value = emailLi.textContent;
      phoneNumberInputElement.value = Number(phoneLi.textContent);
      addressInputElement.value = addressLi.textContent;
      postalCodeInputElement.value = Number(postalLi.textContent);
 
      submitButtonElement.disabled = false;
      editButtonElement.disabled = true;
      continueButtonElement.disabled = true;
    });
 
    continueButtonElement.addEventListener('click', (e) => {
      e.preventDefault();
 
      let mailDivElement = document.getElementById('block');
 
      while (mailDivElement.firstChild) {
        mailDivElement.removeChild(mailDivElement.firstChild);
      }
 
      let finalHeader = document.createElement('h3');
      finalHeader.textContent = 'Thank you for your reservation!';
      mailDivElement.appendChild(finalHeader);
    })
  });
}