import { redirect, error } from '@sveltejs/kit';
import { Dependencies } from '$lib/constants';
import { api } from '$lib/stores/api';
import type { LayoutLoad } from './$types';

export const ssr = false;

const projects = [{
    name: "prj1"
}, {
    name: "prj2"
}, {
    name: "prj3"
}, {
    name: "prj4"
}, {
    name: "prj5"
}]

export const load: LayoutLoad = async ({ parent, fetch, params, depends, url }) => {
    await parent();

    console.log("layout:project");

    return {
        projects
    };
}