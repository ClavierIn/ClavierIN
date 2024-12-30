// Sample data (in this case, a list of websites)
const data = [
    { title: "OpenAI", url: "https://www.openai.com", text: "AI" },
    { title: "GitHub", url: "https://github.com", text:"Tools" },
    { title: "MDN Web Docs", url: "https://developer.mozilla.org", text:"Tools" },
    { title: "W3Schools", url: "https://www.w3schools.com", text: "learn" },
    { title: "Stack Overflow", url: "https://stackoverflow.com", text: "Tools" },
    { title: "Google", url: "https://www.google.com", text: "Search Engine"},
    { title: "Bing", url: "https://www.bing.com", text: "Search Engine / AI"},
];

// Function to filter and display search results
function search() {
    const query = document.getElementById("search-input").value.toLowerCase();
    const resultsContainer = document.getElementById("search-list-item");

    // buka tutup box item 


    // Clear previous results
    resultsContainer.innerHTML = "";

    // Filter data based on query
    const filteredData = data.filter(item => item.title.toLowerCase().includes(query));

    // Display results
    if (filteredData.length > 0) {
        filteredData.forEach(item => {
            const resultItem = document.createElement("div");
            resultItem.classList.add("item");
            resultItem.innerHTML = `<a href="${item.url}" target="_blank">${item.title}</a><span>${item.text}</a>`;
            resultsContainer.appendChild(resultItem);
        });
    } else {
        resultsContainer.innerHTML = "<p>No results found.</p>";
    }
};