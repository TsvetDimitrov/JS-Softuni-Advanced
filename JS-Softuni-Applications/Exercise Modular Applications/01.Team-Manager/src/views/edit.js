import { until } from '../../node_modules/lit-html/directives/until.js';
import { html } from '../../node_modules/lit-html/lit-html.js';
import { getTeamById, editTeam } from '../api/data.js';
import { loaderTemplate } from './common/loader.js';

const editTemplate = (team, onSubmit, errorMessage) => html`
<section id="edit">
    <article class="narrow">
        <header class="pad-med">
            <h1>Edit Team</h1>
        </header>
        <form @submit=${onSubmit} id="edit-form" class="main-form pad-large">
            ${errorMessage ? html`<div class="error">${errorMessage}</div>` : ''}
            <label>Team name: <input type="text" name="name" .value=${team.name}></label>
            <label>Logo URL: <input type="text" name="logoUrl" .value=${team.logoUrl}></label>
            <label>Description: <textarea name="description" .value=${team.description}></textarea></label>
            <input class="action cta" type="submit" value="Save Changes">
        </form>
    </article>
</section>`;


export async function editPage(ctx) {
    const teamId = ctx.params.id;
    ctx.render(until(populateTemplate(), loaderTemplate()));

    async function onSubmit(event) {
        event.preventDefault();
    }

    async function populateTemplate() {
        const team = await getTeamById(teamId);
        return editTemplate(team, onSubmit)
    }
}

