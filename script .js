const menuBurguer = document.getElementById('menuBtn');
const navMenu = document.getElementById("navMenu");
const idiomaSelect = document.getElementById("idioma");
const musicaBtn = document.getElementById("musica");
const imgLua = document.getElementById("imgLua");
const traducoes = {
    pt: {
        menu: ["Sobre mim", "Músicas", "Desenho foda", "Jogo foda"],
        main: {
            h1: "Bem-vindo a minha Página de Projetos",
            p: "Explore meus projetos e trabalhos aqui!",
            button: "Projetos"
        }
    },
    en: {
        menu: ["About me", "Music", "Awesome Drawing", "Awesome Game"],
        main: {
            h1: "Welcome to my Projects Page",
            p: "Explore my projects and works here!",
            button: "Projects"
        }
    },
    es: {
        menu: ["Sobre mí", "Música", "Dibujo increíble", "Juego increíble"],
        main: {
            h1: "Bienvenido a mi Página de Proyectos",
            p: "¡Explora mis proyectos y trabajos aquí!",
            button: "Proyectos"
        }
    },
    fr: {
        menu: ["À propos de moi", "Musique", "Dessin génial", "Jeu génial"],
        main: {
            h1: "Bienvenue sur ma page de projets",
            p: "Découvrez mes projets et travaux ici !",
            button: "Projets"
        }
    },
    de: {
        menu: ["Über mich", "Musik", "Tolles Zeichnen", "Tolles Spiel"],
        main: {
            h1: "Willkommen auf meiner Projektseite",
            p: "Entdecke hier meine Projekte und Arbeiten!",
            button: "Projekte"
        }
    },
    it: {
        menu: ["Su di me", "Musica", "Disegno fantastico", "Gioco fantastico"],
        main: {
            h1: "Benvenuto nella mia pagina dei progetti",
            p: "Esplora i miei progetti e lavori qui!",
            button: "Progetti"
        }
    },
    jp: {
        menu: ["私について", "音楽", "素晴らしい絵", "素晴らしいゲーム"],
        main: {
            h1: "私のプロジェクトページへようこそ",
            p: "ここで私のプロジェクトや作品をチェックしてください！",
            button: "プロジェクト"
        }
    },
    cn: {
        menu: ["关于我", "音乐", "超棒的绘画", "超棒的游戏"],
        main: {
            h1: "欢迎来到我的项目页面",
            p: "在这里探索我的项目和作品！",
            button: "项目"
        }
    }
};

musicaBtn.addEventListener('click', () => {
    alert("Fiquei com preguiça e ainda não fiz nada para esse link! 💩")
})

imgLua.addEventListener('mouseover', () => {
    imgLua.style.cursor = "pointer"
    imgLua.style.scale = "1.1";
    imgLua.style.transition = "all .5s ease";
})
imgLua.addEventListener("mouseout", () => {
    imgLua.style.scale = "1.0";

})
imgLua.addEventListener('click', () => {
    alert("Bonita lua né! ")
})
menuBurguer.addEventListener('click', () => {
    menuBurguer.classList.toggle('ativo');
    navMenu.classList.toggle("aberto");

})


idiomaSelect.addEventListener('change', (e) => {
    const idiomaSelecionado = e.target.value;

    const links = document.querySelectorAll('#navMenu .links');
    links.forEach((link, index) => {
        link.textContent = traducoes[idiomaSelecionado].menu[index];
    });

    document.querySelector('.mainDiv h1').textContent = traducoes[idiomaSelecionado].main.h1;
    document.querySelector('.mainDiv p').textContent = traducoes[idiomaSelecionado].main.p;
    document.querySelector('.buttonProjetos').textContent = traducoes[idiomaSelecionado].main.button;
    document.documentElement.lang = idiomaSelecionado;
})



