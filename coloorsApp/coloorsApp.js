// Global Selections and Variables  
const colorDivs = document.querySelectorAll('.color');
const currentHexes=document.querySelectorAll('.color h2');

const generateButton = document.querySelector('.generate');

// Here is another way to select based on an HTML element, the input tag with the type of range
const sliders = document.querySelectorAll('input[type=range]');


// Functions 

//Generate random color
function generateHex(){
    
    //Chroma library used here to use its random function of the chroma class 
    const ranColor = chroma.random();

    return ranColor;
}

// Assign random colors to each of the color divs 
function randomColors(){
    colorDivs.forEach((div, index) =>{
        const hexText = div.children[0];
        const randColor= generateHex();
        console.log(div.children[0]);

        div.style.backgroundColor= randColor;
        hexText.innerText=randColor;

        //Check for Contrast
        checkTextContrast(randColor,hexText);

    });
}

function checkTextContrast(color, text){
    //This function checks from 0-1 how luminant a color is, this statement assigns it to the const 
    const luminance = chroma(color).luminance();

    if(luminance > 0.5){
        text.style.color='black';
    }
    else{
        text.style.color='white';
    }
}

randomColors();