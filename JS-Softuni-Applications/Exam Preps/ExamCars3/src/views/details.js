import { html } from '../../node_modules/lit-html/lit-html.js';




const detailsTemplate = (isOwner, car, onDelete) => html`
<section id="listing-details">
    <h1>Details</h1>
    <div class="details-info">
        <img src="/images/audia3.jpg">
        <hr>
        <ul class="listing-props">
            <li><span>Brand:</span>${car.brand}</li>
            <li><span>Model:</span>${car.model}</li>
            <li><span>Year:</span>${car.model}</li>
            <li><span>Price:</span>${car.price}$</li>
        </ul>

        <p class="description-para">${car.description}</p>

        <div class="listings-buttons">
            <a href="/edit/${car._id}" class="button-list">Edit</a>
            <a href="javascript:void(0)" @click=${onDelete} class="button-list">Delete</a>
        </div>
    </div>
</section>
`;




export async function detailsPage(ctx) {
    const carId = ctx.params.id;
    const car = await getCarById(carId);
    let isOwner = false;

    
    ctx.render(detailsTemplate(isOwner, car, onDelete));

    async function onDelete() {

    }

}