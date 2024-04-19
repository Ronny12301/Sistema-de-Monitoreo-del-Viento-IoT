class Navbar extends HTMLElement {

    barStyle = "start-0 top-0 end-0 py-3 mb-3";

    btnDarkMode = `
        <button onclick="toggleDarkMode()" id="dark-mode" class="absolute top-2 end-2 sm:end-4">
            <div class="size-9 fill-black dark:fill-white dark:hover:fill-slate-200">
                <?xml version="1.0" ?><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title/><path d="M20.21,15.32A8.56,8.56,0,1,1,11.29,3.5a.5.5,0,0,1,.51.28.49.49,0,0,1-.09.57A6.46,6.46,0,0,0,9.8,9a6.57,6.57,0,0,0,9.71,5.72.52.52,0,0,1,.58.07A.52.52,0,0,1,20.21,15.32Z"/></svg>
            </div>
        </button>
    `;

    home = `
        <a href="/" class="size-9 start-4 absolute">
            <svg class="fill-black dark:fill-white dark:hover:fill-slate-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                <path d="M39.5,43h-9c-1.381,0-2.5-1.119-2.5-2.5v-9c0-1.105-0.895-2-2-2h-4c-1.105,0-2,0.895-2,2v9c0,1.381-1.119,2.5-2.5,2.5h-9	C7.119,43,6,41.881,6,40.5V21.413c0-2.299,1.054-4.471,2.859-5.893L23.071,4.321c0.545-0.428,1.313-0.428,1.857,0L39.142,15.52	C40.947,16.942,42,19.113,42,21.411V40.5C42,41.881,40.881,43,39.5,43z"></path>
            </svg>
        </a>
    `;

    constructor() {
        super()
        this.innerHTML = `
            <div class="${this.barStyle}">
                
                ${this.home}
                ${this.btnDarkMode}

                <h1 class="flex justify-center text-2xl sm:text-3xl font-bold">
                    ${this.innerText}
                </h1>
            </div>        
        `;
    };
}

customElements.define("my-navbar", Navbar);