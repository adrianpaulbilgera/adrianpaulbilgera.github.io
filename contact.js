// Initialize EmailJS
(function() {
  emailjs.init("7gXrF2SOE8tHuPMDi"); // 🔹 Replace with your EmailJS Public Key
})();

// Handle form submission
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent default refresh

  emailjs.sendForm("service_zhjv4gx", "template_0cba072", this)
    .then(function() {
      alert("✅ Message sent successfully!");
      document.getElementById("contact-form").reset(); // Clear form after success
    }, function(error) {
      alert("❌ Failed to send message: " + JSON.stringify(error));
    });
});
