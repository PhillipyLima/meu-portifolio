// ==========================================
// ANIMAÇÃO DE ENTRADA DA PÁGINA
// ==========================================

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

// ==========================================
// MODO ESCURO
// ==========================================

const darkModeBtn = document.getElementById("darkModeBtn");

// Carrega preferência salva

window.addEventListener("DOMContentLoaded", () => {

    const temaSalvo = localStorage.getItem("tema");

    if (temaSalvo === "dark") {

        document.body.classList.add("dark-mode");

        darkModeBtn.innerHTML = "☀️ Modo Claro";
    }

});

// Alterna tema

darkModeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    const modoEscuroAtivo =
        document.body.classList.contains("dark-mode");

    if (modoEscuroAtivo) {

        localStorage.setItem("tema", "dark");

        darkModeBtn.innerHTML = "☀️ Modo Claro";

    } else {

        localStorage.setItem("tema", "light");

        darkModeBtn.innerHTML = "🌙 Modo Escuro";
    }

});

// ==========================================
// BOTÕES DOS PROJETOS
// ==========================================

const botoesProjetos =
document.querySelectorAll(".saibaMais");

botoesProjetos.forEach((botao) => {

    botao.addEventListener("click", () => {

        const projeto =
        botao
        .closest(".card")
        .querySelector(".card-title")
        .textContent;

        alert(
            `📌 Projeto: ${projeto}

Mais informações serão adicionadas em breve.`
        );

    });

});

// ==========================================
// FORMULÁRIO
// ==========================================

const formulario =
document.querySelector(".formulario");

if (formulario) {

    formulario.addEventListener("submit", (e) => {

        e.preventDefault();

        const nome =
        formulario.querySelector(
            "input[type='text']"
        ).value.trim();

        const email =
        formulario.querySelector(
            "input[type='email']"
        ).value.trim();

        const mensagem =
        formulario.querySelector(
            "textarea"
        ).value.trim();

        if (
            nome === "" ||
            email === "" ||
            mensagem === ""
        ) {

            alert(
                "⚠️ Preencha todos os campos."
            );

            return;
        }

        if (!validarEmail(email)) {

            alert(
                "⚠️ Informe um e-mail válido."
            );

            return;
        }

        alert(
            `✅ Obrigado pelo contato, ${nome}!

Sua mensagem foi enviada com sucesso.`
        );

        formulario.reset();

    });

}

// ==========================================
// VALIDAÇÃO DE E-MAIL
// ==========================================

function validarEmail(email) {

    const regex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(email);
}

// ==========================================
// FECHAR MENU MOBILE
// ==========================================

const navLinks =
document.querySelectorAll(".nav-link");

const navbarCollapse =
document.querySelector(".navbar-collapse");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (
            navbarCollapse &&
            navbarCollapse.classList.contains("show")
        ) {

            const bsCollapse =
            new bootstrap.Collapse(
                navbarCollapse,
                {
                    toggle: false
                }
            );

            bsCollapse.hide();
        }

    });

});

// ==========================================
// SCROLL SUAVE
// ==========================================

document
.querySelectorAll('a[href^="#"]')
.forEach(ancora => {

    ancora.addEventListener("click", function (e) {

        const destino =
        document.querySelector(
            this.getAttribute("href")
        );

        if (destino) {

            e.preventDefault();

            destino.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});

// ==========================================
// EFEITO NAVBAR AO ROLAR
// ==========================================

window.addEventListener("scroll", () => {

    const navbar =
    document.querySelector(".navbar");

    if (window.scrollY > 100) {

        navbar.classList.add("navbar-scroll");

    } else {

        navbar.classList.remove("navbar-scroll");
    }

});

// ==========================================
// ANO AUTOMÁTICO NO FOOTER (OPCIONAL)
// ==========================================

const anoAtual =
document.getElementById("anoAtual");

if (anoAtual) {

    anoAtual.textContent =
    new Date().getFullYear();

}