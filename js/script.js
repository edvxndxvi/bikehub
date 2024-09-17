// Função Links Ativos Página Atual
const links = document.querySelectorAll(".header ul a")

function ativarLink(link){
    const url = location.href;
    const href = link.href;

    if(url.includes(href)){
        link.classList.add('ativo');
    }
}

links.forEach(ativarLink);