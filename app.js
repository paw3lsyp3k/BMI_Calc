
function calcBmi(){
    let weight = parseInt(document.getElementById('weight').value);
    let height = parseInt(document.getElementById('height').value);
    let result = document.querySelector('.bmi_message');
    let description = document.querySelector('.bmi_description');

    if((weight === "" || isNaN(weight)) && height === "" || isNaN(height)){
        result.style.display="block";
        result.innerHTML = "Podaj właściwą wagę oraz wzrost!";
    }
    else if (weight === "" || isNaN(weight)){
        result.style.display="block";
        result.innerHTML = "Podaj właściwą wagę!";
    } else if (height === "" || isNaN(height)){
        result.style.display="block";
        result.innerHTML = "Podaj właściwy wzrost!";
    } else{
        let bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.style.display="block";
        result.innerHTML = "Twoje BMI wynosi: " +bmi;
        description.style.display="block";
        if(bmi<=18.5) {
            description.innerHTML = "Niedożywienie!";
            description.style.color="yellow";
        } else if(bmi>18.5 && bmi<=25){
            description.innerHTML = "Super! Jesteś w normie!";
            description.style.color="green";
        } else if(bmi>25 && bmi<=30){
            description.innerHTML = "Niestety, masz nadwagę!";
            description.style.color="yellow";
        } else if(bmi>30 && bmi<=35){
            description.innerHTML = "Niestety, jesteś otyły!";
            description.style.color="orange";
        }else if(bmi>35){
            description.innerHTML = "Jesteś skrajnie otyły!";
            description.style.color="red";
        }
    }
}