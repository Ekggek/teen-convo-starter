const questions = {
    fun: [
        "If you could have any superpower, what would it be and why?",
        "What’s the most ridiculous thing you’ve seen online recently?",
        "If your pet could talk, what do you think they would say?",
        "If you could swap lives with a character from a movie, who would it be?",
        "What's the weirdest food combination you've ever tried?",
        "If you had a time machine, where and when would you go?",
        "What’s the funniest prank you've ever seen or done?",
        "If you could be a character in any TV show, which one would you pick?",
        "What’s the most hilarious joke you’ve heard recently?",
        "If you had to live inside a video game, which one would it be?"
    ],
    self_reflection: [
        "What’s a belief you’ve questioned recently?",
        "What’s one thing you wish adults understood about your generation?",
        "How do you define success for yourself?",
        "If you could ask your future self one question, what would it be?",
        "What’s something you’ve changed your mind about in the past year?",
        "What’s one thing you’ve learned about yourself this year?",
        "What’s a personal goal you’re working toward?",
        "What’s a mistake that taught you an important lesson?",
        "How do you handle stress when things feel overwhelming?",
        "If you could write a letter to your younger self, what advice would you give?"
    ],
    big_questions: [
        "What’s a popular opinion that you completely disagree with?",
        "How do you know if a piece of news is trustworthy?",
        "What’s an example of something that people blindly follow?",
        "Why do you think people believe conspiracy theories?",
        "If you had to create a 'BS detector' for spotting fake news, what would you include?",
        "If you could change one law, what would it be?",
        "Why do people tend to believe things that confirm what they already think?",
        "Is there such a thing as an absolute truth, or is everything subjective?",
        "What’s an idea or belief you used to have but no longer do?",
        "What’s a question you think more people should be asking?"
    ],
    life_skills: [
        "What’s one practical skill you think all teens should learn?",
        "How do you handle stress when things feel overwhelming?",
        "What’s a financial tip you think young people should know?",
        "What’s the best advice you’ve ever received?",
        "If you could teach a class on any life skill, what would it be?",
        "How do you decide what’s a want vs. a need?",
        "What’s one thing about adulthood that seems confusing to you?",
        "How do you make sure you're spending your time wisely?",
        "What’s the best way to stay organized?",
        "What’s a common money mistake people make that you want to avoid?"
    ],
    daily_reflections: [
        "What was the best part of your day today?",
        "Did anything surprise you today?",
        "What’s something you laughed about today?",
        "What’s something you did today that you’re proud of?",
        "If you could redo one part of your day, what would it be?",
        "What’s something that’s been on your mind lately?",
        "If you had to describe your mood as a weather forecast, what would it be?",
        "What’s been stressing you out the most this week?",
        "What’s one thing I can do to support you right now?",
        "Do you feel like you’re balancing everything okay, or is anything feeling overwhelming?"
    ],
    creativity: [
        "If you could swap lives with anyone for a day, who would it be and why?",
        "If your life were a movie, what would the title be?",
        "If you had a theme song that played whenever you entered a room, what would it be?",
        "What’s a weird or funny thing you’ve seen online recently?",
        "If you could have dinner with any three fictional characters, who would you choose?",
        "If you could invent a new holiday, what would it celebrate?",
        "If you could design your dream weekend, what would you do?",
        "What’s something you and your friends talk about a lot?",
        "What’s one thing in pop culture that you don’t get the hype about?",
        "If you had to create a brand-new sport, what would it be like?"
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

// Load a random question on page load
window.onload = showRandomQuestion;
