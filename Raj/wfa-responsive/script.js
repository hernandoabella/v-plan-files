function toggleDropdown(element) {
    const dropdown = element.parentElement;
    dropdown.classList.toggle('open');
    const allDropdowns = document.querySelectorAll('.custom-dropdown');
    allDropdowns.forEach((dd) => {
        if (dd !== dropdown) {
            dd.classList.remove('open');
        }
    });
}

document.addEventListener('DOMContentLoaded', (event) => {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [30, 54, 40], // Ajusta los valores según sea necesario
                backgroundColor: ['#af52de', '#007aff', '#ff9500'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom',
                },
                tooltip: {
                    enabled: false,
                }
            },
            cutout: '70%'
        }
    });
});

document.querySelector('.menuButton').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('collapsed');
});

document.getElementById('showSidebarBtn').addEventListener('click', function() {
    document.getElementById('sidebar').classList.add('active');
});

document.addEventListener('click', function(event) {
    if (!document.getElementById('sidebar').contains(event.target) && !document.getElementById('showSidebarBtn').contains(event.target)) {
        document.getElementById('sidebar').classList.remove('active');
    }
});
