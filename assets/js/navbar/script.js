
const navbar = document.getElementById("header")

window.onscroll = function() {NavScrollFunction()};

function NavScrollFunction() {
    //header .active
  if (document.body.scrollTop > 105 || document.documentElement.scrollTop > 105) {
        header.classList.add("active")
  } else {
        header.classList.remove("active")
  };

  //scroll indikator
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("scroll-indikator").style.width = scrolled + "%";
}

const menu = document.getElementById("menu");
function OpenMenu(){
    let btnMenu = document.getElementById("button-menu");
    btnMenu.classList.toggle("clicked");

    if (menu.style.display === "block"){
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }

    //tutup search
    let element = document.getElementById("search-button")
    element.classList.remove("active");
    search.classList.remove("active")
};


const search = document.getElementById("search");
function OpenSearch(){
    let element = document.getElementById("search-button")

    element.classList.toggle("active");
    search.classList.toggle("active");

    //close menu
    let btnMenu = document.getElementById("button-menu");
    btnMenu.classList.remove("clicked");
    menu.style.display = "none";
};



