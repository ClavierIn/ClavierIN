
//menu
let menu = document.getElementById('menu')
document.getElementById('btn-menu').onclick = function() {
    this.classList.toggle('clicked'); // Toggle the 'clicked' class

    menu.classList.toggle('active');
};


function dropDown(element) {

    let arrow = element.querySelector(".arrow");
    let drop = element.querySelector(".drop-down");
    element.classList.toggle('active')
    drop.classList.toggle('active')
    arrow.classList.toggle('rotate')
}

//end menu

//search

function openSearch(element){
    let search = document.querySelector(".nav .container-search")

    element.classList.toggle("active")
    menu.classList.style = "color:#f4fe"
    search.classList.toggle("open")
}


// search engine 
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
    const query = document.getElementById("searchEngine").value.toLowerCase();
    const resultsContainer = document.getElementById("output");

    // buka tutup box item 

   

    // Clear previous results
    resultsContainer.innerHTML = "";

    // Filter data based on query
    const filteredData = data.filter(item => item.title.toLowerCase().includes(query));

    // Display results
    if (filteredData.length > 0) {
        filteredData.forEach(item => {
            const resultItem = document.createElement("div");
            resultItem.classList.add("output-item");
            resultItem.innerHTML = `<a href="${item.url}" target="_blank">${item.title}</a><span>${item.text}</a>`;
            resultsContainer.appendChild(resultItem);
        });
    } else {
        resultsContainer.innerHTML = "<p>No results found.</p>";
    }
}


