var nav = document.querySelector(".nav")
var bar = nav.querySelector(".bar")

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 130 || document.documentElement.scrollTop > 130) {
        nav.classList.add("active")
  } else {
        nav.classList.remove("active")
  }

  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("scIndikator").style.width = scrolled + "%";
}
//menu


var menu = nav.querySelector('#menu');
document.getElementById('tm-menu').onclick = function() {
    this.classList.toggle('clicked'); // Toggle the 'clicked' class

    menu.classList.toggle('active');
};

// menu / cont link
var contLink = menu.querySelector(".cont-link");
var boxLink = contLink.querySelector(".box-link");



function dropDown(element) {
   
    var arrow = element.querySelector(".arrow");
    var drop = element.querySelector(".drop-down");

    arrow.classList.toggle('rotate')

    if (drop){
        if (getComputedStyle(drop).display === 'none')
        {
                drop.classList.add('active');
        }
        else {
            drop.classList.remove('active')
                };
                
           
        }
    };



//end menu


function scrollIn() {
 
}

//search

function openSearch(element){
    let search = document.querySelector(".nav .container-search")

    element.classList.toggle("active")
    menu.classList.style = "color:#f4fe"
    search.classList.toggle("open")

    //tutup menu
    let tmMenu = document.getElementById("tm-menu")

    tmMenu.classList.remove('clicked')
    menu .classList.remove('active')
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


