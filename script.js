// script.js

const questions = [
    {
        question: "What is the capital of Japan?",
        choices: ["Seoul", "Tokyo", "Beijing", "Bangkok"],
        correctAnswer: "Tokyo"
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        choices: ["Earth", "Mars", "Venus", "Jupiter"],
        correctAnswer: "Mars"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        choices: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Leo Tolstoy"],
        correctAnswer: "William Shakespeare"
    },
    {
        question: "In which year did the Titanic sink?",
        choices: ["1910", "1912", "1915", "1918"],
        correctAnswer: "1912"
    },
    {
        question: "What is the largest mammal in the world?",
        choices: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        correctAnswer: "Blue Whale"
    },
    {
        question: "Which country is known as the 'Land of the Rising Sun'?",
        choices: ["China", "Japan", "South Korea", "Vietnam"],
        correctAnswer: "Japan"
    },
    {
        question: "Who painted the Mona Lisa?",
        choices: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        correctAnswer: "Leonardo da Vinci"
    },
    {
        question: "What is the currency of Brazil?",
        choices: ["Peso", "Real", "Rupee", "Dollar"],
        correctAnswer: "Real"
    },
    {
        question: "Which gas do plants absorb from the atmosphere during photosynthesis?",
        choices: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        correctAnswer: "Carbon Dioxide"
    },
    {
        question: "Who is the author of 'To Kill a Mockingbird'?",
        choices: ["Harper Lee", "J.K. Rowling", "George Orwell", "Ernest Hemingway"],
        correctAnswer: "Harper Lee"
    },
    {
        question: "Which ocean is the largest on Earth?",
        choices: ["Atlantic Ocean", "Indian Ocean", "Southern Ocean", "Pacific Ocean"],
        correctAnswer: "Pacific Ocean"
    },
    {
        question: "What is the capital of Australia?",
        choices: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        correctAnswer: "Canberra"
    },
    {
        question: "Who is known as the 'Father of Computer Science'?",
        choices: ["Bill Gates", "Alan Turing", "Steve Jobs", "Tim Berners-Lee"],
        correctAnswer: "Alan Turing"
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        choices: ["Osmium", "Oxygen", "Oganesson", "Obtusium"],
        correctAnswer: "Oxygen"
    },
    {
        question: "What is the largest desert in the world?",
        choices: ["Sahara Desert", "Gobi Desert", "Antarctica", "Arctic Desert"],
        correctAnswer: "Antarctica"
    },
    {
        question: "Who is the Greek god of the sea?",
        choices: ["Zeus", "Poseidon", "Hades", "Apollo"],
        correctAnswer: "Poseidon"
    },
    {
        question: "What is the capital of Canada?",
        choices: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
        correctAnswer: "Ottawa"
    },
    {
        question: "Who discovered penicillin?",
        choices: ["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Joseph Lister"],
        correctAnswer: "Alexander Fleming"
    },
    {
        question: "What is the largest organ in the human body?",
        choices: ["Heart", "Liver", "Skin", "Lung"],
        correctAnswer: "Skin"
    },
    {
        question: "Who is the author of '1984'?",
        choices: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "J.K. Rowling"],
        correctAnswer: "George Orwell"
    },
    {
        question: "What is the capital of South Africa?",
        choices: ["Cape Town", "Johannesburg", "Pretoria", "Durban"],
        correctAnswer: "Pretoria"
    },
    {
        question: "Which planet is known as the 'Blue Planet'?",
        choices: ["Earth", "Uranus", "Neptune", "Saturn"],
        correctAnswer: "Earth"
    },
    {
        question: "Who painted 'Starry Night'?",
        choices: ["Claude Monet", "Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci"],
        correctAnswer: "Vincent van Gogh"
    },
    {
        question: "What is the largest island in the world?",
        choices: ["Greenland", "Australia", "Borneo", "Madagascar"],
        correctAnswer: "Greenland"
    },
    {
        question: "Who is known as the 'Father of Modern Physics'?",
        choices: ["Isaac Newton", "Albert Einstein", "Niels Bohr", "Galileo Galilei"],
        correctAnswer: "Albert Einstein"
    },
    {
        question: "Which river is the longest in the world?",
        choices: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
        correctAnswer: "Nile River"
    },
    {
        question: "Who wrote 'The Great Gatsby'?",
        choices: ["F. Scott Fitzgerald", "Ernest Hemingway", "Jane Austen", "Charles Dickens"],
        correctAnswer: "F. Scott Fitzgerald"
    },
    {
        question: "In which country did the Renaissance period begin?",
        choices: ["Italy", "France", "England", "Spain"],
        correctAnswer: "Italy"
    },
    {
        question: "What is the capital of Argentina?",
        choices: ["Buenos Aires", "Santiago", "Lima", "Brasilia"],
        correctAnswer: "Buenos Aires"
    },
    {
        question: "Who is the Greek god of the sea?",
        choices: ["Zeus", "Poseidon", "Hades", "Apollo"],
        correctAnswer: "Poseidon"
    },
    {
        question: "What is the currency of Japan?",
        choices: ["Won", "Yuan", "Yen", "Ringgit"],
        correctAnswer: "Yen"
    },
    {
        question: "Which element is essential for human bone health?",
        choices: ["Iron", "Calcium", "Potassium", "Magnesium"],
        correctAnswer: "Calcium"
    },
    {
        question: "Who wrote 'Pride and Prejudice'?",
        choices: ["Charlotte Brontë", "Jane Austen", "Emily Brontë", "Charles Dickens"],
        correctAnswer: "Jane Austen"
    },
    {
        question: "What is the largest ocean on Earth?",
        choices: ["Atlantic Ocean", "Indian Ocean", "Southern Ocean", "Pacific Ocean"],
        correctAnswer: "Pacific Ocean"
    },
    {
        question: "Who is known as the 'Queen of Pop'?",
        choices: ["Beyoncé", "Madonna", "Lady Gaga", "Rihanna"],
        correctAnswer: "Madonna"
    },
    {
        question: "In which year did the first manned moon landing occur?",
        choices: ["1965", "1969", "1973", "1977"],
        correctAnswer: "1969"
    },
    {
        question: "What is the capital of China?",
        choices: ["Beijing", "Shanghai", "Hong Kong", "Tokyo"],
        correctAnswer: "Beijing"
    },
    {
        question: "Who discovered the theory of relativity?",
        choices: ["Isaac Newton", "Galileo Galilei", "Albert Einstein", "Niels Bohr"],
        correctAnswer: "Albert Einstein"
    },
    {
        question: "Which country is known as the 'Land of Fire and Ice'?",
        choices: ["Iceland", "Greenland", "Canada", "Russia"],
        correctAnswer: "Iceland"
    },
    {
        question: "What is the chemical symbol for gold?",
        choices: ["Au", "Ag", "Fe", "Cu"],
        correctAnswer: "Au"
    },
    {
        question: "Who painted 'The Persistence of Memory'?",
        choices: ["Claude Monet", "Pablo Picasso", "Vincent van Gogh", "Salvador Dalí"],
        correctAnswer: "Salvador Dalí"
    },
    {
        question: "What is the currency of India?",
        choices: ["Rupiah", "Rupee", "Ringgit", "Rand"],
        correctAnswer: "Rupee"
    },
    {
        question: "Which mammal can fly?",
        choices: ["Bat", "Mouse", "Squirrel", "Rat"],
        correctAnswer: "Bat"
    },
    {
        question: "Who is the author of 'The Hobbit'?",
        choices: ["J.R.R. Tolkien", "George R.R. Martin", "C.S. Lewis", "J.K. Rowling"],
        correctAnswer: "J.R.R. Tolkien"
    },
    {
        question: "In which year did the Berlin Wall fall?",
        choices: ["1985", "1989", "1991", "1995"],
        correctAnswer: "1989"
    },
    {
        question: "What is the capital of Egypt?",
        choices: ["Cairo", "Alexandria", "Giza", "Luxor"],
        correctAnswer: "Cairo"
    },
    {
        question: "Who wrote 'The Catcher in the Rye'?",
        choices: ["J.D. Salinger", "F. Scott Fitzgerald", "Ernest Hemingway", "Mark Twain"],
        correctAnswer: "J.D. Salinger"
    },
    {
        question: "What is the currency of Mexico?",
        choices: ["Peso", "Real", "Dollar", "Euro"],
        correctAnswer: "Peso"
    },
    {
        question: "Which gas makes up the majority of Earth's atmosphere?",
        choices: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"],
        correctAnswer: "Nitrogen"
    },
    {
        question: "Who was the first President of the United States?",
        choices: ["Thomas Jefferson", "John Adams", "George Washington", "James Madison"],
        correctAnswer: "George Washington"
    },
    {
        question: "What is the largest moon in our solar system?",
        choices: ["Europa", "Titan", "Ganymede", "Callisto"],
        correctAnswer: "Ganymede"
    },
    {
        question: "Who is the author of 'The Great Expectations'?",
        choices: ["Charles Dickens", "Jane Austen", "Charlotte Brontë", "Emily Brontë"],
        correctAnswer: "Charles Dickens"
    },
    {
        question: "What is the capital of South Korea?",
        choices: ["Seoul", "Busan", "Incheon", "Jeju"],
        correctAnswer: "Seoul"
    },
    {
        question: "Which element is represented by the symbol 'K'?",
        choices: ["Potassium", "Calcium", "Sodium", "Magnesium"],
        correctAnswer: "Potassium"
    },
    {
        question: "Who is the Greek god of wisdom?",
        choices: ["Zeus", "Apollo", "Athena", "Hera"],
        correctAnswer: "Athena"
    },
    {
        question: "What is the currency of Russia?",
        choices: ["Ruble", "Euro", "Dinar", "Tenge"],
        correctAnswer: "Ruble"
    },
    {
        question: "Which planet is known as the 'Morning Star'?",
        choices: ["Venus", "Mars", "Jupiter", "Mercury"],
        correctAnswer: "Venus"
    },
    {
        question: "Who discovered the theory of electromagnetism?",
        choices: ["Michael Faraday", "Thomas Edison", "Nikola Tesla", "James Clerk Maxwell"],
        correctAnswer: "James Clerk Maxwell"
    },
    {
        question: "What is the capital of Brazil?",
        choices: ["Brasília", "Rio de Janeiro", "São Paulo", "Salvador"],
        correctAnswer: "Brasília"
    },
    {
        question: "Who is the lead vocalist of the band Queen?",
        choices: ["Freddie Mercury", "Roger Taylor", "Brian May", "John Deacon"],
        correctAnswer: "Freddie Mercury"
    },
    {
        question: "Which country is known as the 'Land of the Midnight Sun'?",
        choices: ["Norway", "Sweden", "Finland", "Denmark"],
        correctAnswer: "Norway"
    },
    {
        question: "What is the smallest prime number?",
        choices: ["1", "2", "3", "5"],
        correctAnswer: "2"
    },
    {
        question: "Who is the author of 'The Iliad'?",
        choices: ["Homer", "Virgil", "Ovid", "Sophocles"],
        correctAnswer: "Homer"
    },
    {
        question: "What is the chemical symbol for water?",
        choices: ["H2O", "CO2", "O2", "N2"],
        correctAnswer: "H2O"
    },
    {
        question: "What is the capital of Turkey?",
        choices: ["Istanbul", "Ankara", "Izmir", "Antalya"],
        correctAnswer: "Ankara"
    },
    {
        question: "Who wrote 'The Lord of the Rings' trilogy?",
        choices: ["J.K. Rowling", "C.S. Lewis", "J.R.R. Tolkien", "George R.R. Martin"],
        correctAnswer: "J.R.R. Tolkien"
    },
    {
        question: "What is the currency of South Korea?",
        choices: ["Won", "Yen", "Wonja", "Ringgit"],
        correctAnswer: "Won"
    },
    {
        question: "Which gas is known as 'Laughing Gas'?",
        choices: ["Oxygen", "Carbon Dioxide", "Nitrous Oxide", "Helium"],
        correctAnswer: "Nitrous Oxide"
    },
    {
        question: "Who is the current Prime Minister of Canada?",
        choices: ["Justin Trudeau", "Stephen Harper", "Andrew Scheer", "Jagmeet Singh"],
        correctAnswer: "Justin Trudeau"
    },
    {
        question: "What is the largest planet in our solar system?",
        choices: ["Earth", "Jupiter", "Saturn", "Neptune"],
        correctAnswer: "Jupiter"
    },
    {
        question: "Who wrote 'Wuthering Heights'?",
        choices: ["Charlotte Brontë", "Jane Austen", "Emily Brontë", "Charles Dickens"],
        correctAnswer: "Emily Brontë"
    },
    {
        question: "What is the currency of China?",
        choices: ["Yuan", "Yen", "Renminbi", "Won"],
        correctAnswer: "Yuan"
    },
    {
        question: "Which element is essential for plant photosynthesis?",
        choices: ["Oxygen", "Nitrogen", "Carbon", "Chlorophyll"],
        correctAnswer: "Carbon"
    },
    {
        question: "Who was the first woman to win a Nobel Prize?",
        choices: ["Marie Curie", "Jane Goodall", "Rosalind Franklin", "Dorothy Crowfoot Hodgkin"],
        correctAnswer: "Marie Curie"
    },
    {
        question: "What is the capital of Mexico?",
        choices: ["Mexico City", "Guadalajara", "Monterrey", "Cancun"],
        correctAnswer: "Mexico City"
    },
    {
        question: "Who is known as the 'Father of Modern Chemistry'?",
        choices: ["Robert Boyle", "Antoine Lavoisier", "John Dalton", "Dmitri Mendeleev"],
        correctAnswer: "Antoine Lavoisier"
    },
    {
        question: "Which planet is known as the 'Evening Star'?",
        choices: ["Mars", "Venus", "Mercury", "Jupiter"],
        correctAnswer: "Venus"
    },
    {
        question: "What is the largest continent on Earth?",
        choices: ["North America", "Africa", "Asia", "Europe"],
        correctAnswer: "Asia"
    },
    {
        question: "Who is the author of 'The Grapes of Wrath'?",
        choices: ["John Steinbeck", "F. Scott Fitzgerald", "Ernest Hemingway", "Mark Twain"],
        correctAnswer: "John Steinbeck"
    },
    {
        question: "What is the currency of South Africa?",
        choices: ["Rand", "Peso", "Dinar", "Dirham"],
        correctAnswer: "Rand"
    },
    {
        question: "Which ocean is the smallest on Earth?",
        choices: ["Atlantic Ocean", "Indian Ocean", "Southern Ocean", "Arctic Ocean"],
        correctAnswer: "Arctic Ocean"
    },
    {
        question: "What is the square root of 144?",
        choices: ["10", "12", "14", "16"],
        correctAnswer: "12"
    },
    {
        question: "Who wrote 'The Picture of Dorian Gray'?",
        choices: ["Oscar Wilde", "Charles Dickens", "Jane Austen", "Virginia Woolf"],
        correctAnswer: "Oscar Wilde"
    },
    {
        question: "What is the capital of Spain?",
        choices: ["Barcelona", "Madrid", "Seville", "Valencia"],
        correctAnswer: "Madrid"
    },
    {
        question: "Which mammal lays eggs?",
        choices: ["Platypus", "Kangaroo", "Dolphin", "Elephant"],
        correctAnswer: "Platypus"
    },
    {
        question: "Who is the author of 'The Canterbury Tales'?",
        choices: ["Geoffrey Chaucer", "William Shakespeare", "John Milton", "Thomas More"],
        correctAnswer: "Geoffrey Chaucer"
    },
    {
        question: "What is the chemical symbol for silver?",
        choices: ["Si", "Ag", "Au", "Pt"],
        correctAnswer: "Ag"
    },
    {
        question: "Who won the Nobel Prize in Physics for the discovery of radioactivity?",
        choices: ["Marie Curie", "Albert Einstein", "Max Planck", "Niels Bohr"],
        correctAnswer: "Marie Curie"
    },
    {
        question: "What is the capital of Argentina?",
        choices: ["Buenos Aires", "Santiago", "Lima", "Brasilia"],
        correctAnswer: "Buenos Aires"
    },
    {
        question: "Which composer is known as the 'Immortal Beloved'?",
        choices: ["Wolfgang Amadeus Mozart", "Ludwig van Beethoven", "Johann Sebastian Bach", "Franz Schubert"],
        correctAnswer: "Ludwig van Beethoven"
    },
    {
        question: "What is the currency of Australia?",
        choices: ["Dollar", "Euro", "Pound", "Yen"],
        correctAnswer: "Dollar"
    },
    {
        question: "Who was the first woman to fly solo across the Atlantic Ocean?",
        choices: ["Amelia Earhart", "Beryl Markham", "Jacqueline Cochran", "Harriet Quimby"],
        correctAnswer: "Amelia Earhart"
    },
    {
        question: "What is the smallest prime number?",
        choices: ["1", "2", "3", "5"],
        correctAnswer: "2"
    },
    {
        question: "Who is the author of 'Brave New World'?",
        choices: ["Aldous Huxley", "George Orwell", "Ray Bradbury", "Isaac Asimov"],
        correctAnswer: "Aldous Huxley"
    },
    {
        question: "What is the capital of Italy?",
        choices: ["Rome", "Milan", "Venice", "Florence"],
        correctAnswer: "Rome"
    },
    {
        question: "Which country is known as the 'Land of the Long White Cloud'?",
        choices: ["Australia", "New Zealand", "Canada", "Ireland"],
        correctAnswer: "New Zealand"
    },
    {
        question: "Who discovered the law of gravity?",
        choices: ["Isaac Newton", "Galileo Galilei", "Johannes Kepler", "Albert Einstein"],
        correctAnswer: "Isaac Newton"
    },
    {
        question: "What is the chemical symbol for iron?",
        choices: ["I", "Fe", "Au", "Ag"],
        correctAnswer: "Fe"
    },
    {
        question: "Who painted 'The Starry Night'?",
        choices: ["Claude Monet", "Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci"],
        correctAnswer: "Vincent van Gogh"
    },
    {
        question: "What is the currency of Sweden?",
        choices: ["Krona", "Euro", "Pound", "Franc"],
        correctAnswer: "Krona"
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        choices: ["Earth", "Mars", "Venus", "Jupiter"],
        correctAnswer: "Mars"
    },
    {
        question: "Who is the author of 'One Hundred Years of Solitude'?",
        choices: ["Gabriel García Márquez", "Isabel Allende", "Julio Cortázar", "Mario Vargas Llosa"],
        correctAnswer: "Gabriel García Márquez"
    },
    {
        question: "What is the capital of Saudi Arabia?",
        choices: ["Dubai", "Doha", "Abu Dhabi", "Riyadh"],
        correctAnswer: "Riyadh"
    },
    {
        question: "Which bird is the symbol of peace?",
        choices: ["Hawk", "Eagle", "Dove", "Owl"],
        correctAnswer: "Dove"
    },
    {
        question: "Who is the Greek god of war?",
        choices: ["Ares", "Apollo", "Zeus", "Hermes"],
        correctAnswer: "Ares"
    },
    {
        question: "What is the capital of Russia?",
        choices: ["St. Petersburg", "Moscow", "Kiev", "Minsk"],
        correctAnswer: "Moscow"
    },
    {
        question: "Which planet is known as the 'Blue Planet'?",
        choices: ["Earth", "Uranus", "Neptune", "Saturn"],
        correctAnswer: "Earth"
    },
    {
        question: "Who is known as the 'Father of Modern Physics'?",
        choices: ["Isaac Newton", "Albert Einstein", "Niels Bohr", "Galileo Galilei"],
        correctAnswer: "Albert Einstein"
    },
    {
        question: "What is the capital of India?",
        choices: ["Mumbai", "Delhi", "Kolkata", "Bangalore"],
        correctAnswer: "Delhi"
    },
    {
        question: "Which river is the longest in the world?",
        choices: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
        correctAnswer: "Nile River"
    },
    {
        question: "Who is the author of 'The Great Gatsby'?",
        choices: ["F. Scott Fitzgerald", "Ernest Hemingway", "Jane Austen", "Charles Dickens"],
        correctAnswer: "F. Scott Fitzgerald"
    },
    {
        question: "In which country did the Renaissance period begin?",
        choices: ["Italy", "France", "England", "Spain"],
        correctAnswer: "Italy"
    },
    {
        question: "What is the capital of Argentina?",
        choices: ["Buenos Aires", "Santiago", "Lima", "Brasilia"],
        correctAnswer: "Buenos Aires"
    },
    {
        question: "Who is the Greek god of the sea?",
        choices: ["Zeus", "Poseidon", "Hades", "Apollo"],
        correctAnswer: "Poseidon"
    },
    {
        question: "What is the currency of Japan?",
        choices: ["Won", "Yuan", "Yen", "Ringgit"],
        correctAnswer: "Yen"
    },
    {
        question: "Which element is essential for human bone health?",
        choices: ["Iron", "Calcium", "Potassium", "Magnesium"],
        correctAnswer: "Calcium"
    },
    {
        question: "Who wrote 'Pride and Prejudice'?",
        choices: ["Charlotte Brontë", "Jane Austen", "Emily Brontë", "Charles Dickens"],
        correctAnswer: "Jane Austen"
    },
    {
        question: "What is the largest ocean on Earth?",
        choices: ["Atlantic Ocean", "Indian Ocean", "Southern Ocean", "Pacific Ocean"],
        correctAnswer: "Pacific Ocean"
    },
    {
        question: "Who is known as the 'Queen of Pop'?",
        choices: ["Beyoncé", "Madonna", "Lady Gaga", "Rihanna"],
        correctAnswer: "Madonna"
    },
    {
        question: "In which year did the first manned moon landing occur?",
        choices: ["1965", "1969", "1973", "1977"],
        correctAnswer: "1969"
    },
    {
        question: "What is the capital of China?",
        choices: ["Beijing", "Shanghai", "Hong Kong", "Tokyo"],
        correctAnswer: "Beijing"
    },
    {
        question: "Who discovered the theory of relativity?",
        choices: ["Isaac Newton", "Galileo Galilei", "Albert Einstein", "Niels Bohr"],
        correctAnswer: "Albert Einstein"
    },
    {
        question: "Which country is known as the 'Land of Fire and Ice'?",
        choices: ["Iceland", "Greenland", "Canada", "Russia"],
        correctAnswer: "Iceland"
    },
    {
        question: "What is the chemical symbol for gold?",
        choices: ["Au", "Ag", "Fe", "Cu"],
        correctAnswer: "Au"
    },
    {
        question: "Who painted 'The Persistence of Memory'?",
        choices: ["Claude Monet", "Pablo Picasso", "Vincent van Gogh", "Salvador Dalí"],
        correctAnswer: "Salvador Dalí"
    },
    {
        question: "What is the currency of India?",
        choices: ["Rupiah", "Rupee", "Ringgit", "Rand"],
        correctAnswer: "Rupee"
    },
    {
        question: "Which mammal can fly?",
        choices: ["Bat", "Mouse", "Squirrel", "Rat"],
        correctAnswer: "Bat"
    },
    {
        question: "Who is the author of 'The Hobbit'?",
        choices: ["J.R.R. Tolkien", "George R.R. Martin", "C.S. Lewis", "J.K. Rowling"],
        correctAnswer: "J.R.R. Tolkien"
    },
    {
        question: "In which year did the Berlin Wall fall?",
        choices: ["1985", "1989", "1991", "1995"],
        correctAnswer: "1989"
    },
   
    // Continue adding more questions here
];











