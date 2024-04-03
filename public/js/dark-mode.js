function toggleDarkMode() {
    if (localStorage.getItem('dark-mode') === 'true') {
        localStorage.setItem('dark-mode', false);
        document.documentElement.classList.remove('dark');
    } 
    else {
        localStorage.setItem('dark-mode', true);
        document.documentElement.classList.add('dark');   
    }
}


if (localStorage.getItem('dark-mode') === 'true') {
    document.documentElement.classList.add('dark');   
}