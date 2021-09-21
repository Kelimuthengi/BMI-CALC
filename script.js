
var button = document.getElementById('btn');


button.addEventListener('click', function() {
    var weight = document.getElementById('kg').value;
    var height = document.getElementById('meters').value;
    var display = document.getElementById('showtext');
    var hsquare = height * height;
    var BMI = weight/hsquare;
    display.style.color = 'white' 

    if(BMI <= 18.5) {
        display.innerHTML = 'Underweight'
    }

    else if (BMI >= 18.5 && BMI < 25) {
        display.innerHTML = 'Healthy'
    }

    else if (BMI >= 25 && BMI <30) {
        display.innerHTML = 'Overweight'
    }

    else {
        display.innerHTML = 'OBESE!'
    }
})