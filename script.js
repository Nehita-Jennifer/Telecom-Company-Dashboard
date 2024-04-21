// script.js
document.getElementById('revenueBtn').addEventListener('click', function() {
    document.getElementById('contentFrame').src = 'revenue.html';
});

document.getElementById('churnBtn').addEventListener('click', function() {
    document.getElementById('contentFrame').src = 'churn.html';
});

document.getElementById('ageDemographicBtn').addEventListener('click', function() {
    document.getElementById('contentFrame').src = 'ageDemographic.html';
});

document.getElementById('lastGraphBtn').addEventListener('click', function() {
    document.getElementById('contentFrame').src = 'Contractdistribution.html';
});
