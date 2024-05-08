import { ENV_IS_DEV } from "./isDev";

export const IS_DEV = ENV_IS_DEV;
if (IS_DEV) console.warn(`-- Headless Client Development mode enable --`);
export const USE_TIMED_LOG = false;

export const API_URL = IS_DEV ? "http://localhost:8010/api" : "https://vtolvr.live/api";
export const WS_URL = IS_DEV ? "ws://localhost:8010" : "wss://vtolvr.live";
export const LOGIN_URL = IS_DEV ? "http://localhost:8010/api/auth/steam/login" : "https://vtolvr.live/api/auth/steam/login";
export const LOGOUT_URL = IS_DEV ? "http://localhost:8010/api/auth/logout" : "https://vtolvr.live/api/auth/logout";
export const REFRESH_URL = IS_DEV ? "http://localhost:8010/api/auth/refresh" : "https://vtolvr.live/api/auth/refresh";
// export const STORAGE_URL = IS_DEV ? "http://127.0.1.1:8014" : "https://storage.vtolvr.live";
export const STORAGE_URL = IS_DEV ? "http://localhost:8010/api/storage" : "https://vtolvr.live/api/storage";
export const COOKIE_DOMAIN = IS_DEV ? "localhost" : ".vtolvr.live";
export const IS_ALPHA = true;
