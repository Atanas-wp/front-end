      const addBtn = document.querySelector("#addBtn");
      addBtn.addEventListener("click", function(event) {
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
      removeBtn.addEventListener("click", function(event) {
        event.preventDefault();
        const table = document.querySelector("#customerTable");
        const rows = table.rows;
        if (rows.length > 1) {
          table.deleteRow(rows.length - 1);
        }
      });

  


