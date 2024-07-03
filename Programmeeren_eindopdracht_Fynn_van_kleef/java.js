let pizza = document.getElementById("pizza");
// extra kaas
const changeImage = document.querySelector("button")
function verander(change) {
    if(change == true){
        pizza.src = "images/Extra_kaas_pizza .jpeg"
    } else{
        console.log("error")
    }
}

// Pepperoni
const peperoniChange = document.querySelector("button:nth-child(2)");
function verander2e(change) {
    if(change == true){
        pizza.src = "images/Pepperoni_pizza.jpeg"
    } else{
        console.log("error")
    }
}

// Dunne korst
const dunneKorst = document.querySelector("button:nth-child(3)");
function verander3e(change) {
    if(change == true){
        pizza.src = "images/Dunne_crust_pizza.jpeg";
    } else{
        consonle.log("error")
    }   
}

// Dikke korst
const dikkeKorst = document.querySelector("button:nth-child(4)");
function verander4(change) {
    if(change == true){
        pizza.src = "Images/dikke_crust_pizza.jpeg";
    } else{
        console.log("error")
    }
}

//klaar
const klaarKnop = document.querySelector("#finishBtn:nth-child(1)")
function verander5(change) {
    if(change == true){
        pizza.src = "Images/happy_person_pizza.png";
    } else[
        colnsole.log("error")
    ]
    
}

//reset
const resetKnop = document.querySelector("#finishBtn2:nth-child(2)")
function verander6(change) {
    if(change == true){
        pizza.src = "Images/Pizza_start.jpeg"
    } else{
        console.log("error")
    }
}


function changeEverything(select) {
    switch(select){
        case "dikkekorst": 
        verander4(true)
        break;
        case "dunnekorst":
        verander3e(true)
        break;
        case "peperoniChange":
        verander2e(true)
        break;
        case "changeImage":
            verander(true)
        break;
        case "klaarknop":
            verander5(true)
        break;
        case "resetknop":
            verander6(true)
            break;
        default:
            console.log("error");
    }
}

changeImage.addEventListener("click", () => changeEverything("changeImage"));
peperoniChange.addEventListener("click", () => changeEverything("peperoniChange"));
dunneKorst.addEventListener("click", () => changeEverything("dunnekorst"));
dikkeKorst.addEventListener("click", () => changeEverything("dikkekorst"));


klaarKnop.addEventListener("click", () => changeEverything("klaarknop"));
resetKnop.addEventListener("click", () => changeEverything("resetknop"));




// document.querySelector("#finishBtn:nth-child(1)") ik heb geleerd om verschillende bijv. buttons te selecteren 
// met behulp van chat gpt door te vragen: kan ik met .querySelector alleen het eerste element wat in mijn DOM staat 
// selecteren, of kan ik ook hetzelfde element maar bijv eentje erna selecteren. en toen kreeg ik de info om nth-child te gebruiken. 



// Bronnen voor img:
// cartoon meisje met pizza: https://www.istockphoto.com/nl/vector/meisje-eten-pizza-schattig-kid-fast-food-gm1170509344-323928528
// alle andere Images: https://www.shutterstock.com/search/cartoon-pizza-crust en https://www.vecteezy.com

// Bron voor eigenonderzoek(switch case):https://www.w3schools.com/java/java_switch.asp

