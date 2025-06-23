document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuList = document.querySelector('.menu-list');

    menuToggle.addEventListener('click', function () {
        menuList.classList.toggle('active');
    });

    // Fechar o menu quando um item é clicado (útil para menus mobile)
    menuList.querySelectorAll('a').forEach(item => {
        item.addEventListener('click', function () {
            if (window.innerWidth <= 768) { // Apenas para telas menores
                menuList.classList.remove('active');
            }
        });
    });
});