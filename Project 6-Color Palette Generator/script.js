const generateBtn = document.getElementById("generateBtn");

const singalHexColorGenerator = () => {
    const hex = [0, 1, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
        const random = Math.floor(Math.random() * hex.length);
        hexColor += hex[random];
    }
    return hexColor;
};

const colorPaletteGenerator = () => {
    const colorPalette = [];

    for (let i = 0; i < 4; i++) {
        colorPalette.push(singalHexColorGenerator());
    }
    return colorPalette;
};

const renderColorPalette = () => {
    const colorContainer = document.querySelector(".colors_container");


    colorContainer.innerHTML = "";
    const colorPalette = colorPaletteGenerator();

    colorPalette.forEach((color, i) => {
        const colorDiv = document.createElement("div");
        colorDiv.id = `color${i + 1}`;
        colorDiv.className = "colorBox";
        colorDiv.style.background = color;
        const colorTag = document.createElement("p");
        colorTag.id = `color${i + 1}Tag`;
        colorTag.className = "colorTag"
        colorTag.innerHTML = color;

        colorDiv.appendChild(colorTag)
        colorContainer.appendChild(colorDiv)
    });

    const copytoClipBoard = (id) => {
        const el = document.getElementById(id)
        navigator.clipboard.writeText(el.innerText).then(() =>{
            alert("Copied to clipbord")
        }).catch((error) => {
            alert("Could not copy")
        })
    };

    const colorTag = document.querySelectorAll(".colorTag");
    colorTag.forEach((colorTag, i) => {
        colorTag.addEventListener("click", () =>
            copytoClipBoard(`color${i + 1}Tag`)
        );
    })
}

renderColorPalette();
generateBtn.addEventListener("click", renderColorPalette);
