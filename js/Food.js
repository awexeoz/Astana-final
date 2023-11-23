var stars = document.getElementsByClassName("fa-regular");
var emoji = document.getElementById("emoji");

stars[0].onclick = function(){
  stars[0].style.color = "#ffd93b";
  stars[1].style.color = "#e4e4e4";
  stars[2].style.color = "#e4e4e4";
  stars[3].style.color = "#e4e4e4";
  stars[4].style.color = "#e4e4e4";
  emoji.style.transform = "translateX(0)";
}

stars[1].onclick = function(){
  stars[0].style.color = "#ffd93b";
  stars[1].style.color = "#ffd93b";
  stars[2].style.color = "#e4e4e4";
  stars[3].style.color = "#e4e4e4";
  stars[4].style.color = "#e4e4e4";
  emoji.style.transform = "translateX(-100px)";
}

stars[2].onclick = function(){
  stars[0].style.color = "#ffd93b";
  stars[1].style.color = "#ffd93b";
  stars[2].style.color = "#ffd93b";
  stars[3].style.color = "#e4e4e4";
  stars[4].style.color = "#e4e4e4";
  emoji.style.transform = "translateX(-200px)";
}
stars[3].onclick = function(){
  stars[0].style.color = "#ffd93b";
  stars[1].style.color = "#ffd93b";
  stars[2].style.color = "#ffd93b";
  stars[3].style.color = "#ffd93b";
  stars[4].style.color = "#e4e4e4";
  emoji.style.transform = "translateX(-300px)";
}

stars[4].onclick = function(){
  stars[0].style.color = "#ffd93b";
  stars[1].style.color = "#ffd93b";
  stars[2].style.color = "#ffd93b";
  stars[3].style.color = "#ffd93b";
  stars[4].style.color = "#ffd93b";
  emoji.style.transform = "translateX(-400px)";
}

/*animation footer*/
VanillaTilt.init(document.querySelectorAll(".sci li a"), {
  max: 30,
  speed: 400,
  glare:true,
  "max-glare":1,
});

/*tooltip*/
tippy('.facebook',{
  content:"Facebook",
  placement:'bottom'
})

tippy('.twitter',{
  content:"Twitter",
  placement:'bottom'
})

tippy('.youtube',{
  content:"Youtube",
  placement:'bottom'
})

tippy('.instagram',{
  content:"Instagram",
  placement:'bottom'
})

/* keydown*/
document.addEventListener('keydown', (event) => {
  const key = event.key;

  switch (key) {
    case '1':
      // Переключиться на раздел Home
      window.location.href = 'index.html';
      break;
    case '2':
      // Переключиться на раздел Attractions
      window.location.href = 'Attractions.html';
      break;
    case '3':
      // Переключиться на раздел Food
      window.location.href = 'Food.html';
      break;
    case '4':
      // Переключиться на раздел Team
      window.location.href = 'Team.html';
      break;
    case '5':
      // Переключиться на раздел Contact
      window.location.href = 'Contact.html';
      break;
    case '6':
      // Переключиться на раздел Game
      window.location.href = 'Game.html';
      break;
    case '7':
      // Переключиться на раздел Quiz
      window.location.href = 'Quiz.html';
      break;
    default:
      break;
  }
});

/*Object*/
// Roku
const roku = {
  cuisine: "Pan-Asian",
  bill: "7,000 tenge",
  address: "Tokpanova 10"
};

document.getElementById("rokuCuisine").innerHTML =
"Cuisine: " + roku.cuisine;

document.getElementById("rokuBill").innerHTML =
"Average bill: " + roku.bill;

document.getElementById("rokuAdress").innerHTML =
"Address: " + roku.address;

// Gasteria
const gasteria = {
  cuisine: "European, Asian",
  bill: "8,000 tenge",
  address: "Turan 22/1, Tokpanova 27"
};

document.getElementById("gasteriaCuisine").innerHTML =
"Cuisine: " + gasteria.cuisine;

document.getElementById("gasteriaBill").innerHTML =
"Average bill: " + gasteria.bill;

document.getElementById("gasteriaAdress").innerHTML =
"Address: " + gasteria.address;

// Meatador
const meatador = {
  cuisine: "European, Turkish",
  bill: "5,000 tenge",
  address: "Turan 60"
};

document.getElementById("meatadorCuisine").innerHTML =
"Cuisine: " + meatador.cuisine;

document.getElementById("meatadorBill").innerHTML =
"Average bill: " + meatador.bill;

document.getElementById("meatadorAdress").innerHTML =
"Address: " + meatador.address;


//to top
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})

//modal box 
// Открыть модальное окно для Roku
function openRokuModal() {
  document.getElementById('rokuModal').style.display = 'flex';
}

// Закрыть модальное окно для Roku
function closeRokuModal() {
  document.getElementById('rokuModal').style.display = 'none';
}

// Открыть модальное окно для Gasteria
function openGasteriaModal() {
  document.getElementById('gasteriaModal').style.display = 'flex';
}

// Закрыть модальное окно для Gasteria
function closeGasteriaModal() {
  document.getElementById('gasteriaModal').style.display = 'none';
}

// Открыть модальное окно для Meatador
function openMeatadorModal() {
  document.getElementById('meatadorModal').style.display = 'flex';
  }

// Закрыть модальное окно для Meatador
function closeMeatadorModal() {
  document.getElementById('meatadorModal').style.display = 'none';
  }


  /*=============== SEARCH BAR JS ===============*/
const toggleSearch = (search, button) =>{
  const searchBar = document.getElementById(search),
    searchButton = document.getElementById(button)

  searchButton.addEventListener('click', () =>{
    // We add the show-search class, so that the search bar expands
    searchBar.classList.toggle('show-search')
  })
}
toggleSearch('search-bar', 'search-button')