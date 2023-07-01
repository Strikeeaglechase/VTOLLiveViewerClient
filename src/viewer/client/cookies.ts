
import { HCUser, UserScopes } from "../../../../VTOLLiveViewerCommon/dist/src/shared.js";

const authCookieKey = "user_token";

function parseJwt(token: string) {
	const base64Url = token.split('.')[1];
	const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
	const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
		return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
	}).join(''));

	return JSON.parse(jsonPayload);
}

function createCookie(name: string, value: string, expire_ms = 0, domain = "") {
	let expires = "";
	if (expire_ms) {
		const date = new Date();
		date.setTime(Date.now() + expire_ms);
		// expires = "; expires=" + date.toUTCString();
		expires = `; expires=${date.toUTCString()}`;
	}

	// document.cookie = name + "=" + value + expires + "; path=/";
	document.cookie = `${name}=${value}${expires}; path=/; domain=${domain}`;
}

function readCookie(name: string) {
	const nameEQ = name + "=";
	const ca = document.cookie.split(';');
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
}

function eraseCookie(name: string, domain: string) {
	createCookie(name, "", -1, domain);
}

function setNewUserToken(token: string) {
	createCookie(authCookieKey, token, 1000 * 60 * 60 * 24 * 14, `.${window.location.hostname}`);
}

function readUserKey() {
	return readCookie(authCookieKey);
}

function isLoggedIn() {
	return readUserKey() != null;
}

function getLoggedInUser(): HCUser | null {
	const token = readUserKey();
	if (token) {
		return parseJwt(token);
	}
	return null;
}

function hasPerm(perm: UserScopes) {
	const user = getLoggedInUser();
	// console.log(user);
	if (user) {
		// console.log(perm, user.scopes.includes(perm));
		return user.scopes.includes(perm);
	}
	return false;
}

export { parseJwt, createCookie, readCookie, eraseCookie, isLoggedIn, getLoggedInUser, hasPerm, readUserKey, setNewUserToken };