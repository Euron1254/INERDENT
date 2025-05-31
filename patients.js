document.addEventListener('DOMContentLoaded', function() {
    const patientsTableBody = document.querySelector('#patientsTable tbody');
    const searchInput = document.getElementById('searchInput');
    const logoutButton = document.getElementById('logoutButton');
    let patients = JSON.parse(localStorage.getItem('patients')) || [];

    function renderPatients(filteredPatients) {
        patientsTableBody.innerHTML = '';
        filteredPatients.forEach((patient, index) => {
            const row = document.createElement('tr');

            row.innerHTML = `
                <td>${patient.appointmentDate || ''}</td>
                <td>${patient.patientName || ''}</td>
                <td>${patient.residence || ''}</td>
                <td>${patient.birthDate || ''}</td>
                <td>${patient.diagnosis || ''}</td>
                <td>${patient.service || ''}</td>
                <td>${patient.totalCost || ''}</td>
                <td>
                    <button class="view-btn" data-index="${index}">Shiko</button>
                    <button class="update-btn" data-index="${index}">Përditëso</button>
                    <button class="delete-btn" data-index="${index}">Fshij</button>
                </td>
            `;

            patientsTableBody.appendChild(row);
        });

        document.querySelectorAll('.delete-btn').forEach(button => {
            button.addEventListener('click', function() {
                const index = this.getAttribute('data-index');
                patients.splice(index, 1);
                localStorage.setItem('patients', JSON.stringify(patients));
                renderPatients(patients);
            });
        });

        document.querySelectorAll('.update-btn').forEach(button => {
            button.addEventListener('click', function() {
                const index = this.getAttribute('data-index');
                window.location.href = `update.html?index=${index}`;
            });
        });

        document.querySelectorAll('.view-btn').forEach(button => {
            button.addEventListener('click', function() {
                const index = this.getAttribute('data-index');
                window.location.href = `view.html?index=${index}`;
            });
        });
    }

    searchInput.addEventListener('input', function() {
        const query = searchInput.value.toLowerCase();
        const filteredPatients = patients.filter(patient => patient.patientName.toLowerCase().includes(query));
        renderPatients(filteredPatients);
    });

    renderPatients(patients);

    logoutButton.addEventListener('click', function() {
        localStorage.removeItem('isLoggedIn');
        window.location.href = 'Login.html';
    });
});