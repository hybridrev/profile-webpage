const characters = [
    "Firefly",
    "Alya",
    "Kagura",
    "Hu Tao",
    "Sawako",
    "Zhuxin",
    "Reze",
    "Furina",
    "Herta",
    "Acheron",
    "Ikuyo Kita",
    "Ryo Yamada",
    "Kurumi",
    "Lance",
    "Lemon",
    "Rayne",
    "Mikasa",
    "MJ",
    "Ruan Mei",
    // "Miku",
    "Stelle",
    // "Takina"
];

const container = document.getElementById('coser-list');

characters.forEach(name => {
    const folder = name.replace(/\s+/g, '');
    
    const a = document.createElement('a');
    a.className = 'button-li';
    a.setAttribute('onclick', `loadContent('${folder}/index.html')`);

    const img = document.createElement('img');
    img.className = 'images';
    img.src = `${folder}/${folder}.jpg`;

    const h1 = document.createElement('h1');
    h1.textContent = name;

    a.appendChild(img);
    a.appendChild(h1);
    container.appendChild(a);
});