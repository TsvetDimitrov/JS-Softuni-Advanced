import {html, render} from '../node_modules/lit-html/lit-html.js';
import {contacts} from './contacts.js';



const cardTemplate = (data) =>html `
<div class="contact card">
    <div>
        <i class="far fa-user-circle gravatar"></i>
    </div>
    <div class="info">
        <h2>Name: ${data.name}</h2>
        <button @click=${onclick} class="detailsBtn">Details</button>
        <div class="details" id="${data.id}">
            <p>Phone number: ${data.phoneNumber}</p>
            <p>Email: ${data.email}</p>
        </div>
    </div>
</div>
`;



const container = document.getElementById('contacts');

const result = contacts.map(cardTemplate) //.forEach(el => container.appendChild(el));

render(result, container);


function onclick(ev){
    const element = ev.target.parentNode;
    const currentStyle = element.querySelector('.details').style.display;
    if(currentStyle === 'block'){
        element.querySelector('.details').style.display = 'none';
    }else{
        element.querySelector('.details').style.display = 'block';
    }
    
}