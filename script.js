
document.addEventListener('DOMContentLoaded', function() {
    // Kode untuk menangani pengumuman
    const announcement = document.getElementById('announcement');
    const closeButton = document.getElementById('close-button');

    if (announcement && closeButton) {
        closeButton.addEventListener('click', function() {
            announcement.style.display = 'none';
        });
    }

    // Kode untuk menangani form kontak
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Log data to console (for demonstration purposes)
            console.log(`Name: ${name}`);
            console.log(`Email: ${email}`);
            console.log(`Message: ${message}`);

            alert('Pesan Anda telah dikirim!');
        });
    }
});