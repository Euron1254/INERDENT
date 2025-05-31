document.addEventListener('DOMContentLoaded', function() {
    // Redirect to login page if the user is not logged in
    if (localStorage.getItem('isLoggedIn') !== 'true') {
        window.location.href = 'Login.html';
    }

    document.getElementById('patientForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const patientName = document.getElementById('patientName').value || '';
        const birthDate = document.getElementById('birthDate').value || '';
        const residence = document.getElementById('residence').value || '';

        const patient = {
            patientName,
            birthDate,
            residence
        };

        let patients = JSON.parse(localStorage.getItem('patients')) || [];
        patients.push(patient);
        localStorage.setItem('patients', JSON.stringify(patients));

        alert('Informacioni i pacientit u ruajt me sukses!');
        document.getElementById('patientForm').reset();
    });

    const logoutButton = document.getElementById('logoutButton');
    logoutButton.addEventListener('click', function() {
        localStorage.removeItem('isLoggedIn');
        window.location.href = 'Login.html';
    });
});

