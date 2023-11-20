document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Message sent!");
    // Here you can add more functionality, like sending the data to a server
  });
