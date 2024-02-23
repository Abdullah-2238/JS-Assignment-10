const fruits = ["Apple", "Mango", "Papaya", "Coconut", "Grapes", "Banana"];

const sName = document.getElementById("showName");
let listItems =""; 

for (let i = 0; i < fruits.length; i++) {
    listItems += "<li>" + fruits[i] + "</li>"; 
}

sName.innerHTML = "<ul>" + listItems + "</ul>"; 