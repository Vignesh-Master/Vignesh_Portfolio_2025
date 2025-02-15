document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("sendMessageBtn").addEventListener("click", function () {
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let subject = document.getElementById("subject").value.trim();
        let message = document.getElementById("message").value.trim();
        let responseMessage = document.getElementById("responseMessage");

        if (!name || !email || !subject || !message) {
            alert("Please fill out all fields.");
            return;
        }

        let endpoint = "https://api.web3forms.com/submit";

        let formData = {
            access_key: "5bdcaefe-7f40-4fca-8f08-12a09e290773",
            name: name,
            email: email,
            subject: subject,
            message: message,
        };
        

        fetch(endpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        })
            .then(response => response.json())
            .then(result => {
                if (result.success) {
                    responseMessage.style.display = "block";
                    responseMessage.textContent = "Message sent successfully!";
                    responseMessage.style.color = "green";

                    document.getElementById("name").value = "";
                    document.getElementById("email").value = "";
                    document.getElementById("subject").value = "";
                    document.getElementById("message").value = "";
                } else {
                    responseMessage.style.display = "block";
                    responseMessage.textContent = "Error sending message. Try again!";
                    responseMessage.style.color = "red";
                }
            })
            .catch(error => {
                responseMessage.style.display = "block";
                responseMessage.textContent = "Something went wrong!";
                responseMessage.style.color = "red";
            });
    });
});


