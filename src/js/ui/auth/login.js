import { login } from "../../api/auth/login.js";

export async function onLogin(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const account = Object.fromEntries(formData.entries());

    try {
        await login(account)
        console.log("Success");
        window.location.href = '/';
        
    } catch (error) {
        console.error("Could not login user", error);
        
    }
}