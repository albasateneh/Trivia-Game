// GLOBAL VARIABLES
// ====================================
var Questions = [
    {
        Question: "What type of galaxy is the most common in the universe?",
        Answers: [
            "Elliptical",
            "Spiral",
            "Irregular"

        ],

        correctAnswer: 0,

    },

    {
        Question: "What is the coldest place in the universe?",
        Answers: [
            "Black Hole",
            "Pluto",
            "Boomerang Nebula"


        ],

        correctAnswer: 2
    },

    {
        Question: "The hottest place in the universe is located in which constellation?",
        Answers: [
            "Scorpio",
            "Virgo",
            "Capricorn"


        ],

        correctAnswer: 1
    },

    {
        Question: "How old is the universe in light years?",
        Answers: [
            "5 billion light years",
            "13.8 billion light years",
            "3,000 years"


        ],

        correctAnswer: 1
    },

    {
        Question: "What percent of the universe is dark matter?",
        Answers: [
            "27%",
            "10%",
            "90%"


        ],

        correctAnswer: 0
    },

    {
        Question: "How many planets are in the Solar System?",
        Answers: [
            "8",
            "10",
            "9"


        ],

        correctAnswer: 0
    },

    {
        Question: "What is the largest planet in our solar system?",
        Answers: [
            "Jupiter",
            "Mars",
            "Venus"


        ],

        correctAnswer: 0
    },

    {
        Question: "What is the smallest planet in our solar system?",
        Answers: [
            "Pluto",
            "Mars",
            "Mercury"

        ],

        correctAnswer: 2
    },

    {
        Question: "What is the most common type of star found in the Milky Way?",
        Answers: [
            "White",
            "Red Dwarf",
            "Ionic"


        ],

        correctAnswer: 1
    },

    {
        Question: "What is the largest type of star in the universe?",
        Answers: [
            "Red SuperGiant",
            "Blue Super Giant",
            "White Super Giant"


        ],

        correctAnswer: 0
    },

    {
        Question: "What is the closest star to the Sun?",
        Answers: [
            "Polaris",
            "VY Canis Majoris",
            "Proxima Centauri"


        ],

        correctAnswer: 2
    },

    {
        Question: "What has a gravitational pull so strong that even light cannot escape it?",
        Answers: [
            "The Sun",
            "A Black Hole",
            "Red Super Giant Star"


        ],

        correctAnswer: 1
    },

    {
        Question: "How many minutes was the shortest space flight?",
        Answers: [
            "15 minutes",
            "1 hour",
            "30 seconds"


        ],

        correctAnswer: 0
    },

    {
        Question: "Which NASA space flight was the last manned mission to the moon?",
        Answers: [
            "Apollo 17",
            "Appllo 11",
            "Apollo 18"


        ],

        correctAnswer: 0
    },

];


//Testing & Debugging


//Game Results
var correctAnswers = [];
var incorrectAnswers = 0;
var unanswered = 0;

//Timer Variables
var timeLeft;
var timerId;





// FUNCTIONS
// ====================================

$("#triviaContainer").hide();

// Countdown timer (30 seconds)
$(document).ready(function () {
    //init page
    Questions.forEach(function (question, i) {
        var questionDiv = $("<div>");
        questionDiv.append($("<h1>").text(question.Question));
        var answersDiv = $("<div>");
        answersDiv.addClass("answers");
        question.Answers.forEach(function (answer, j) {
            answersDiv.append(
                $("<label>").text(answer),
                $("<input name = 'blah" + i + " ' type = 'radio' value =' " + j + " ' >"));
            questionDiv.append(answersDiv);
        })
        $("#trivia-form").append(questionDiv, answersDiv);
    })
    
    
// Couldn't get my CheckGuess to Work...
  function checkGuess() {
    var answerContainers = Ò
    answerChoices = $(".answers")


    Questions.forEach((currentQuestion, questionNumber) => {
      var answerContainer = answerChoices[questionNumber];
      var selector = `input[name="blah"${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;  
        
    })
                      };


$("input").on("click", function(){
    var selectedAnswer = $(this).val();
    
})




    var elem = $('#display');

    // jQuery on click
    $("#start").on("click", function () {
        $("#triviaContainer").show();


        // Hide Start Button
        $(this).hide();
        timeLeft = 60;
        // Timer interval
        timerId = setInterval(countdown, 1000);
        // Updates timer in HTML
        elem.html(timeLeft + ' seconds remaining');
    })
    


    function countdown() {
        if (timeLeft == 0) {
            clearTimeout(timerId);
            $("#triviaContainer").hide();
            $("#display").hide();

        } else {
            // Time decreases
            timeLeft--;
            elem.html(timeLeft + ' seconds remaining');

        }
    }
    
})











// MAIN PROCESS
// ====================================
// Click start button to start timer
// Hide start button when timer starts
