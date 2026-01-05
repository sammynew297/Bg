document.getElementById('detailsForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents page refresh
    
    const formData = new FormData(this);
    const details = Object.fromEntries(formData.entries());
    
    console.log("Collected Personal Details:", details);
    alert("Form submitted! Check the browser console (F12) for details.");
});
