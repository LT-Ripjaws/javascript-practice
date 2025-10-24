const input = document.getElementById("textbox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelcius = document.getElementById("toCelcius");
const result = document.getElementById("result");
const form = document.getElementById("form");

document.addEventListener("DOMContentLoaded", ()=>{
    form.addEventListener("submit", function(e){
    
    e.preventDefault();
    let temp = input.value.trim();

    if(isNaN(temp))
    {
        result.textContent = "Please enter a valid temperature"
        return;
    }

    if(toFahrenheit.checked)
    {
        result.textContent = `${Math.round(Fahrenheit(temp))} F`;
    }
    else if (toCelcius.checked)
    {
        result.textContent = `${Math.round(Celcius(temp))} C`;
    }
    else 
        {result.textContent = "Please select a unit";}
});
});


function Fahrenheit(celcius)
    {
        let fahrenheit = (celcius * (9/5)) + 32;
        return fahrenheit;
    }

function Celcius(fahrenheit)
    {
        let celcius = (fahrenheit - 32) * (5/9);
        return celcius;
    }