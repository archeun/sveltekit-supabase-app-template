import {goto} from '$app/navigation';

export function routeToPage(route, replaceState) {
    goto(route, {replaceState})
}