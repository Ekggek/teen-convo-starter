const questions = {
    fun: [
        "If you could have any superpower, what would it be and why?",
        "What’s the most ridiculous thing you’ve seen online recently?",
        "If your pet could talk, what do you think they would say?",
        "If you could swap lives with a character from a movie, who would it be?",
        "What's the weirdest food combination you've ever tried?"
    ],
    self_reflection: [
        "What’s a belief you’ve questioned recently?",
        "What’s one thing you wish adults understood about your generation?",
        "How do you define success for yourself?",
        "If you could ask your future self one question, what would it be?",
        "What’s something you’ve changed your mind about in the past year?"
    ],
    big_questions: [
        "What’s a popular opinion that you completely disagree with?",
        "How do you know if a piece of news is trustworthy?",
        "What’s an example of something that people blindly follow?",
        "Why do you think people believe conspiracy theories?",
        "If you had to create a 'BS detector' for spotting fake news, what would you include?"
    ],
    life_skills: [
        "What’s one practical skill you think all teens should learn?",
        "How do you handle stress when things feel overwhelming?",
        "What’s a financial tip you think young people should know?",
        "What’s the best advice you’ve ever received?",
        "If you could teach a class on any life skill, what would it be?"
    ],
    daily_reflections: [
        "What was the best part of your day today?",
        "Did anything surprise you today?",
        "What’s something you laughed about today?",
        "What’s something you did today that you’re proud of?",
        "If you could redo one part of your day, what would it be?"
    ],
    creativity: [
        "If you could swap lives with anyone for a day, who would it be and why?",
        "If your life were a movie, what would the title be?",
        "If you had a theme song that played whenever you entered a room, what would it be?",
        "What’s a weird or funny thing you’ve seen online recently?",
        "If you could have dinner with any three fictional characters, who would you choose?"
    ],
    surprise: []
};

// Populate "Surprise Me!" category
questions.surprise = [
    ...questions.fun,
    ...questions.self_reflection,
    ...questions.big_questions,
    ...questions.life_skills,
    ...questions.daily_reflections,
    ...questions.creativity
];

function showRandomQuestion() {
    const category = document.getElementById("category").value;
    if (!questions[category]) {
        document.getElementById("question").textContent = "Please select a valid category.";
        return;
    }
    const randomIndex = Math.floor(Math.random() * questions[category].length);
    document.getElementById("question").textContent = questions[category][randomIndex];
}

// Save Favorite Question
function saveFavoriteQuestion() {
    let currentQuestion = document.getElementById("question").textContent;
    if (!currentQuestion || currentQuestion === "Select a category and click the button!") {
        alert("No question to save!");
        return;
    }

    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (!favorites.includes(currentQuestion)) {
        favorites.push(currentQuestion);
        localStorage.setItem("favorites", JSON.stringify(favorites));
        alert("Question saved to favorites!");
    } else {
        alert("This question is already in your favorites.");
    }
}

// View Favorite Questions
function viewFavorites() {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    let favoritesBox = document.getElementById("favorites-box");
    let favoritesList = document.getElementById("favorites-list");

    favoritesList.innerHTML = "";
    if (favorites.length === 0) {
        favoritesList.innerHTML = "<li>No saved questions yet.</li>";
    } else {
        favorites.forEach(question => {
            let li = document.createElement("li");
            li.textContent = question;
            favoritesList.appendChild(li);
        });
    }

    favoritesBox.style.display = "block";
}

// Clear Favorite Questions
function clearFavorites() {
    localStorage.removeItem("favorites");
    document.getElementById("favorites-list").innerHTML = "<li>No saved questions yet.</li>";
    alert("Favorites cleared!");
}
