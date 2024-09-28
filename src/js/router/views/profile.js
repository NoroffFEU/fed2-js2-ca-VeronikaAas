import { readPostsByUser } from "../../api/post/read";
import { readProfile } from "../../api/profile/read";
import { setLogoutListener } from "../../ui/global/logout";
import { makePost } from "../../ui/post/read";
import { onUpdateProfile } from "../../ui/profile/update";
import { authGuard } from "../../utilities/authGuard";

const form = document.forms.updateProfile;

form.addEventListener("submit", onUpdateProfile);

authGuard();

setLogoutListener();

const readProfileInfo = async () => {
  const storedUserInfo = localStorage.getItem("userInfo");

  // Sjekk om det er lagret brukerinfo
  //if (!storedUserInfo) {
    //console.error("No user info found in localStorage.");
    //return; // Stopp videre utførelse hvis ingen bruker er lagret
  //}

  const username = JSON.parse(storedUserInfo);

  // Sjekk om username faktisk inneholder name-feltet
  //if (!username || !username.name) {
    //console.error("Invalid user info in localStorage.");
    //return; // Stopp hvis userInfo ikke inneholder navn
  //}

  // Nå er vi sikre på at username.name eksisterer
  console.log("Fetching profile for:", username.name);

  try {
    const data = await readProfile(username.name);
    const userPosts = await readPostsByUser(username.name);
    console.log(data);
  } catch {

    }

  const bannerDiv = document.getElementById("profileBanner");
  const profileImageDiv = document.getElementById("profileImage");
  const nameDiv = document.getElementById("username");
  const bioDiv = document.getElementById("bio");

  const banner = document.createElement("img");
  banner.src = data.banner.url;
  banner.alt = data.banner.alt;
  banner.className = "image";

  const profileImage = document.createElement("img");
  profileImage.src = data.avatar.url;
  profileImage.alt = data.avatar.alt;
  profileImage.className = "image";

  const name = document.createElement("h2");
  name.innerText = data.name;

  const bio = document.createElement("p");
  bio.innerText = data.bio;

  bannerDiv.appendChild(banner);
  profileImageDiv.appendChild(profileImage);
  nameDiv.appendChild(name);
  bioDiv.appendChild(bio);

  makePost(userPosts, "userPosts");
};

readProfileInfo();