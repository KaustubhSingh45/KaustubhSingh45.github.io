document.addEventListener("DOMContentLoaded", () => {
    // Typewriter Effect
    const texts = ["DEVELOPER", "DESIGNER", "STUDENT"];
    let speed = 100;
    const textElement = document.querySelector(".typewriter-text");
    let textIndex = 0;
    let charIndex = 0;

    function typeWriter() {
        if (charIndex < texts[textIndex].length) {
            textElement.innerHTML += texts[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, speed);
        } else {
            setTimeout(eraseText, 1000); // Pause before erasing
        }
    }

    function eraseText() {
        if (textElement.innerHTML.length > 0) {
            textElement.innerHTML = textElement.innerHTML.slice(0, -1);
            setTimeout(eraseText, 50); // Speed of erasing
        } else {
            textIndex = (textIndex + 1) % texts.length; // Move to the next word
            charIndex = 0;
            setTimeout(typeWriter, 500); // Delay before typing the next word
        }
    }

    typeWriter(); // Start the typewriter effect
});