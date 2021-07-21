import auth from "./auth.js";
import create from "./pages/create.js";
import dashboard from "./pages/dashboard.js";
import details from "./pages/details.js";
import home from "./pages/home.js";
import login from "./pages/login.js";
import nav from "./pages/nav.js";
import register from "./pages/register.js";
import routing from "./routing.js";
import { emptyOutLoc } from "./utils.js";

export const serverUrl = "http://localhost:3030";

const rootSelector = "#app";
const linkItemsSelector = ".route";
const root = document.querySelector(rootSelector);
(() => {

    routing.init(document.querySelectorAll(linkItemsSelector), linkItemsSelector, changeView);
    create.init(document.querySelector("#create"));
    details.init(document.querySelector("#details"));
    dashboard.init(document.querySelector("#dashboard-holder"));
    home.init(document.querySelector("#home"));
    login.init(document.querySelector("#login"));
    nav.init(document.querySelector("nav"));
    register.init(document.querySelector("#register"));

    nav.logOut();
    routing.redirectToPage("home");
})();

async function changeView(view) {
    view = await view;
    emptyOutLoc(root);
    root.appendChild(view);
}