console.log("Tamagotchi");

//bron: Opdracht - Light bulb
let tamagotchiImage = document.querySelector(".tamagotchi img");
let feedButton = document.querySelector(".feed");
let medicineButton = document.querySelector(".medicine");
let talkButton = document.querySelector(".talking");
let danceButton = document.querySelector(".dancing");

//bron: Eakin, N. (2021, 16 december). Adding Sound to Your JS Web App - Noah Eakin - Medium. Medium. https://noaheakin.medium.com/adding-sound-to-your-js-web-app-f6a0ca728984//
let eatingSound = new Audio("sounds/mtemtem.wav");
let healthySound = new Audio("sounds/potion.wav");
let talkingSound = new Audio("sounds/no.wav");
let happySound = new Audio("sounds/success.wav"); 

//Bron: Opdracht MysteryNumber
var age = 0;
let cakeImage = document.querySelector("#cake");
let h2Element = document.querySelector("h2");

//bron: Kennisclip if-else
//bron: lesstof: Arrays
let tamagochiMood = document.querySelector("#mood");
let currentMood = ['healthy', 'eating', 'talking', 'happy'];

//bron: Opdracht - Light bulb
//bron: Eakin, N. (2021, 16 december). Adding Sound to Your JS Web App - Noah Eakin - Medium. Medium. https://noaheakin.medium.com/adding-sound-to-your-js-web-app-f6a0ca728984
function changeToEating(){ //deze functie zorgt ervoor dat de image, audio & mood veranderd naar "eating".
    tamagotchiImage.src = "images/tamagotchi_eating.png"; //met tamagotchiImage.src wordt de image geselecteerd.
    eatingSound.play(); //De audio "eatingSound" wordt afgespeeld
    currentMood = "eating"; //De mood van de tamagotchi wordt gezet. In dit geval: eating.
    changingMood(); //de functie changingMood staat ingeroepen om de mood van de tamagotchi up te daten.
}
    
feedButton.addEventListener('click', changeToEating); //De functie changeToEating zal via de addEvenListener worden geactiveerd worden door een click op de feed button.

function changeToHealthy(){
    tamagotchiImage.src = "images/tamagotchi_healthy.png";
    healthySound.play();
    currentMood = "healthy";
    changingMood();
}
medicineButton.addEventListener('click', changeToHealthy);


function changeToTalking(){
    tamagotchiImage.src = "images/tamagotchi_no.png";
    talkingSound.play()
    currentMood = "talking";
    changingMood();
}
talkButton.addEventListener('click', changeToTalking);

danceButton.addEventListener("click", changeToHappy);
function changeToHappy(){
    tamagotchiImage.src = "images/tamagotchi_happy.png";
    happySound.play()
    currentMood = "happy";
    changingMood();
}
danceButton.addEventListener('click', changeToHappy);

//Bron: Opdracht MysteryNumber
//bron: Kennisclip & lesstof if-else
function increaseAge(){ //De functie zorgt ervoor dat de leeftijd zich optelt met 1.
    age = age + 1;
    h2Element.textContent = age;
    console.log("Age: " + age);
    if(age >= 10){//Als de leeftijd gelijk of hoger is dan 10 dan veranderd de afbeelding en tekst.
        tamagotchiImage.src = "images/tamagotchi_birthday.png" 
        tamagochiMood.textContent = "Tamagotchi is a teenager now!";
      } else tamagotchiImage.src = "images/tamagotchi_happy.png";//Al is de leeftijd onder de 10 dan blijft de afbeelding op happy
}

cakeImage.addEventListener('click', increaseAge)

//bron: Kennisclip & lesstof if-else
//bron: lesstof: Arrays
function changingMood() { //deze if-else functie zorgt ervoor dat de tekst zal veranderen bij elke gezette mood van de tamagotchi
    if (currentMood == "happy"){
        tamagochiMood.textContent = "Tamagotchi is happy!";//De currentMood staat gelijk aan "happy" dus in het HTML bestand zal de h3 tekst veranderen.
    } else if (currentMood == "eating") {
      tamagochiMood.textContent = "Tamagotchi likes the cookie!";
    } else if (currentMood == "healthy"){
        tamagochiMood.textContent = "Tamagotchi feels great again!";
    } else if (currentMood == "talking"){
        tamagochiMood.textContent = "Tamagotchi said no!";
    } else (tamagochiMood.textContent = "Tamagotchi is sick..."); //Wanneer currentMood niet gelijk staat aan een van de bovenstaande zal deze teruggaan naar de ingevoerde h3 in het HTML bestand.
  }