const staff = [
    { id: 1, name: "John Doe", role: "Supervisor" },
    { id: 2, name: "Jane Smith", role: "Technician" }
];

const vehicles = [
    { id: 101, license: "ABC-123", status: "Available" },
    { id: 102, license: "XYZ-456", status: "Out of Service" }
];

const equipment = [
    { id: 1001, name: "Tractor", status: "In Use" },
    { id: 1002, name: "Irrigation Pump", status: "Available" }
];

// Populate tables
function populateTables() {
    populateStaff();
    populateVehicles();
    populateEquipment();
}

function populateStaff() {
    const staffTable = document.getElementById("staffTable");
    staffTable.innerHTML = "";
    staff.forEach((s) => {
        staffTable.innerHTML += `
            <tr>
                <td>${s.id}</td>
                <td>${s.name}</td>
                <td>${s.role}</td>
                <td>
                    <button class="btn btn-sm btn-primary">Edit</button>
                    <button class="btn btn-sm btn-danger">Delete</button>
                </td>
            </tr>
        `;
    });
}

function populateVehicles() {
    const vehicleTable = document.getElementById("vehicleTable");
    vehicleTable.innerHTML = "";
    vehicles.forEach((v) => {
        vehicleTable.innerHTML += `
            <tr>
                <td>${v.id}</td>
                <td>${v.license}</td>
                <td>${v.status}</td>
                <td>
                    <button class="btn btn-sm btn-primary">Edit</button>
                    <button class="btn btn-sm btn-danger">Delete</button>
                </td>
            </tr>
        `;
    });
}

function populateEquipment() {
    const equipmentTable = document.getElementById("equipmentTable");
    equipmentTable.innerHTML = "";
    equipment.forEach((e) => {
        equipmentTable.innerHTML += `
            <tr>
                <td>${e.id}</td>
                <td>${e.name}</td>
                <td>${e.status}</td>
                <td>
                    <button class="btn btn-sm btn-primary">Edit</button>
                    <button class="btn btn-sm btn-danger">Delete</button>
                </td>
            </tr>
        `;
    });
}

// Example add functions
function addStaff() {
    alert("Add Staff Functionality Coming Soon!");
}

function addVehicle() {
    alert("Add Vehicle Functionality Coming Soon!");
}

function addEquipment() {
    alert("Add Equipment Functionality Coming Soon!");
}

// Initialize
populateTables();

function saveEquipment() {
    const name = document.getElementById('equipmentName').value;
    const status = document.getElementById('equipmentStatus').value;
    // Save to the table (you can replace this with an API call)
    equipment.push({ id: equipment.length + 1, name, status });
    populateEquipment();
    alert('Equipment added successfully!');
    document.getElementById('equipmentForm').reset();
    bootstrap.Modal.getInstance(document.getElementById('addEquipmentModal')).hide();
}

function saveVehicle() {
    const license = document.getElementById('vehicleLicense').value;
    const status = document.getElementById('vehicleStatus').value;
    vehicles.push({ id: vehicles.length + 1, license, status });
    populateVehicles();
    alert('Vehicle added successfully!');
    document.getElementById('vehicleForm').reset();
    bootstrap.Modal.getInstance(document.getElementById('addVehicleModal')).hide();
}

function saveStaff() {
    const name = document.getElementById('staffName').value;
    const role = document.getElementById('staffRole').value;
    staff.push({ id: staff.length + 1, name, role });
    populateStaff();
    alert('Staff added successfully!');
    document.getElementById('staffForm').reset();
    bootstrap.Modal.getInstance(document.getElementById('addStaffModal')).hide();
}
































document.getElementById('fetchStaff').addEventListener('click', () => {
    fetch('/admin/staff')
        .then(response => response.json())
        .then(data => {
            const staffList = document.getElementById('staffList');
            staffList.innerHTML = '';
            data.forEach(staff => {
                staffList.innerHTML += `<p>${staff.firstName} ${staff.lastName} - ${staff.designation}</p>`;
            });
        });
});

document.getElementById('fetchVehicles').addEventListener('click', () => {
    fetch('/admin/vehicles')
        .then(response => response.json())
        .then(data => {
            const vehicleList = document.getElementById('vehicleList');
            vehicleList.innerHTML = '';
            data.forEach(vehicle => {
                vehicleList.innerHTML += `<p>${vehicle.licensePlate} - ${vehicle.status}</p>`;
            });
        });
});

document.getElementById('fetchEquipment').addEventListener('click', () => {
    fetch('/admin/equipment')
        .then(response => response.json())
        .then(data => {
            const equipmentList = document.getElementById('equipmentList');
            equipmentList.innerHTML = '';
            data.forEach(equipment => {
                equipmentList.innerHTML += `<p>${equipment.name} - ${equipment.status}</p>`;
            });
        });
});
