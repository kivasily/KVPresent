/* script.js */

document.addEventListener("DOMContentLoaded", () => {
    
    /* --- 1. Анимация загрузки (Loader) --- */
    const loader = document.querySelector('.loader-wrapper');
    setTimeout(() => {
        if(loader) loader.classList.add('hidden');
    }, 600); 

    /* --- 2. Логика видео (только для главной) --- */
    const mainVideo = document.getElementById('video-main-layer');
    const blurVideo = document.getElementById('video-blur-layer');

    if (mainVideo && blurVideo) {
        mainVideo.addEventListener('play', () => blurVideo.play());
        mainVideo.addEventListener('pause', () => blurVideo.pause());
        mainVideo.addEventListener('seeked', () => {
            blurVideo.currentTime = mainVideo.currentTime;
        });
        blurVideo.muted = true;
    }

    /* --- 3. Активная вкладка меню --- */
    const currentPath = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('.nav-btn');

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if ((currentPath === '' || currentPath === 'index.html') && linkPath === 'index.html') {
            link.classList.add('active');
        } else if (currentPath === linkPath) {
            link.classList.add('active');
        }
    });

    /* --- 4. Выпадающие списки (Dropdowns) --- */
    const dropdowns = document.querySelectorAll('.glass-dropdown');

    dropdowns.forEach(dropdown => {
        const header = dropdown.querySelector('.dropdown-header');
        header.addEventListener('click', () => {
            // Если нужно, чтобы открывался только один, раскомментируй код ниже:
            /*
            dropdowns.forEach(d => {
                if (d !== dropdown) d.classList.remove('open');
            });
            */
            
            // Переключаем класс open
            dropdown.classList.toggle('open');
        });
    });
});