class WindDisplayVariables extends HTMLElement {

    constructor() {
        super()
        this.innerHTML = `
        <div class="mx-10 mt-6 flex flex-col space-y-6 sm:mx-32
            md:mx-9 md:space-y-0 md:grid md:grid-cols-5 md:grid-flow-col md:gap-4 
            text-center md:mt-4 lg:mt-6"
        >

            <div class="bg-blue-50 rounded-lg shadow dark:bg-gray-600">
                <p class="bg-blue-300 dark:bg-slate-800 rounded-t-lg font-bold">Nodo identificador</p>
                <p class="rounded-b-lg" id="node-address"></p>
            </div> 

            <div class="bg-blue-50 rounded-lg shadow dark:bg-gray-600">
                <p class="bg-blue-300 dark:bg-slate-800 rounded-t-lg font-bold">
                    Dirección del viento
                </p>
                <p class="rounded-b-lg" id="wind-direction"></p>
            </div>

            <div class="bg-blue-50 rounded-lg shadow dark:bg-gray-600">
                <p class="bg-blue-300 dark:bg-slate-800 rounded-t-lg font-bold">
                    Velocidad del viento
                </p>
                <p class="rounded-b-lg" id="wind-speed"></p>
            </div>

            <div class="bg-blue-50 rounded-lg shadow dark:bg-gray-600">
                <p class="bg-blue-300 dark:bg-slate-800 rounded-t-lg font-bold">
                    Estado
                </p>
                <div class="rounded-b-lg font-bold" id="status" data-tooltip="Status"></div>
            </div>

            <div class="bg-blue-50 rounded-lg shadow dark:bg-gray-600">
                <p class="bg-blue-300 dark:bg-slate-800 rounded-t-lg font-bold">
                    Suma de comprobación
                </p>
                <p class="rounded-b-lg" id="checksum"></p>
            </div>
        </div>      
        `;
    };
}

customElements.define("display-variables", WindDisplayVariables);