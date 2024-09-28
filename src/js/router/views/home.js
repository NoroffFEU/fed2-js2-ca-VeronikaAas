import { authGuard } from "../../utilities/authGuard";
import { renderPosts } from "../../ui/post/read";


authGuard();

renderPosts();

// Vent på at DOM-en er klar
//document.addEventListener("DOMContentLoaded", () => {
    //setLogoutListener(); // Sett opp logout-lister
//});