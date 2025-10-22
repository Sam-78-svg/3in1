// Sample Data
const employees = [
    { id: 1, name: "John Doe", email: "john@example.com", dept: "IT" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", dept: "HR" },
    { id: 3, name: "Sam Wilson", email: "sam@example.com", dept: "Finance" }
];

let campaigns = [
    { id: 1, name: "Policy Update Test", status: "Completed", sent: 50, clicks: 5 },
    { id: 2, name: "Password Reset Test", status: "Running", sent: 30, clicks: 3 }
];

// Populate Employee Table
const empTable = document.querySelector("#employeeTable tbody");
employees.forEach(emp => {
    const row = `<tr>
    <td>${emp.id}</td>
    <td>${emp.name}</td>
    <td>${emp.email}</td>
    <td>${emp.dept}</td>
  </tr>`;
    empTable.innerHTML += row;
});

// Populate Campaign Table
function renderCampaigns() {
    const campTable = document.querySelector("#campaignTable tbody");
    campTable.innerHTML = "";
    campaigns.forEach(c => {
        const row = `<tr>
      <td>${c.id}</td>
      <td>${c.name}</td>
      <td>${c.status}</td>
      <td>${c.sent}</td>
      <td>${c.clicks}</td>
    </tr>`;
        campTable.innerHTML += row;
    });
}
renderCampaigns();

// Handle New Campaign Creation
document.getElementById("createBtn").addEventListener("click", () => {
    const name = document.getElementById("campaignName").value.trim();
    const template = document.getElementById("templateName").value.trim();
    const schedule = document.getElementById("scheduleTime").value;

    if (!name || !template) {
        alert("Please fill all campaign fields!");
        return;
    }

    const newCampaign = {
        id: campaigns.length + 1,
        name,
        status: "Draft",
        sent: 0,
        clicks: 0
    };

    campaigns.push(newCampaign);
    renderCampaigns();
    alert(`Campaign '${name}' created successfully!`);

    document.getElementById("campaignName").value = "";
    document.getElementById("templateName").value = "";
    document.getElementById("scheduleTime").value = "";
});