let currentQuestionIndex = 0;
let score = 0;
const totalQuestions = 5;

document.addEventListener('DOMContentLoaded', startQuiz);

function startQuiz() {
    shuffleQuestions();
    showQuestion();
}

function shuffleQuestions() {
    // Fisher-Yates (Knuth) Shuffle algorithm
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
}

function showQuestion() {
    const questionElement = document.getElementById('question');
    const optionsContainer = document.getElementById('options-container');
    const currentQuestion = questions[currentQuestionIndex];

    questionElement.textContent = currentQuestion.question;
    updateQuestionNumber();

    optionsContainer.innerHTML = '';

    currentQuestion.choices.forEach((option, index) => {
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'options';
        input.value = option;
        input.id = `option${index + 1}`;

        const label = document.createElement('label');
        label.textContent = option;
        label.setAttribute('for', `option${index + 1}`);

        const button = document.createElement('div');
        button.classList.add('option-container');
        button.appendChild(input);
        button.appendChild(label);

        input.addEventListener('change', () => selectOption(option));

        optionsContainer.appendChild(button);
    });

    document.getElementById('submit-btn').disabled = false;
    document.getElementById('next-btn').disabled = true;
    document.getElementById('result').textContent = '';
}

function selectOption(selectedOption) {
    const correctOption = questions[currentQuestionIndex].correctAnswer;

    document.getElementById('submit-btn').disabled = false;
    document.getElementById('next-btn').disabled = true;

    const resultElement = document.getElementById('result');
    resultElement.textContent = '';

    document.querySelectorAll('.option-container').forEach(option => {
        option.classList.remove('selected-option');
    });

    const selectedOptionElement = document.querySelector(`input[value="${selectedOption}"]`);
    selectedOptionElement.parentElement.classList.add('selected-option');
}

function checkAnswer() {
    const selectedOption = document.querySelector('#options-container input[name="options"]:checked');

    if (selectedOption) {
        const correctOption = questions[currentQuestionIndex].correctAnswer;

        if (selectedOption.value === correctOption) {
            score++;
        }

        document.getElementById('submit-btn').disabled = true;
        document.getElementById('next-btn').disabled = false;

        const resultElement = document.getElementById('result');
        resultElement.textContent = selectedOption.value === correctOption ? 'Correct!' : `Wrong! The correct answer is ${correctOption}.`;

        document.querySelectorAll('input[name="options"]').forEach(option => {
            option.disabled = true;
        });
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < totalQuestions) {
        showQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `<h1>Quiz Completed!</h1>
                               <p>Your score is ${score} out of ${totalQuestions}.</p>`;
}

function updateQuestionNumber() {
    const questionNumberElement = document.getElementById('question-number');
    questionNumberElement.textContent = `Question ${currentQuestionIndex + 1} of ${totalQuestions}`;
}
