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

/* --------------------------------------------------
   BROWSER + OS DETECTION
-------------------------------------------------- */

function getBrowser() {
    const ua = navigator.userAgent;

    if (ua.includes("Edg")) return "Edge";
    if (ua.includes("Chrome") && !ua.includes("Edg")) return "Chrome";
    if (ua.includes("Firefox")) return "Firefox";
    if (ua.includes("Safari") && !ua.includes("Chrome")) return "Safari";

    return "Unknown Browser";
}

function getOS() {
    const ua = navigator.userAgent;

    if (ua.includes("Win")) return "Windows";
    if (ua.includes("Mac")) return "MacOS";
    if (ua.includes("Linux")) return "Linux";
    if (ua.includes("Android")) return "Android";
    if (ua.includes("iPhone") || ua.includes("iPad")) return "iOS";

    return "Unknown OS";
}