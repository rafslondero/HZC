const botaoMenu = document.querySelector('.cabecalho__menu') //importando a classe do botao/menu
const menu = document.querySelector('.menu-lateral') /*importando a classe do menu lateral 
que é o que deve abrir quando o botao é clicado*/

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral--ativo') //toggle ativa e desativa automaticamente
}) 
