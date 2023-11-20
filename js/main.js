"use strict"

// Array di oggetti 

const arrayTeam =[
    {
        nome : "Wayne Barnett",
        ruolo : "Founder & CEO",
        foto : "wayne-barnett-founder-ceo.jpg",
    },
    {
        nome : "Angela Caroll",
        ruolo : "Chief Editor",
        foto : "angela-caroll-chief-editor.jpg",
    },
    {
        nome : "Walter Gordon",
        ruolo : "Office Manager",
        foto : "walter-gordon-office-manager.jpg",
    },
    {
        nome : "Angela Lopez",
        ruolo : "Social Media Manager",
        foto : "angela-lopez-social-media-manager.jpg",
    },
    {
        nome : "Scott Estrada",
        ruolo : "Developer",
        foto : "scott-estrada-developer.jpg",
    },
    {
        nome : "Barbara Ramos",
        ruolo : "Graphic Designer",
        foto : "barbara-ramos-graphic-designer.jpg",
    },
]


console.log(arrayTeam)

// Stampa in console
for(let i = 0; i < arrayTeam.length;i++ ){
    console.log(arrayTeam[i])
};


//Stampa sul DOM

const team = document.querySelector(".team")

for(let i = 0; i < arrayTeam.length;i++ ){
    //Stampo nome
    const nome = document.createElement("h2")
    nome.textContent = `${arrayTeam[i].nome}`
    team.append(nome);

    //Stampo ruolo
    const ruolo = document.createElement("span")
    ruolo.textContent = `${arrayTeam[i].ruolo}`
    team.append(ruolo);
    //Stampo foto
    const foto = document.createElement("p")
    foto.textContent = `${arrayTeam[i].foto}`
    team.append(foto);
};