'use strict';

import { select, listen } from "./utils.js";


function setCookie(name, value, maxAge) {
    let cookieString = encodeURIComponent(name) + '=' + encodeURIComponent(value);

    cookieString += ';path=/;SameSite=Lax';

    if (maxAge) {
        cookieString += ';max-age=' + maxAge;
    }

    document.cookie = cookieString;
}

function getCookie(name) {
    const cookies = document.cookie.split(";");

    for (let cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split("=").map(c => c.trim());

        if (decodeURIComponent(cookieName) === name) {
            return decodeURIComponent(cookieValue);
        }
    }

    return null;
}