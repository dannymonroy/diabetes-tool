value = 0;

function startTest(){
  document.getElementById("ok").onclick = function () {
      document.getElementById("introduction").style.display = "none";
      document.getElementById("question1").style.display = "inline";
  }
}

/*This function allows to transition between questions*/

function transition(num) {
    if(num != 3) {
        document.getElementById("question" + (num - 1)).style.display = "none";
        document.getElementById("question" + num).style.display = "inline";
    } else {
        document.getElementById("question" + (num - 1)).style.display = "none";
        document.getElementById("question" + num).style.display = "inline-block";
    }
}

/*
* Gender Validation: Just passing if one or the other are clicked.
*/

function genderValidation() {
    document.getElementById("male").onclick = function () {
        value += 1;
        document.getElementById("gender_title").innerHTML = "Your gender is Male";
        window.setTimeout(transition, 1500, 2);
    }
    document.getElementById("female").onclick = function () {
        value += 0;
        document.getElementById("gender_title").innerHTML = "Your gender is Female";
        window.setTimeout(transition, 1500, 2);
    }
}

/*
* Gender Validation: Just passing if one or the other are clicked.
*/

function genderValidation() {
    document.getElementById("male").onclick = function () {
        value += 1;
        document.getElementById("gender_title").innerHTML = "Your gender is Male";
        window.setTimeout(transition, 1500, 2);
    }
    document.getElementById("female").onclick = function () {
        value += 0;
        document.getElementById("gender_title").innerHTML = "Your gender is Female";
        window.setTimeout(transition, 1500, 2);
    }
}

/* Age Validation
* AgeValueAssigment: Assigns the value if the validation is passed/
* ageValidation: Confirms that the age is not empty, older than 18 and is a valid digit for an age.
*/

function ageValueAssignment(age){
    document.getElementById("age_title").innerHTML = "You are " + age + " years old.";
    if(age >= 18 && age <= 49){
        value += 0;
        window.setTimeout(transition, 1500, 3);
    } else if (age > 50 && age <= 59){
        value += 5;
        window.setTimeout(transition, 1500, 3);
    } else if(age > 60 && age <= 69) {
        value += 9;
        window.setTimeout(transition, 1500, 3);
    } else {
        value += 13;
        window.setTimeout(transition, 1500, 3);
    }

    return age;

}

function ageValidation() {
    var numRegEx = /[0-9]{1,3}/;
    document.getElementById("ok_age").onclick = function () {

        var age =  document.getElementById("age").value;
        var ageEmpty = document.getElementById("ageEmpty");
        var ageWrong = document.getElementById("ageWrong");
        var ageYoung = document.getElementById("ageYoung");

        if(age === ""){
            ageEmpty.style.display = "block";
            ageWrong.style.display = "none";
            ageYoung.style.display = "none";

        } else if (!numRegEx.test(age) || age > 119 || age <= 0) {
            ageEmpty.style.display = "none";
            ageWrong.style.display = "block";
            ageYoung.style.display = "none";

        } else if (age < 18) {
            ageEmpty.style.display = "none";
            ageWrong.style.display = "none";
            ageYoung.style.display = "block";

        } else {
            ageEmpty.style.display = "none";
            ageWrong.style.display = "none";
            ageYoung.style.display = "none";
            ageValueAssignment(age);
        }

    }
}

window.onload = function () {
  startTest();
  genderValidation();
  ageValidation();
}
