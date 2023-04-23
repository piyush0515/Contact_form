const form = document.querySelector("#contact-form");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const message = document.querySelector("#message").value;
  
  // Send form data to server or do something else with it
  console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
  
  // Reset form fields
  form.reset();
});



const form = document.getElementById("contact-form");
const statusMessage = document.getElementById("status-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const xhr = new XMLHttpRequest();
  xhr.open("POST", form.action);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      statusMessage.innerHTML = "Thank you for contacting us!";
      form.reset();
    } else {
      statusMessage.innerHTML = "There was a problem submitting the form.";
    }
  };
  xhr.send(new URLSearchParams(formData).toString());
});

/*
const form = document.getElementById('contact-form');

form.addEventListener('submit', event => {
    event.preventDefault();
    const name = form.elements['name'].value;
    const email = form.elements['email'].value;
    const message = form.elements['message'].value;

    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);
});*/
