import { headers } from "./headers";

export async function authFetch(url, options = {}) {
    const response = await fetch(url, {
        ...options,
        headers: headers(Boolean(options.body)),
    });

    if (!response.ok) {
        const errorText = await response.text();
        console.error("Error response:", errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response;
}