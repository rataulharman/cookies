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


const cookieModal = select("#cookieModal");
const settingsModal = select("#settingsModal");

const acceptAllBtn = select("#acceptAllBtn");
const settingsBtn = select("#settingsBtn");
const saveSettingsBtn = select("#saveSettingsBtn");

const browserToggle = select("#browserToggle");
const osToggle = select("#osToggle");
const screenToggle = select("#screenToggle");

const COOKIE_LIFETIME = 17;


window.addEventListener("DOMContentLoaded", () => {

    const hasCookie =
        getCookie("browser") ||
        getCookie("os") ||
        getCookie("screen") ||
        getCookie("reject");

    if (!hasCookie) {
        setTimeout(() => cookieModal.showModal(), 600);
    }
});


listen("click", acceptAllBtn, () => {

    setCookie("browser", getBrowser(), COOKIE_LIFETIME);
    setCookie("os", getOS(), COOKIE_LIFETIME);

    const screenData = `${screen.width}x${screen.height}`;
    setCookie("screen", screenData, COOKIE_LIFETIME);

    cookieModal.close();
});


listen("click", settingsBtn, () => {
    cookieModal.close();
    settingsModal.showModal();
});


listen("click", saveSettingsBtn, () => {

    let createdCookie = false;

    if (browserToggle.checked) {
        setCookie("browser", getBrowser(), COOKIE_LIFETIME);
        createdCookie = true;
    }

    if (osToggle.checked) {
        setCookie("os", getOS(), COOKIE_LIFETIME);
        createdCookie = true;
    }

    if (screenToggle.checked) {
        const screenData = `${screen.width}x${screen.height}`;
        setCookie("screen", screenData, COOKIE_LIFETIME);
        createdCookie = true;
    }

    if (!createdCookie) {
        setCookie("reject", "true", COOKIE_LIFETIME);
    }

    settingsModal.close();
});
