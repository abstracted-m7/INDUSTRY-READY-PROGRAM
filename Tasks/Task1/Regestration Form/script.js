//age dropdown
window.onload = function() {
    const ageSelect = document.getElementById('age');
    for (let i = 10; i <= 100; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        ageSelect.appendChild(option);
    }
}

// Form validation
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Basic form validation
    if (!firstName || !lastName || !age || !email || !phone || !password || !confirmPassword) {
        alert('All fields are required!');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // Prepare the data to be sent
    const formData = {
        firstName: firstName,
        lastName: lastName,
        age: age,
        email: email,
        phone: phone,
        password: password
    };

    // Simulate form submission
    console.log('Submitting form data:', formData);

    // For now, just show a success message
    alert('Registration successful!');
    this.reset(); // Reset the form
});
