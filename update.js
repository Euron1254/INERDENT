document.addEventListener('DOMContentLoaded', function() {
    const updatePatientForm = document.getElementById('updatePatientForm');
    const urlParams = new URLSearchParams(window.location.search);
    const patientIndex = urlParams.get('index');
    let patients = JSON.parse(localStorage.getItem('patients')) || [];
    const patient = patients[patientIndex];

    if (patient) {
        document.getElementById('patientName').value = patient.patientName || '';
        document.getElementById('residence').value = patient.residence || '';
        document.getElementById('birthDate').value = patient.birthDate || '';
        document.getElementById('appointmentDate').value = patient.appointmentDate || '';
        document.getElementById('diagnosis').value = patient.diagnosis || '';
        document.getElementById('service').value = patient.service || '';
        document.getElementById('totalCost').value = patient.totalCost || '';
    }

    updatePatientForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const updatedPatient = {
            patientName: document.getElementById('patientName').value,
            residence: document.getElementById('residence').value,
            birthDate: document.getElementById('birthDate').value,
            appointmentDate: document.getElementById('appointmentDate').value,
            diagnosis: document.getElementById('diagnosis').value,
            service: document.getElementById('service').value,
            totalCost: document.getElementById('totalCost').value
        };

        patients[patientIndex] = updatedPatient;
        localStorage.setItem('patients', JSON.stringify(patients));

        alert('Informacioni i pacientit u përditësua me sukses!');
        window.location.href = 'patients.html';
    });
});