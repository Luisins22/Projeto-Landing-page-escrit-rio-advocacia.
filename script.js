// Menu móvel
const btnMenu = document.getElementById('btnMenu');
const menu = document.getElementById('menu');
btnMenu.addEventListener('click', () => menu.classList.toggle('aberto'));

// FAQ — acordeão
document.querySelectorAll('.faq-pergunta').forEach(pergunta => {
    pergunta.addEventListener('click', () => {
        const item = pergunta.parentElement;
        item.classList.toggle('faq-aberto');
        const icone = pergunta.querySelector('.icone-seta');
        icone.textContent = item.classList.contains('faq-aberto') ? '▲' : '▼';
    });
});

// Política de Privacidade
const linkPolitica = document.getElementById('link-politica');
const linkPolitica2 = document.getElementById('link-politica2');
const caixaPolitica = document.getElementById('caixa-politica');
const fecharPolitica = document.getElementById('fechar-politica');

function abrirPolitica(e) {
    e.preventDefault();
    caixaPolitica.style.display = 'block';
    caixaPolitica.scrollIntoView({ behavior: 'smooth' });
}

linkPolitica.addEventListener('click', abrirPolitica);
linkPolitica2.addEventListener('click', abrirPolitica);
fecharPolitica.addEventListener('click', () => caixaPolitica.style.display = 'none');

// Rolagem suave entre seções
document.querySelectorAll('a[href^="#"]').forEach(ancora => {
    ancora.addEventListener('click', function(e) {
        const alvoId = this.getAttribute('href');
        if (alvoId === '#caixa-politica') return; // tratado acima
        const alvo = document.querySelector(alvoId);
        if (alvo) {
            e.preventDefault();
            alvo.scrollIntoView({ behavior: 'smooth' });
            menu.classList.remove('aberto');
        }
    });
});