document.addEventListener("DOMContentLoaded", () => {
    fetch("https://zenquotes.io/api/random")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.getElementById("quote-place").innerText = `"${data[0].q}"`;
        })
        .catch(error => {
            console.error("Error fetching quote:", error);
        });
});