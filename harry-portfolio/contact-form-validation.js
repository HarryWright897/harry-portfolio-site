document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); //Prevent actual submission

    //Check if form is valid
    if (!this, this.checkValidity()) {
        this.classList.add("was-validated");
        return;
    }

    //Simulate form submission sucess 
    setTimeout(() => {
        var thankYouModal = new bootstrap.Modal(document.getElementById('thankYouModal'));
        thankYouModal.show();

        //Reset the form after showing the modal
        this.reset();
        this.classList.remove("was-validated");
    }, 500)
});
