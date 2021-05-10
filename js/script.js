var ulElement = document.getElementById("elenco_studenti");

// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
var student = {
  nome: "Giorgio",
  cognome: "Zocchi",
  eta: 32,
};

// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
console.log(
  "- Stampare attraverso un ciclo for-in tutte le proprietà dell'oggetto:"
);
for (var key in student) {
  console.log("proprietà: " + key + " - valore: " + student[key]);
}

// Creare un array di oggetti di studenti.
var classroom = [
  {
    nome: "Mario",
    cognome: "Rossi",
    eta: 23,
  },
  {
    nome: "Carla",
    cognome: "Bianchi",
    eta: 33,
  },
  {
    nome: "Carlo",
    cognome: "Esposito",
    eta: 18,
  },
  {
    nome: "Martina",
    cognome: "Colombo",
    eta: 31,
  },
];
classroom.push(student);

// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
console.log("- Stampare per ogni studente nome e cognome:");
for (var i = 0; i < classroom.length; i++) {
  console.log(classroom[i].nome, classroom[i].cognome);
}

// Dare la possibilità all'utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell'ordine: nome, cognome e età.
var newStudent = {};

var newName = prompt("Inserisci il Nome:").trim();
newStudent.nome = newName;
var newSurname = prompt("Inserisci il Cognome:").trim();
newStudent["cognome"] = newSurname;
newStudent.eta = parseInt(prompt("Inserisci l'età:"));

classroom.push(newStudent);

for (var i = 0; i < classroom.length; i++) {
  ulElement.innerHTML += "<li>" + classroom[i].nome + " " + classroom[i].cognome + "</li>";
}
