const questions = {
    fun: [
        "If you could have any superpower, what would it be and why?",
        "What’s the most ridiculous thing you’ve seen online recently?",
        "If your pet could talk, what do you think they would say?",
        "If you could swap lives with a character from a movie, who would it be?",
        "What's the weirdest food combination you've ever tried?",
        "If you had to describe yourself using only three emojis, which ones would you pick?",
        "If animals could talk, which one do you think would be the funniest to have a conversation with?",
        "If you had a time machine, but you could only use it once, where and when would you go?",
        "What’s the most hilarious thing that has ever happened at school?",
        "If you could be a contestant on any game show, which one would it be?",
        "What’s a song that always puts you in a good mood?",
        "If you could switch lives with any celebrity for a day, who would it be?",
        "If you could only eat one food for the rest of your life, what would it be?",
        "What’s the funniest meme or TikTok you’ve seen recently?",
        "If you were an animal, what animal would you be and why?"
    ],
    deep: [
        "What’s a belief you’ve questioned recently?",
        "What’s one thing you wish adults understood about your generation?",
        "How do you define success for yourself?",
        "If you could ask your future self one question, what would it be?",
        "What’s something you’ve changed your mind about in the past year?",
        "What’s something you’ve learned about yourself in the past year?",
        "If you could talk to your younger self, what advice would you give?",
        "When was the last time you felt really proud of yourself?",
        "What’s something you wish you were better at?",
        "How do you handle situations where you don’t agree with a friend?",
        "What’s a mistake that taught you an important lesson?",
        "If you could change one thing about the way people treat each other, what would it be?",
        "What does 'happiness' mean to you?",
        "Do you think people are born with certain personalities, or do we create our own?",
        "If someone wrote a book about your life, what would the title be?"
    ],
    thought: [
        "What’s a popular opinion that you completely disagree with?",
        "How do you know if a piece of news is trustworthy?",
        "What’s an example of something that people blindly follow?",
        "Why do you think people believe conspiracy theories?",
        "If you had to create a 'BS detector' for spotting fake news, what would you include?",
        "What’s a belief or opinion you used to have but changed your mind about?",
        "How do you know when someone is trying to manipulate you?",
        "Why do people fall for scams even when there are warnings about them?",
        "If social media didn't exist, how would the world be different?",
        "What do you think is the biggest lie people believe without questioning?",
        "How does advertising influence what we think we need?",
        "What do you think is more powerful—money or influence? Why?",
        "If history was rewritten by the losers instead of the winners, what do you think would change?",
        "If you could ask a world leader any question and they had to answer honestly, what would you ask?",
        "What do you think makes someone truly intelligent?"
    ],
    life: [
        "What’s one practical skill you think all teens should learn?",
        "How do you handle stress when things feel overwhelming?",
        "What’s a financial tip you think young people should know?",
        "What’s the best advice you’ve ever received?",
        "If you could teach a class on any life skill, what would it be?",
        "What’s one thing you wish they taught in school that would actually help you in life?",
        "If you had to budget $500 for one month, how would you spend it?",
        "What’s the most important thing to look for when making a big decision?",
        "If you had to cook dinner for your family, what would you make?",
        "How do you stay motivated when you don’t feel like doing something?",
        "If you had to explain credit cards to someone who didn’t know what they were, how would you do it?",
        "What do you think makes someone a good leader?",
        "How do you handle stress when you’re feeling overwhelmed?",
        "What’s one thing you think future employers will care about most?",
        "What’s something about adulthood that seems confusing to you?"
    ],
    surprise: [] // This will be filled dynamically
};

// Populate "Surprise Me!" category with all questions combined
questions.surprise = [...questions.fun, ...questions.deep, ...questions.thought, ...questions.life];

function showRandomQuestion() {
    const category = document.getElementById("category").value;
    const randomIndex = Math.floor(Math.random() * questions[category].length);
    document.getElementById("question").textContent = questions[category][randomIndex];
}

// Show a question from the default category when the page loads
window.onload = showRandomQuestion;
