class Navbar extends HTMLElement {

    constructor() {
        super()
        this.innerHTML = "<div>Nav</div>";
    };
}

customElements.define("navbar-item", Navbar);