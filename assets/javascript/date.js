// Tahun
const tahun = new Date().getFullYear();
    document.getElementById("tahun").innerText = `© ${tahun} AbenDoesnt — Made with Firefly's love 🤍`;

function dateDay() {
    // Tanggal
    const bulanPertahun = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"];
    const tanggalSekarang = new Date();
    const blnIndex = tanggalSekarang.getMonth();
    const tgl = tanggalSekarang.getDate();
    const bln = bulanPertahun[blnIndex];
    const thn = tanggalSekarang.getFullYear();

    // Hari
    var hariPerminggu = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var hariSekarang = new Date();
    var hariIndex = hariSekarang.getDay();
    var hari = hariPerminggu[hariIndex];

    const tanggal = `${hari}, ${bln} ${tgl}, ${thn}`;

    document.getElementById("date-day").textContent = tanggal;
}

// panggil function
dateDay();
