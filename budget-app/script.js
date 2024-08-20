document.addEventListener('DOMContentLoaded', () => {
    const openFormBtn = document.getElementById('open-form-btn');
    const modal = document.getElementById('form-modal');
    const closeBtn = document.querySelector('.close-btn');
    const projectForm = document.getElementById('project-form');
    const tableBody = document.getElementById('project-table-body');

    // Open modal
    openFormBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    // Close modal
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside of it
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Handle form submission
    projectForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Get form values
        const projectName = document.getElementById('project-name').value;
        const location = document.getElementById('location').value;
        const date = document.getElementById('date').value;
        const report = document.getElementById('report').value;
        const payment = parseFloat(document.getElementById('payment').value);
        const expenses = parseFloat(document.getElementById('expenses').value);
        const cmf = parseFloat(document.getElementById('cmf').value);

        // Calculate remaining budget
        const remainingBudget = payment - (expenses + cmf);

        // Create a new row
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${projectName}</td>
            <td>${location}</td>
            <td>${date}</td>
            <td>${report}</td>
            <td>$${payment.toFixed(2)}</td>
            <td>$${expenses.toFixed(2)}</td>
            <td>$${cmf.toFixed(2)}</td>
            <td>$${remainingBudget.toFixed(2)}</td>
        `;

        // Add the new row to the table
        tableBody.appendChild(newRow);

        // Clear form and close modal
        projectForm.reset();
        modal.style.display = 'none';
    });
});
