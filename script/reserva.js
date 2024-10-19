const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
const horarios = [
    "09:30 - 11:00", "11:00 - 12:30", "12:30 - 14:00",
    "17:00 - 18:30", "18:30 - 20:00", "20:00 - 21:30", "21:30 - 23:00"
];

const disponibilidad = [
    ["Disponible", "Disponible", "Ocupado", "Disponible"],
    ["Ocupado", "Disponible", "Disponible", "Disponible"],
    ["Disponible", "Ocupado", "Disponible", "Disponible"],
    ["Disponible", "Disponible", "Ocupado", "Disponible"],
    ["Ocupado", "Disponible", "Disponible", "Disponible"],
    ["Disponible", "Ocupado", "Disponible", "Disponible"],
    ["Disponible", "Disponible", "Ocupado", "Disponible"]
];

const tableBody = document.getElementById('tableBody');

dias.forEach((dia, index) => {
    horarios.forEach((horario, horarioIndex) => {
        const row = document.createElement('tr');

        if (horarioIndex === 0) {
            const diaCell = document.createElement('td');
            diaCell.rowSpan = horarios.length;
            diaCell.innerText = dia;
            row.appendChild(diaCell);
        }

        const horarioCell = document.createElement('td');
        horarioCell.innerText = horario;
        row.appendChild(horarioCell);

        // Añadir las celdas de disponibilidad para cada pista
        for (let pista = 0; pista < 4; pista++) {
            const cell = document.createElement('td');
            cell.innerText = disponibilidad[index][pista];

            // Agregar evento de clic solo si la celda está "Disponible"
            if (disponibilidad[index][pista] === "Disponible") {
                cell.style.cursor = "pointer"; // Cambiar el cursor
                cell.addEventListener('click', () => {
                    const modalContent = document.getElementById('modalContent');
                    modalContent.innerText = `Reserva en la Pista ${pista + 1} el ${dia} a la hora ${horario}`;
                    const reservaModal = new bootstrap.Modal(document.getElementById('reservaModal'));
                    reservaModal.show();
                });
            } else {
                cell.classList.add('table-secondary'); // Resaltar las celdas ocupadas
            }

            row.appendChild(cell);
        }

        tableBody.appendChild(row);
    });
});
