document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const patientIndex = urlParams.get('index');
    let patients = JSON.parse(localStorage.getItem('patients')) || [];
    const patient = patients[patientIndex];
    const patientReport = document.getElementById('patientReport');

    if (patient) {
        patientReport.innerHTML = `
            <h1 style="text-align: center;"><strong><i>INTERDENT<i></strong></h1>
            <br><br>
            <div style="display: flex; justify-content: space-between;">
                <h2><strong>Emri dhe mbiemri:</strong><br> ${patient.patientName}</h2>
                <h2><strong>Vendbanimi:</strong> <br>${patient.residence}</h2>
            </div>
            <div style="display: flex; justify-content: space-between;">
                <h2><strong>Data e lindjes:</strong><br> ${patient.birthDate}</h2>
                <h2><strong>Data e takimit:</strong><br> ${patient.appointmentDate}</h2>
            </div>
            <div style="display: flex; justify-content: space-between;">
                <h2><strong>Diagnoza:</strong> <br>${patient.diagnosis}</h2>
                <h2><strong>Shërbimi:</strong> <br>${patient.service}</h2>
            </div>
            <br>
            <h2 style="text-align: center;"><strong>Kosto totale:</strong> ${patient.totalCost} €</h2>
        `;
    }

    document.getElementById('printButton').addEventListener('click', function() {
        window.print();
    });
});