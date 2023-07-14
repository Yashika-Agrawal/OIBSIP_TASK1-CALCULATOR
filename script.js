let display=document.getElementById("display");
//to target all the buttons we will use an array
let buttons=Array.from(document.getElementsByClassName('button'));
buttons.map(button=> button.addEventListener('click',(e)=>
{
    switch(e.target.innerText)
    {
        case 'C':
            console.log(e.target.innerText);
            display.innerText='';
            break;
        case '←':
            if(display.innerText)
            {
                display.innerText=display.innerText.slice(0,-1);
            }
            break;
        case '=':
            try{
                display.innerText=eval(display.innerText);
            }
            catch{
                display.innerText='Error';
              setTimeout( display.innerText='',1000);
            }
            break;
        default:
            display.innerText+=e.target.innerText;
    }
}
))

