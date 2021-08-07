import { html } from '../../node_modules/lit-html/lit-html.js';
import { getMemeById, deleteMemeById } from '../api/data.js';


const detailsTemplate = (isOwner, onDelete, meme) => html`
<section id="meme-details">
    <h1>Meme Title: ${meme.title}

    </h1>
    <div class="meme-details">
        <div class="meme-img">
            <img alt="meme-alt" src=${meme.imageUrl}>
        </div>
        <div class="meme-description">
            <h2>Meme Description</h2>
            <p>
                ${meme.description}
            </p>

            ${isOwner ? html` <a class="button warning" href="/edit/${meme._id}">Edit</a>
            <button @click=${onDelete} class="button danger" href="javascript:void(0)">Delete</button>` : ''}


        </div>
    </div>
</section>`


export async function detailsPage(ctx) {
    const id = ctx.params.id;
    const meme = await getMemeById(id);

    const isOwner = sessionStorage.getItem('userId') === meme._ownerId;

    ctx.render(detailsTemplate(isOwner, onDelete, meme));

    async function onDelete(e) {
        const confirmed = confirm('Are you sure?');
        if (confirmed) {
            await deleteMemeById(id);
            ctx.page.redirect('/catalog');
        }
    }

}