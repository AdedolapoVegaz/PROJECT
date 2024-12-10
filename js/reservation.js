document.getElementById('reservationForm').addEventListener('submit', function (e) {
    const email = document.getElementById('email').value;
    const date = new Date(document.getElementById('date').value);

    if (!email.includes('@')) {
        alert('Please enter a valid email.');
        e.preventDefault();
    }

    if (date < new Date()) {
        alert('Date cannot be in the past.');
        e.preventDefault();
    }
    
    if (date > new Date()) {
        alert('Your spot is reserved.');
        e.preventDefault();
    }
});
