const lines = ["Kamu adalah cahaya paling bersinar di dunia untukku. Kamu telah menerangi hatiku yang dulu sepi. Sejak bertemu denganmu, duniaku berubah menjadi lebih hangat dan lembut.", "Melihatmu saja sudah membuat hati ini terasa senang. Aku bahkan tidak menyangka bisa bertemu denganmu saat itu.", "Aku tidak tau apa yang terjadi kalo aku tidak pernah bertemu denganmu saat itu, mungkin aku akan tetap seperti dulu.", "Kau telah mengubah diriku sejauh ini, meskipun kau tidak tau akan hal itu.", "Tapi aku hanya ingin kau tau, bahwa senyum manismu telah menciptakan \"Butterfly Effect\" pada hidupku."];
const output = document.getElementById("output");

lines.forEach(line => {
    const p = document.createElement("p");
    p.textContent = line;
    output.appendChild(p);
});