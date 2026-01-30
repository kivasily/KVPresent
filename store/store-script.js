/* store/store-script.js */

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Loader
    const loader = document.querySelector('.loader-wrapper');
    setTimeout(() => {
        if(loader) loader.classList.add('hidden');
    }, 600);

    // 2. Navbar Active State
    const currentPath = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('.nav-btn');

    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        // Если мы на главной магазина
        if ((currentPath === '' || currentPath === 'store.html') && linkHref === 'store.html') {
            link.classList.add('active');
        } 
        // Для остальных страниц (категории, темплейт приложения)
        else if (currentPath === linkHref) {
            link.classList.add('active');
        }
    });

    // 3. Dropdowns (Accordion)
    const dropdowns = document.querySelectorAll('.glass-dropdown');
    dropdowns.forEach(dd => {
        const header = dd.querySelector('.dropdown-header');
        header.addEventListener('click', () => {
            dd.classList.toggle('open');
        });
    });
});