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