import { html } from '../../node_modules/lit-html/lit-html.js';
import { editMeme, getMemeById } from '../api/data.js';
import { notify } from '../notification.js';



const editTemplate = (onSubmit, meme) => html`
        <section id="edit-meme">
            <form @submit=${onSubmit} id="edit-form">
                <h1>Edit Meme</h1>
                <div class="container">
                    <label for="title">Title</label>
                    <input id="title" type="text" placeholder="Enter Title" name="title" .value=${meme.title}>
                    <label for="description">Description</label>
                    <textarea id="description" placeholder="Enter Description" name="description" .value=${meme.description}>
                                        </textarea>
                    <label for="imageUrl">Image Url</label>
                    <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl" .value=${meme.imageUrl}>
                    <input type="submit" class="registerbtn button" value="Edit Meme">
                </div>
            </form>
        </section>`;





export async function editPage(ctx) {
    const memeId = ctx.params.id;
    const meme = await getMemeById(memeId);

    ctx.render(editTemplate(onSubmit, meme));

    async function onSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const title = formData.get('title').trim();
        const description = formData.get('description').trim();
        const imageUrl = formData.get('imageUrl').trim();

        try {
            if (!title || !description || !imageUrl) {
               throw new Error('All fields are required!');
            }

            await editMeme(memeId, { title, description, imageUrl });
            ctx.page.redirect('/details/' + memeId);

        } catch (err) {
            notify(err.message);
        }

    }
}