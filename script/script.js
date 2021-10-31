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

function greenInput(message, input){
     message.innerHTML = "Okay";
     message.style.color = "green";
     input.style.borderColor = "green";
}
function redInput(message, input){
     message.style.color = "red";
     input.style.borderColor = "red";
}


let usernameInput = document.querySelector("#customer-name");
let userCount = document.querySelector("#count");
let selectType = document.querySelector("#type");
let selectDeliveryTime = document.querySelector("#delivery-time");
let selectAllergies = document.querySelector("#allergies");
let spans = document.getElementsByTagName("span");
let validationMsg1 = document.querySelector(".validation-1");
let validationMsg2 = document.querySelector(".validation-2");
let validationMsg3 = document.querySelector(".validation-3");
let validationMsg4 = document.querySelector(".validation-4");
let validationMsg5 = document.querySelector(".validation-5");

let customerForm = document.querySelector(".customer-form")
customerForm.addEventListener("submit", function validate(e) {
  //write code that validates the form
  e.preventDefault()
  if(usernameInput.value.length >= 5 && usernameInput.value.length <= 16){
      greenInput(validationMsg1, usernameInput);
      localStorage.setItem("user", JSON.stringify(usernameInput.value));
  }else {
    document.querySelector(".validation-1").innerHTML = "The name must be between 5 and 16 character long";
    redInput(validationMsg1, usernameInput);
  }
  if (userCount.value.length >= 1 && userCount.value.length <= 15){
    greenInput(validationMsg2, userCount);
  } else{
    document.querySelector(".validation-2").innerHTML = "The count must be between 1 and 15 character long";
    redInput(validationMsg2, userCount);
  }
  if(selectType.value === "none"){
    document.querySelector(".validation-3").innerHTML = "None is not accepted";
    redInput(validationMsg3, selectType);
  } else {
    greenInput(validationMsg3, selectType);
  }
  if(selectDeliveryTime.value === "none"){
    document.querySelector(".validation-4").innerHTML = "None is not accepted";
    redInput(validationMsg4, selectDeliveryTime);
  } else {
    greenInput(validationMsg4, selectDeliveryTime);

  } if(selectDeliveryTime.value === "4:00pm" && selectType.value === "chocolate"){
    document.querySelector(".validation-4").innerHTML = "Unfortunately Chocolate cupcakes cannot be delivered at 4pm";
    redInput(validationMsg4, selectDeliveryTime);
  } if(selectAllergies.value === "dairy-free" && selectType.value === "chocolate"){
    document.querySelector(".validation-5").innerHTML = "This type of cake is not dairy-free";
    redInput(validationMsg5, selectAllergies);
  } else if(selectAllergies.value === "nut-free" && selectType.value === "pecan"){
    document.querySelector(".validation-5").innerHTML = "This type of cake is not nut-free";
    redInput(validationMsg5, selectAllergies);
  } else {
    greenInput(validationMsg5, selectAllergies);
  }
  
})



function show_storage(){
    //write code that shows the name from local storage
    let userName = JSON.parse(localStorage.getItem("user"));
    if(userName){
      document.getElementById("welcome").innerHTML = `Welcome ${userName}`;
    }

}