export const IS_DEV = false;
if (IS_DEV) console.warn(`-- Headless Client Development mode enable --`);
export const USE_TIMED_LOG = false;

export const API_URL = IS_DEV ? "http://localhost:8010" : "https://api.vtolvr.live";
export const WS_URL = IS_DEV ? "ws://localhost" : "wss://alpha.vtolvr.live";
export const IS_ALPHA = true;