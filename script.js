const contenido = document.getElementById('container');
const FersData = async () => {
const respuesta = await fetch("https://rickandmortyapi.com/api/character")
const data = await respuesta.json();
const personajes = data.results;
personajes.forEach(element => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML += `
    <h2>${element.name}</h2>
    <h3>${element.species}</h3>
    <img src="${element.image}">
    `;
    contenido.appendChild(card);
});
}

FersData();