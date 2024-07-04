function requestInfo() {
    alert('Redirecting to the request information page...');
    // Redirect to request information page
    window.location.href = 'request_information.html';
}

function scheduleVisit() {
    alert('Redirecting to the schedule visit page...');
    // Redirect to schedule visit page
    window.location.href = 'schedule_visit.html';
}

window.onload = function() {
    const popup = document.getElementById('popup');
    popup.style.display = 'block';
    setTimeout(function() {
        popup.style.display = 'none';
    }, 5000); // 5000 milliseconds = 5 seconds
}
