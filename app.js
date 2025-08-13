const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const imgInput = document.querySelector("#image-file");
const inputText = document.querySelector("#input-text");
const textSize = document.querySelector("#text-size");
const textStyle = document.querySelector("#font-type");

canvas.width = 600;
canvas.height= 600;

// text function
function onTextDblclick(event) {
    const text = inputText.value;
    const fontSize = textSize.value;
    const fontType = textStyle.value;
    if(text !== "") {
        ctx.font = `${fontSize}px ${fontType}`;
        ctx.fillText(text, event.offsetX, event.offsetY);
    }
}


// image function
function onImgInputClick(event) {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.src = url;
    img.onload = function(){
        ctx.drawImage(img, 0, 0, 600, 600);
        imgInput.value = null;
    }
}


//Event Listener

canvas.addEventListener("dblclick", onTextDblclick);
imgInput.addEventListener("change", onImgInputClick);