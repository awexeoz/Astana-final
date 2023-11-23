const questions = [
    {
      question:"When Astana became the capital of Kazakhstan?",
      answers:[
        {text:"1991",correct:false},
        {text:"1998",correct:false},
        {text:"1997",correct:true},
        {text:"2001",correct:false},
      ]
    },
    {
      question:"What architectural symbol is the centerpiece of Astana?",
      answers:[
        {text:"National museum",correct:false},
        {text:"Expo",correct:false},
        {text:"Bayterek",correct:true},
        {text:"Khan-SHatyr",correct:false},
      ]
    },
    {
      question:"In which year was Astana renamed to Nur-Sultan?",
      answers:[
        {text:"2017",correct:false},
        {text:"2016",correct:false},
        {text:"2018",correct:true},
        {text:"2019",correct:false},
      ]
    },
    {
      question:"Which river borders the territory of Astana?",
      answers:[
        {text:"Irtysh",correct:false},
        {text:"Esil",correct:true},
        {text:"Syr-Dariya",correct:false},
        {text:"Amu-Dariya",correct:false},
      ]
    },
    {
      question:"Which of the following is the capital palace in Astana?",
      answers:[
        {text:"Hazret-Sultan",correct:false},
        {text:"Parlament",correct:false},
        {text:"Akorda",correct:true},
        {text:"Khan-SHatyr",correct:false},
      ]
    },
    {
      question:"What international event did Astana host in 2017?",
      answers:[
        {text:"Olympic Games",correct:false},
        {text:"Fifa World Cup",correct:false},
        {text:"Palace of Peace and Reconciliation",correct:false},
        {text:"Expo 2017",correct:true},
      ]
    },
    {
      question:"Which landmark in Nur-Sultan is a large shopping and entertainment complex shaped like a tent?",
      answers:[
        {text:"Khan-Shatyr",correct:true},
        {text:"Astana Opera",correct:false},
        {text:"Bayterek",correct:false},
        {text:"Hazret Sultan Mosque",correct:false},
      ]
    },
    {
      question:"What is the height of the Bayterek Tower in Nur-Sultan??",
      answers:[
        {text:"100 metres",correct:false},
        {text:"97 metres",correct:true},
        {text:"80 metres",correct:false},
        {text:"105 metres",correct:false},
      ]
    },
    {
      question:"In which month does Nur-Sultan typically experience the coldest temperatures?",
      answers:[
        {text:"April",correct:false},
        {text:"September",correct:false},
        {text:"December",correct:true},
        {text:"June",correct:false},
      ]
    },
    {
      question:"What architectural style predominates in the buildings of Astana?",
      answers:[
        {text:"Classicism",correct:false},
        {text:"Baroque",correct:false},
        {text:"Contemporary",correct:false},
        {text:"Modern",correct:true},
      ]
    }
  ];
  
  const questionElement = document.getElementById("question");
  const answerButtons = document.getElementById("answer-buttons");
  const nextButton = document.getElementById("next-btn");
  
  let currentQuestionsIndex = 0;
  let score = 0;
  
  function startQuiz(){
    currentQuestionsIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestions();
  }
  
  function showQuestions(){
    resetState();
    let currentQuestion = questions[currentQuestionsIndex];
    let questionNo = currentQuestionsIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;
  
    currentQuestion.answers.forEach(answer => {
      const button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("btn");
      answerButtons.appendChild(button);
      if(answer.correct){
        button.dataset.correct = answer.correct;
      }
      button.addEventListener("click",selectAnswer);
    });
  }
  
  function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
      answerButtons.removeChild(answerButtons.firstChild);
    }
  }
  
  function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
      selectedBtn.classList.add("correct");
      score++;
    }
    else{
      selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
      if(button.dataset.correct === "true"){
        button.classList.add("correct");
      }
      button.disabled = true;
    });
    nextButton.style.display = "block";
  }
  
  function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
  }
  
  function handleNextButton(){
    currentQuestionsIndex++;
    if(currentQuestionsIndex < questions.length){
      showQuestions();
    }
    else{
      showScore();
    }
  }
  
  
  nextButton.addEventListener("click", ()=>{
    if(currentQuestionsIndex < questions.length){
      handleNextButton();
    }
    else{
      startQuiz();
    }
  })
  
  
  startQuiz();


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