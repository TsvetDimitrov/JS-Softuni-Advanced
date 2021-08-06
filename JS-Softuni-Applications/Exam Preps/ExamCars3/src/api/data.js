import * as api from './api.js';

const host = 'http://localhost:3030'
api.settings.host = 'http://localhost:3030';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;



export async function getAllListings() {
    return await api.get(host + `/data/cars?sortBy=_createdOn%20desc`);
}

export async function createListing(obj) {
    return await api.post(host + `/data/cars`, obj);
}

export async function getCarById(id) {
    return await api.get(host + `/data/cars/` + id);
}