const characters = [
    "Firefly",
    "Alya",
    "Kagura",
    "Zhuxin",
    "Reze",
    "Furina",
    "Hu Tao",
    "Herta",
    "Acheron",
    "Ikuyo Kita",
    "Ryo Yamada",
    "Kurumi",
    "Lance",
    "Lemon",
    "Rayne",
    "Mikasa",
    "Ruan Mei",
    // "Miku",
    // "Stelle",
    // "Takina"
];

const container = document.getElementById('coser-list');

characters.forEach(name => {
    // Nama folder pakai nama asli tapi spasi diubah jadi tanpa spasi
    const folder = name.replace(/\s+/g, '');
    
    // Buat elemen a
    const a = document.createElement('a');
    a.className = 'button-li';
    a.setAttribute('onclick', `loadContent('${folder}/index.html')`);

    // Tambahkan img
    const img = document.createElement('img');
    img.className = 'images';
    img.src = `${folder}/${folder}.jpg`;

    // Tambahkan h1
    const h1 = document.createElement('h1');
    h1.textContent = name;

    // Susun elemen
    a.appendChild(img);
    a.appendChild(h1);
    container.appendChild(a);
});