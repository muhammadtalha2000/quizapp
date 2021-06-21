var para = document.getElementById("para");

function get() {
    var username = document.getElementById("username").value;
    console.log(username)
    var h1 = document.createElement("h1");
    var text = document.createTextNode(username);
    h1.appendChild(text)
    para.appendChild(h1)

}

var question = document.getElementById("question");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");
var count1 = 0;
var score = 0;

//Counter

var counter = 100;
var count = document.getElementById("counter");

var timer = setInterval(function () {

    count.innerText = counter;
    counter--
    if (counter === 0) {
        option1.innerText = "";
        option2.innerText = "";
        option3.innerText = "";
        option4.innerText = "";
        clearInterval(timer)
    }
}, 1000);

var question_bank = [
    {
        question: "What is short form of World Health Organization?",
        option: {
            a: "HOW",
            b: "WHO",
            c: "OHW",
            d: "HOH"
        },
        correctAnswer: "WHO",
    },
    {
        question: "Who is the president of America?",
        option: {
            a: "Joe Biden",
            b: "Barak Obama",
            c: "Donald Trump",
            d: "Allen Goulding"
        },
        correctAnswer: "Joe Biden",
    },
    {
        question: "Fifa World Cup Winner of 2018 is ?",
        option: {
            a: "Brazil",
            b: "Portugal",
            c: "Belgium",
            d: "France"
        },
        correctAnswer: "France",
    },
    {
        question: "Which club won the UCL this season?",
        option: {
            a: "Paris",
            b: "Liverpool",
            c: "Chelsea",
            d: "Bayern"
        },
        correctAnswer: "Chelsea",
    },
    {
        question: "Who has the most Ballon D' OR?",
        option: {
            a: "Leo Messi",
            b: "Ronaldo",
            c: "Neymar",
            d: "Mbappe"
        },
        correctAnswer: "Neymar",
    },
    {
        question: "What is 5 +10",
        option: {
            a: "3",
            b: "5",
            c: "15",
            d: "10"
        },
        correctAnswer: "15",
    },
    {
        question: "National code of Pakistan is?",
        option: {
            a: "PAK",
            b: "PK",
            c: "None of them",
        },
        correctAnswer: "PK",
    },
]

window.onload = function () {
    question.innerText = question_bank[count1].question;
    option1.innerText = question_bank[count1].option.a;
    option2.innerText = question_bank[count1].option.b;
    option3.innerText = question_bank[count1].option.c;
    option4.innerText = question_bank[count1].option.d;

}
var btn = document.getElementById("btn");
function next() {

    count1++
    

    question.innerText = question_bank[count1].question;
    option1.innerText = question_bank[count1].option.a;
    option2.innerText = question_bank[count1].option.b;
    option3.innerText = question_bank[count1].option.c;
    option4.innerText = question_bank[count1].option.d;



    if(count1 > 5){
       
        btn.innerText = "Finish"


    }


}


function correctAnswer(e){
    var li = document.getElementsByTagName('li');
    li[0].classList.remove('selected');
    li[1].classList.remove('selected');
    li[2].classList.remove('selected');
    li[3].classList.remove('selected')
    e.classList.add('selected');
    

}

