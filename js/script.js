'use strict'

window.addEventListener('load', function (event) {
    /** Código para manipular o menu quando o site estiver com o Hamburguer menu*/
    const menuIcon = document.querySelector('#menu-icon');
    const menuNav = document.querySelector('.menu-nav');
    const menuItens = document.querySelectorAll('.js-itemMenu');
    if (menuNav.classList.contains('abrirMenu')) {
        menuNav.classList.remove('abrirMenu');
    }

    menuIcon.addEventListener('click', () => {
        manipularMenu();
    });

    function manipularMenu() {
        if (menuNav.classList.contains('abrirMenu')) {
            menuNav.classList.remove('abrirMenu');
            menuIcon.src = 'img/menu.svg';
        } else {
            menuNav.classList.add('abrirMenu')
            menuIcon.src = 'img/closeMenu.svg';
        }
    }

    /**percorrendo lista dos itens no menu de navegação, e adicionando o evento para que os itens
     * possam manipular o menu também 
     */
    menuItens.forEach(itemMenu => {
        itemMenu.addEventListener('click', () => {
            manipularMenu();
        })
    });

    /**Código para manipular o dropdown do menu */
    const linkDropdown = document.querySelector('.drop');
    const dropdownMenu = document.querySelector('.dropdown');

    linkDropdown.addEventListener('click', (e) => {

        if (dropdownMenu.classList.contains('mostrarDropdown')) {
            dropdownMenu.classList.remove('mostrarDropdown');
        } else {
            dropdownMenu.classList.add('mostrarDropdown');
        }
    })

})