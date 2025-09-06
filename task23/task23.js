const addBtn = document.querySelector("#addBtn");
addBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const firstName = document.querySelector("#firstName").value;
  const lastName = document.querySelector("#lastName").value;
  const address = document.querySelector("#address").value;
  const table = document.querySelector("#customerTable");
  const row = table.insertRow();
  const firstNameCell = row.insertCell(0);
  const lastNameCell = row.insertCell(1);
  const addressCell = row.insertCell(2);
  firstNameCell.innerHTML = firstName;
  lastNameCell.innerHTML = lastName;
  addressCell.innerHTML = address;
});
const removeBtn = document.querySelector("#removeBtn");
removeBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const table = document.querySelector("#customerTable");
  const rows = table.rows;
  if (rows.length > 1) {
    table.deleteRow(rows.length - 1);
  }
});

const personArray = [];

//const addBtn = document.querySelector("#addBtn");
addBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const firstName = document.querySelector("#firstName").value;
  const lastName = document.querySelector("#lastName").value;
  const address = document.querySelector("#address").value;
  if (!firstName || !lastName || !address) {
    alert("All fields must be filled in to add a new person.");
    return;
  }
  const person = { firstName, lastName, address };
  personArray.push(person);
  const table = document.querySelector("#customerTable");
  const row = table.insertRow();
  const firstNameCell = row.insertCell(0);
  const lastNameCell = row.insertCell(1);
  const addressCell = row.insertCell(2);
  firstNameCell.innerHTML = firstName;
  lastNameCell.innerHTML = lastName;
  addressCell.innerHTML = address;
});

const deleteBtn = document.querySelector("#deleteBtn");
deleteBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const firstName = document.querySelector("#firstName").value;
  const lastName = document.querySelector("#lastName").value;
  const address = document.querySelector("#address").value;
  if (!firstName || !lastName || !address) {
    alert("All fields must be filled in to delete a person.");
    return;
  }
  const person = { firstName, lastName, address };
  const index = personArray.findIndex(p => p.firstName === firstName && p.lastName === lastName && p.address === address);
  if (index === -1) {
    alert("Person not found.");
    return;
  }
  personArray.splice(index, 1);
  const table = document.querySelector("#customerTable");
  const rows = table.rows;
  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    if (row.cells[0].innerHTML === firstName && row.cells[1].innerHTML === lastName && row.cells[2].innerHTML === address) {
      table.deleteRow(i);
      break;
    }
  }
});

window.addEventListener("load", function () {
  const table = document.querySelector("#customerTable");
  for (const person of personArray) {
    const row = table.insertRow();
    const firstNameCell = row.insertCell(0);
    const lastNameCell = row.insertCell(1);
    const addressCell = row.insertCell(2);
    firstNameCell.innerHTML = person.firstName;
    lastNameCell.innerHTML = person.lastName;
    addressCell.innerHTML = person.address;
  }
});




