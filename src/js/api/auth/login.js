import { API_AUTH_LOGIN } from "../constants.js";
import { save } from "../storage/save.js";
import { headers } from "../headers.js";

export async function login( {email, password} ) {
    const response = await fetch(API_AUTH_LOGIN, {
        headers: headers(true),
        method: "POST",
        body: JSON.stringify({email, password})
    });

    if (response.ok) {
        const {accessToken, ...profile} = (await response.json()).data;
        save ("token", accessToken);
        save ("profile", profile);
        return profile;
    }

    throw new Error ("Could not login the account")

}