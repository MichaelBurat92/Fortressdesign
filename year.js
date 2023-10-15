// Ein Date-Objekt erstellen
var currentDate = new Date();

// Das aktuelle Jahr abrufen
var currentYear = currentDate.getFullYear();
const von = document.getElementById('von');
von.innerHTML= currentYear;
// Das Jahr ausgeben
console.log("Das aktuelle Jahr ist: " + currentYear);
// Ein Date-Objekt erstellen
var currentDate = new Date();

// Das aktuelle Jahr abrufen
var currentYear2 = currentDate.getFullYear() + 2;
const bis = document.getElementById('bis');
bis.innerHTML = currentYear2;
