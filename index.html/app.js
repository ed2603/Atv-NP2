document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("cadastroForm");
    const lista = document.getElementById("listaUsuarios");
    const toggleTheme = document.getElementById("toggleTheme");

    // Evento de submit
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;

        adicionarUsuario(nome, email);
        form.reset();
    });

    // Tema claro/escuro
    toggleTheme.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
        document.body.classList.toggle("light-theme");
    });

    // AJAX para carregar dados iniciais
    carregarUsuarios();
});

function adicionarUsuario(nome, email) {
    const lista = document.getElementById("listaUsuarios");

    const item = document.createElement("li");
    item.className = "list-group-item";
    item.textContent = `${nome} - ${email}`;

    lista.appendChild(item);
}

// AJAX (fetch)
function carregarUsuarios() {
    fetch("data/fake-api.json")
        .then(response => response.json())
        .then(data => {
            data.forEach(user => {
                adicionarUsuario(user.nome, user.email);
            });
        })
        .catch(err => console.error("Erro AJAX:", err));
}