// function to calculate bmi
function calculate() {
    // input to text box
    let weight =  document.getElementById('weight').value;
    let height =  document.getElementById('height').value;
    let age = document.getElementById('Age').value;


    // display results to DOM
    let result = (weight / (height * height) * 10000)
         document.getElementById('onscreen').innerHTML= result.toFixed(1);

        if (result.toFixed(1) < 18.4) {
            document.getElementById("onscreen").innerHTML = 'Your BMI is '+result.toFixed(1)+'. Unfortunately you are underweight :(';
            
        } 
        else if (result.toFixed(1) >= (18,5) && result.toFixed(1) <=24.9){
            document.getElementById("onscreen").innerHTML = "Good job! Your BMI is "+result.toFixed(1)+". Your body weight is normal.";
        }
        else if (result.toFixed(1) >= 25 && result.toFixed(1) <= 29.9) {
            document.getElementById("onscreen").innerHTML = 'Your BMI is '+result.toFixed(1)+'. Unfortunately you are overweight. :(';
        } 
        else if (result.toFixed(1) > 40 ){
            document.getElementById("onscreen").innerHTML = 'Your BMI is '+result.toFixed(1)+'. You are obese!';
        } 
        else {
            document.getElementById('onscreen').innerHTML = "Please enter values"
        }

}

// function to clear everything
function clr() {
    document.getElementById('weight').value= ""
    document.getElementById('height').value= ""
    document.getElementById('onscreen').innerHTML= ""
    document.getElementById('Age').value= ""
}
 