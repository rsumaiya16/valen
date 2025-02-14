const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");
const cartoonImage = document.querySelector(".cartoon");
const questionText = document.querySelector("h1");

// Array of questions and corresponding GIFs
const questions = [
    { text: "Will you be my Valentine? 😳👉🏼👈🏼", gif: "cartoon1.gif" },
    { text: "Asholeoooo? 🥺", gif: "cartoon2.gif" },
    { text: "pinky promiseeee? 😳", gif: "cartoon3.gif" },
    { text: "Charbiii naaaa tohhhhh? 🤬", gif: "cartoon4.gif" },
    { text: "chummmma deeee", gif: "cartoon5.gif" }
];

let currentQuestion = 0; // Track current question

yesBtn.addEventListener("click", () => {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++; // Move to the next question
        questionText.textContent = questions[currentQuestion].text;
        cartoonImage.src = questions[currentQuestion].gif; // Change GIF
    } else {
        response.textContent = "lemme cringe u out a lil";
        response.style.color = "brown";

        // Redirect to the envelope-letter page
        setTimeout(() => {
            window.location.assign("envelope.html"); // Ensure this file exists
        }, 1500); // Delay for 1.5 seconds before loading
    }
});

noBtn.addEventListener("mousemove", () => {
    const x = Math.floor(Math.random() * 300) - 150;
    const y = Math.floor(Math.random() * 300) - 150;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});
