// Funksjon for å fjerne brukerdata fra localStorage og omdirigere til innloggingssiden
function logout() {
  // Fjerner brukerdata fra localStorage
  localStorage.removeItem("userinfo");
  localStorage.removeItem("token");

  // Vis en bekreftelsesmelding
  alert("You have been logged out.");

  // Omdiriger brukeren til innloggingssiden
  window.location.href = "/auth/login/";
}

// Legg til en klikklytter til loggut-knappen
document.addEventListener("DOMContentLoaded", () => {
  const logoutButton = document.getElementById("logoutButton");
  
  if (logoutButton) {
    logoutButton.addEventListener("click", logout);
  } else {
    console.error("Logout button not found");
  }
});