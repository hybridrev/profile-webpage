let initialContent = "";

window.addEventListener('DOMContentLoaded', () => {
    const konten = document.getElementById("konten");
    initialContent = konten.innerHTML;
    history.replaceState({ page: "initial" }, "Awal");
});

function loadContent(file) {
    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error("Gagal memuat konten: " + response.status);
            }
            return response.text();
        })
        .then(html => {
            
        konten.innerHTML = html;
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 10);

            history.pushState({ page: file }, "", "");
        })
        .catch(err => {
            document.getElementById("konten").innerHTML = "<p style='color:red'>" + err.message + "</p>";
        });
}

window.addEventListener("popstate", (event) => {
    const state = event.state;
    if (!state || state.page === "initial") {
        document.getElementById("konten").innerHTML = initialContent;
    } else {
        loadContent(state.page);
    }
});