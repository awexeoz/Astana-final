function allowDrop(event){
  event.preventDefault();
}

function drag(event){
  event.dataTransfer.setData("text",event.target.id);
}

function drop(event){
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(data));

}

var resetButton = document.getElementById("resetButton");

// Добавляем обработчик события клика
resetButton.addEventListener("click", function() {
    location.reload(); // Обновляем страницу
});

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

function openForm(){
  document.getElementById("myForm").style.display = "block";
}

function closeForm(){
    document.getElementById("myForm").style.display = "none";
}