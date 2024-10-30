function calculateTotals() {
    const rows = document.querySelectorAll('tbody tr');
    let grandTotal = 0;
  
    for (let row of rows) {
      const quantity = parseInt(row.cells[1].textContent);
      const unitPrice = parseFloat(row.cells[2].textContent.replace('$', ''));
      const total = quantity * unitPrice;
  
      row.cells[3].textContent = '$' + total.toFixed(2);
      grandTotal += total;
    }
  
    document.getElementById('grandTotal').textContent = '$' + grandTotal.toFixed(2);
  }