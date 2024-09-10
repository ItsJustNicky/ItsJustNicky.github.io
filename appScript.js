document.getElementById("moodForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get values from the form
    const mood = document.getElementById("mood").value;
    const day = document.getElementById("day").value;
    const procrastinating = document.getElementById("procrastinating").checked ? "yes" : "no";
    const stuffToDo = document.getElementById("stuffToDo").checked ? "yes" : "no";
    const stuck = document.getElementById("stuck").checked ? "yes" : "no";

    // Build query string for the output page
    const queryString = `?mood=${mood}&day=${day}&procrastinating=${procrastinating}&stuffToDo=${stuffToDo}&stuck=${stuck}`;

    // Redirect to the output page with the form data in the query string
    window.location.href = `output.html${queryString}`;
});
