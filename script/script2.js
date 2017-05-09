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

window.onload = function () {
  startTest();
  genderValidation();
}
