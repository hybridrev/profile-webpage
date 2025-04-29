const lines = "Makan mie ayam enak kali yak";
const output = document.getElementById("output");

lines.forEach(line => {
    const p = document.createElement("p");
    p.textContent = line;
    output.appendChild(p);
});