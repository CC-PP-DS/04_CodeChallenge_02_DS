/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

-->zB: "Max trinkt Cola."

/* Getränke-Challenge */

let userName = prompt("Bitte Namen eingeben: ");
let userAge = Number(prompt("Wie alt bist du?"));

switch (true) {
    case userAge <= 5:
        console.log(userName, "bekommt Milch.");
        break;

    case userAge <= 12:
        console.log(userName, "bekommt Saft.");
        break;

    case userAge <= 17:
        console.log(userName, "bekommt Cola.");
        break;

    default:
        console.log(userName, "bekommt Wein.")
        break;
}

if (userAge <= 5) {
    console.log(userName, "bekommt mülch.");    
}
else if (userAge > 5 && age <= 12){
    console.log(userName, "bekommt säft.");
}
else if (userAge > 12 && age <= 17){
    console.log(userName, "bekommt cherry-coke.");
}
else {
    console.log(userName, "dürf scho wein dringn.");
}