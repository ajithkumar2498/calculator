let resultscreen=document.getElementById("perform");
let buttons=document.querySelectorAll(".button");
let operations=document.querySelectorAll(".button1");
let evaluate=document.getElementById("e");

// Keyup Events for number buttons
buttons.forEach((button) => {
button.addEventListener('keyup', function (e){
    e.preventDefault();
    if(e.target.key === key.target.match(/[0-9]\d/)) {
        try{
            resultscreen.value += e.target.value;
            console.log(resultscreen.value);
        }  
    catch(err){
        alert("Only Numbers are Allowed.");
    }}
}

);
})

// on click Events for operator buttons
operations.forEach((button1)=> {
    button1.addEventListener('click',function(e){
        let operators=e.target.value;
        resultscreen.value +=operators;
       console.log(operators)
   
    })
})
// on click Events for Equal buttons to do calculations
evaluate.addEventListener('click', function(e){
    let eval1=e.target.value;
    console.log(eval1)
        if(evaluate.value === '=') {
        try {    
            resultscreen.value = eval(resultscreen.value);                    
            } 
         catch (error) {     
            alert("Only Numbers are Allowed");
                                       
            }              
       }
})
// Clear input box
function Clear(){
    resultscreen.value = " ";
}
// Delete last charracter/number from the left
function Del(){
    resultscreen.value= resultscreen.value.slice(0,-1);
}
