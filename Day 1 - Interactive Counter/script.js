document.addEventListener('DOMContentLoaded', function() { //Our dom loads then the below script runs
    const incrementBtn = document.getElementById('increment'); 
    const decrementBtn = document.getElementById('decrement');
    const numberDisplay = document.getElementById('number');
    const resetBtn = document.getElementById('reset');
    let count = parseInt(numberDisplay.textContent);

    incrementBtn.addEventListener('click', function(){ 
        console.log("Increment clicked");
        count++;
        numberDisplay.textContent = count;
        numberDisplay.style.fontSize = "70px";
        setTimeout(() => {numberDisplay.style.fontSize = "48px"}, 200);
    })

    decrementBtn.addEventListener('click', function(){
        console.log("Decrement clicked");
        if (count > 0)
        {
            count--;
        } 
        numberDisplay.textContent = count;
        numberDisplay.style.fontSize = "70px";
        setTimeout(() => {numberDisplay.style.fontSize = "48px"}, 200);
    });

    resetBtn.addEventListener('click', function (){
        console.log("Reset clicked");
        count = 0;
        numberDisplay.textContent = count;
    })
})