const quizQuestions = [
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
    // Continue adding more questions here
];
