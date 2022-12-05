/* все переменные */
/* Все вопросы и варианты овтеты к ним */
let answer_button = document.getElementsByClassName("answer_button");
let buttons_answers = document.getElementsByClassName("buttons_answers");
let question__title = document.getElementById("__question__title__");
const Fictions = document.getElementById("Fictions");

/* результат */
let question = document.getElementById("question_1");
let result = document.getElementById("result");
let result_txt = document.getElementById("result_txt");

/* Счётчики */
let count = 0;
let count_correct_anwer = 0;
const questions = 10;

/* список всех вариантов ответа */
const list_answer = [
    ["stork", "bison", "Wolf", "Fox"],
    ["Neman", "Pripyat", "Dnieper", "Sozh"],
    ["9,5 milion people", "10,504 milion people", "8 milion people", "1 human"],
    ["Brest", "Gomel", "Polscha", "Minsk"],
    ["Draniki", "Sorcerers(колдуны)", "Potatoes", "Vereshchak"],
    ["Chervone", "Osveyskoye", "Naroch", "Richie"],
    ["National Library", "Presidential Library ( There is such a library too", "a house on a tree", "Kirill( why not ?"],
    ["23 floors", "32 floors", "10 floors", "19 floors"],
    ["Athletics", "chess and checkers", "tennis", "football"],
    ["Yankovskaya Anastasia Alexandrovna", "Yankovskaya Anastasia Alexandrovna", "Yankovskaya Anastasia Alexandrovna", "Yankovskaya Anastasia Alexandrovna"]
];


/* список всех правильных вопросов */
const list_correct_answer = [
    "bison","Dnieper", "Привет Настя_10",
    "9,5 milion people", "Polscha", "Vereshchak",
    "Potatoes", "Sorcerers", "Draniki", "Naroch", 
	"National Library", "23 floors", 
	"tennis", "Yankovskaya Anastasia Alexandrovna"
];


/* список всех вопросов */
const list_question__title = [
    ["National animal on Belarus"],
    ["The longest river in Belarus"],
    ["Population of Belarus (Bonal question"],
    ["what does not apply to Belarus"],
    ["the National dish"],
    ["the largest lakes in Belarus (again about water"],
    ["the largest library in Belarus"],
    ["How many floors in the national library"],
    ["the most popular sport in Belarus"],
    ["the best teatcher on English"]
];


/* показывает результат */
function rusult() {
    question.style.display = "none";
    result_txt.append(count_correct_anwer + " from 10");
    result.style.display = "block";
}


/* следуйщий вопрос */
function next_question() {
    /* проверка */
    if (count == questions) {
        rusult();
    }

    /* цикл каторый из списка призначает значение кнопкам */
    for (let i = 0; i < 4; i++) {
        /* призначает варианты ответов из списка */
        answer_button[i].textContent = list_answer[count][i];

        /* призначает вопросы из списка */
        question__title.textContent = list_question__title[count][0];

        /* задаёт атриюут value с их значениями, 
           для того чтоб можно было бы проверить в проверке */
        buttons_answers[i].setAttribute('value', list_answer[count][i])
        answer_button[i].setAttribute('value', list_answer[count][i])
    }
    count++;
}

/* проверка */
Fictions.addEventListener("click", function(e) {
    if ((e.target.nodeName.toLowerCase() == "p") || (e.target.nodeName.toLowerCase() == "button")) {
        /* Бёрём значение по атрибуту value */
        let word = e.target.getAttribute("value");
        console.log(word);
        if (list_correct_answer.includes(word) == true) {
            count_correct_anwer++;
            next_question();
        } else {
            next_question();
        }
    }
});



next_question();