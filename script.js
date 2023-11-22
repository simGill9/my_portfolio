document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Message sent!");
    // Here you can add more functionality, like sending the data to a server
  });

document.addEventListener("DOMContentLoaded", (event) => {
  const hour = new Date().getHours();
  const welcomeText = document.getElementById("welcome-text");
  if (hour < 12) {
    welcomeText.innerText = "Good Morning! Welcome to my page.";
  } else if (hour < 18) {
    welcomeText.innerText = "Good Afternoon! Welcome to my page.";
  } else {
    welcomeText.innerText = "Good Evening! Welcome to my page.";
  }
});
