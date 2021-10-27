$(document).ready(show_cupcakes);

var cup_cakes=[
    {"name":"Chocolate","calories":"high","weight":"200gm"},
    {"name":"Carrot","calories":"medium","weight":"150gm"},
    {"name":"Banana","calories":"high","weight":"200gm"},
    {"name":"Strawberry","calories":"low","weight":"160gm"},
    {"name":"Peanut","calories":"medium","weight":"200gm"}
];


let cupcakeTable = document.getElementById("cupcake-table");
function show_cupcakes(){
    //write code that shows the cupcakes in the table as per the instructions
    for(let i = 0; i<cup_cakes.length ; i++){
       let tr1 = document.createElement("tr");
       let td1 = document.createElement("td");
       td1.innerHTML = cup_cakes[i].name;
       let td2 = document.createElement("td");
       td2.innerHTML = cup_cakes[i].calories;
       let td3 = document.createElement("td");
       td3.innerHTML = cup_cakes[i].weight;
       tr1.append(td1);
       tr1.append(td2);
       tr1.append(td3);
       cupcakeTable.append(tr1);

       if(cup_cakes[i].calories === "high"){
        td2.style.backgroundColor = "red"
    }else if (cup_cakes[i].calories === "medium"){
     td2.style.backgroundColor = "orange"
    } else td2.style.backgroundColor = "green"
    }
    
}



let usernameInput = document.querySelector("#customer-name");
let userCount = document.querySelector("#count");
let selectType = document.querySelector("#type");
let selectDeliveryTime = document.querySelector("#delivery-time");
let selectAllergies = document.querySelector("#allergies");

let customerForm = document.querySelector(".customer-form")
customerForm.addEventListener("submit", function validate(e) {
  //write code that validates the form
  e.preventDefault()
  if(usernameInput.value.length >= 5 && usernameInput.value.length <= 16){
      document.querySelector(".validation-1").innerHTML = "Okay";
      document.querySelector(".validation-1").style.color = "green";
      usernameInput.style.borderColor = "green";
      localStorage.setItem("user", JSON.stringify(usernameInput.value))
  }else {
    document.querySelector(".validation-1").innerHTML = "The name must be between 5 and 16 character long";
    document.querySelector(".validation-1").style.color = "red";
    usernameInput.style.borderColor = "red"
  }
  if (userCount.value.length >= 1 && userCount.value.length <= 15){
    document.querySelector(".validation-2").innerHTML = "Okay";
    document.querySelector(".validation-2").style.color = "green";
    userCount.style.borderColor = "green";
  } else{
    document.querySelector(".validation-2").innerHTML = "The count must be between 1 and 15 character long";
    document.querySelector(".validation-2").style.color = "red";
    userCount.style.borderColor = "red";
  }
  if(selectType.value === "none"){
    document.querySelector(".validation-3").innerHTML = "None is not accepted";
    document.querySelector(".validation-3").style.color = "red";
    selectType.style.borderColor = "red";
  } else {
    document.querySelector(".validation-3").innerHTML = "Okay";
    document.querySelector(".validation-3").style.color = "green";
    selectType.style.borderColor = "green";
  }
  if(selectDeliveryTime.value === "none"){
    document.querySelector(".validation-4").innerHTML = "None is not accepted";
    document.querySelector(".validation-4").style.color = "red";
    selectDeliveryTime.style.borderColor = "red";
  } else {
    document.querySelector(".validation-4").innerHTML = "Okay";
    document.querySelector(".validation-4").style.color = "green";
    selectDeliveryTime.style.borderColor = "green";
  } if(selectDeliveryTime.value === "4:00pm" && selectType.value === "chocolate"){
    document.querySelector(".validation-4").innerHTML = "Unfortunately Chocolate cupcakes cannot be delivered at 4pm";
    document.querySelector(".validation-4").style.color = "red";
    selectDeliveryTime.style.borderColor = "red";
  } if(selectAllergies.value === "dairy-free" && selectType.value === "chocolate"){
    document.querySelector(".validation-5").innerHTML = "This type of cake is not dairy-free";
    document.querySelector(".validation-5").style.color = "red";
    selectAllergies.style.borderColor = "red";
  } else if(selectAllergies.value === "nut-free" && selectType.value === "pecan"){
    document.querySelector(".validation-5").innerHTML = "This type of cake is not nut-free";
    document.querySelector(".validation-5").style.color = "red";
    selectAllergies.style.borderColor = "red"
  } else {
      document.querySelector(".validation-5").innerHTML = "Okay";
document.querySelector(".validation-5").style.color = "green";
selectAllergies.style.borderColor = "green";
  }
  
})

  



function show_storage(){
    //write code that shows the name from local storage
    let userName = JSON.parse(localStorage.getItem("user"));
    document.getElementById("welcome").innerHTML = `Welcome ${userName}`;
}