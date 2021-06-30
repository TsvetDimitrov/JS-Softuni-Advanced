import { html } from '../../node_modules/lit-html/lit-html.js';


import { getAllListings, getCollectionSize} from '../api/data.js';
import { carTemplate } from './common/car.js';

const catalogTemplate = (cars, page, pages) => html`<section id="car-listings">
    <h1>Car Listings</h1>
    <div class="listings">

    <div>Page ${page} / ${pages}</div>
        ${cars.length == 0 ? html`<p class="no-cars">No cars in database.</p>` :
        cars.map(carTemplate)}


    </div>
</section>`;


export async function catalogPage(ctx) {
    const page = Number(ctx.querystring.split('=')[1]) || 1;
    const cars = await getAllListings();
   const count = await getCollectionSize();
   const pages = Math.ceil(count / 3);
    ctx.render(catalogTemplate(cars, page, pages));
}




