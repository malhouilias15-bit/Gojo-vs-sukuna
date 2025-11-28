document.addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();
    let output = document.getElementById("output");

    switch (key) {
        // Gojo
        case "1": output.textContent = "Gojo used BLUE!"; break;
        case "2": output.textContent = "Gojo used RED!"; break;
        case "3": output.textContent = "Gojo used PURPLE!"; break;
        case "4": output.textContent = "Gojo activated LIMITLESS!"; break;
        case "5": output.textContent = "Gojo used HOLLOW PURPLE!!!"; break;

        // Sukuna
        case "q": output.textContent = "Sukuna used CLEAVE!"; break;
        case "w": output.textContent = "Sukuna used DISMANTLE!"; break;
        case "e": output.textContent = "Sukuna used FIRE ARROW!"; break;
        case "r": output.textContent = "Sukuna activated DOMAIN EXPANSION!"; break;
        case "t": output.textContent = "Sukuna summoned MALEVOLENT SHRINE!"; break;

        default:
            output.textContent = "Invalid key.";
    }
});
