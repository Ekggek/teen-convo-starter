const questions = [
    "What was the best part of your day today?",
    "If you could travel anywhere, where would you go and why?",
    "What’s something you’ve learned recently that surprised you?",
    "How do you decide what’s true or false when you see something online?",
    "What’s a trend that you don’t understand but everyone else seems to love?",
    "What’s one thing about school you wish adults understood better?",
    "If you could change one rule in the world, what would it be?",
    "What’s something you’ve done recently that made you feel proud?",
    "What’s the last thing that made you really laugh?",
    "If you could have dinner with any three people, dead or alive, who would they be?",
    "What’s one piece of advice you’d give to someone younger than you?",
    "What’s a stereotype about teens that you think is completely wrong?",
    "What’s the last thing you watched or listened to that made you think differently?",
    "If you had to explain your generation to someone from the past, what would you say?",
    "What’s something that adults worry about too much?",
];

function showRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    document.getElementById("question").textContent = questions[randomIndex];
}

// Show a random question when the page loads
window.onload = showRandomQuestion;
