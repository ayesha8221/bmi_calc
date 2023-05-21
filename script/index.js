// function to calculate bmi
function calculate() {
    // input to text box
    let weight =  document.getElementById('weight').value;
    let height =  document.getElementById('height').value;


    // display results to DOM
    let result = (weight / (height * height) * 10000)
         document.getElementById('onscreen').innerHTML= result; 

        // if (result < 18.4 || result >= (18.5, 24.9)) {
        //     document.getElementById("onscreen").innerHTML = 'Your BMI is '+result+'. Unfortunately you are underweight :(';
            
        // } 
        // else {
        //     document.getElementById("onscreen").innerHTML = "Good job! Your BMI is "+result+". Your body weight is normal.";
        // }

        if (result <= (25, 29.9) || result >= 30) {
            document.getElementById("onscreen").innerHTML = 'Your BMI is '+result+'. Unfortunately you are overweight. :(';
        } 

        else {
            document.getElementById("onscreen").innerHTML = 'Your BMI is '+result+'. You are obese!';
        }
}

// function to clear everything
function clr() {
    document.getElementById('weight').value= ""
    document.getElementById('height').value= ""
    document.getElementById('onscreen').innerHTML= ""
}

// function for one decimal place

