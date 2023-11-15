// ===============================================
//           JS_DOM_II_Uebungen_Bonus
// ===============================================

const catGif = document.body.querySelector('#cat');
let windowWidth = window.innerWidth;
let move;
let direction = true;
let speedMode = false;
let steps = 20;
let leftPos = 0;
let intervalDuration = 100;

const catMove = () =>
{
    if(leftPos < (windowWidth - 330) && direction)
    {
        if(speedMode)
        {
            leftPos += steps;
        }
        else
        {
            leftPos += steps;
        }
        
    }
    else if (leftPos < 0)
    {
        direction = true;
        catGif.style.transform = 'scaleX(1)';
    }
    else
    {
        direction = false;
        catGif.style.transform = 'scaleX(-1)';
        if(speedMode)
        {
            leftPos -= steps;
        }
        else
        {
            leftPos -= steps;
        }
    }
    catGif.style.left = `${leftPos}px`;
}

const catWalk = () => 
{
    clearInterval(move);
    move = setInterval(catMove, 100);
}

const pause = () => 
{
    clearInterval(move);
}

const turn = () => 
{
    if(direction)
    {
        direction = false;
        catGif.style.transform = 'scaleX(-1)';
    }
    else
    {
        direction = true;
        catGif.style.transform = 'scaleX(1)';
    }
}

const catSpeed = () => 
{
    steps = 20;
    clearInterval(move);
    move = setInterval(catMove, 10);
}