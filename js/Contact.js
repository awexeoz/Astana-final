// Form
var Form1 = document.getElementById("Form1");
var Form2 = document.getElementById("Form2");
var Form3 = document.getElementById("Form3");

var Next1 = document.getElementById("Next1");
var Next2 = document.getElementById("Next2");
var Back1 = document.getElementById("Back1");
var Back2 = document.getElementById("Back2");

var progress = document.getElementById("progress");

Next1.onclick = function(){
  Form1.style.left = "-560px";
  Form2.style.left = "50px";
  progress.style.width = "334px";
}
Back1.onclick = function(){
  Form1.style.left = "50px";
  Form2.style.left = "560px";
  progress.style.width = "167px";
}
Next2.onclick = function(){
  Form2.style.left = "-560px";
  Form3.style.left = "50px";
  progress.style.width = "501px";
}
Back2.onclick = function(){
  Form2.style.left = "50px";
  Form3.style.left = "560px";
  progress.style.width = "334px";
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

//to top
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})

//search
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