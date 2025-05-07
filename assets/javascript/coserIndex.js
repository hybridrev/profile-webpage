// script.js
document.addEventListener('DOMContentLoaded', () => {
    const cosplayer = [
        "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"
    ];

    const container = document.getElementById('coser-index');

    cosplayer.forEach(name => {
        const file = name.replace(/\s+/g, '');

        // Buat elemen <a>
        const a = document.createElement('a');
        a.href = `${file}/${file}.html`; // opsional kalau mau kasih link

        // Buat elemen img
        const img = document.createElement('img');
        img.className = 'images-cos';
        img.src = `Firefly/img/${file}.jpg`;

        // Susun
        a.appendChild(img);
        container.appendChild(a);
    });
});
