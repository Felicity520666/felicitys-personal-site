function toggleDarkMode() {
    const isDarkMode = document.body.classList.toggle("dark-mode");

    if (isDarkMode) {
        document.body.style.backgroundColor = "#1f1f2e";
        document.body.style.color = "#f6f1ff";
    } else {
        document.body.style.backgroundColor = "";
        document.body.style.color = "";
    }
}

function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomColor();
}

function changeTextColor() {
    document.body.style.color = getRandomColor();
}

function changeFont() {
    const fonts = ["Arial", "Verdana", "Times New Roman", "Courier New", "Georgia", "Comic Sans MS", "Trebuchet MS", "Impact"];
    document.body.style.fontFamily = fonts[Math.floor(Math.random() * fonts.length)];
}

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }

    return color;
}
