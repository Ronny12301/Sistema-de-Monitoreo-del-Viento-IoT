// https://codepen.io/rafael-lima/pen/DJBZBP
class Compass extends HTMLElement {
    css = `
        @import url("https://fonts.googleapis.com/css?family=Raleway:400,200,300,500,600,700");

        .compass {
            font: 17px "Raleway Light", sans-serif;
            width: 260px;
            height: 260px;
            position: relative;
            border-radius: 50%;
            box-shadow: 0 4px 6px 1.6px #999;
            -webkit-animation: sliding 0.9s ease-in-out;
        }
        
        .compass:after {
            content: "";
            width: 20px;
            height: 20px;
            position: absolute;
            top: -25px;
            left: 50%;
            margin-left: -16px;
            border: 6px solid;
            border-color: inherit;
            border-radius: 50%;
        }
        
        .compass-main {
            width: 94%;
            height: 94%;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-top: -47%;
            margin-left: -47%;
            background: radial-gradient(#eee 50%, #ddd 80%);
            border-radius: 50%;
        }
        
        .compass-rose {
            width: 70%;
            height: 70%;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-top: -35%;
            margin-left: -35%;
        }
        
        .pointer {
            width: 0;
            height: 0;
            position: absolute;
            border: 80px solid;
            border-left: 14px solid;
            border-right: 14px solid;
        }
        
        .cardial-points .pointer {
            border-color: #ddd transparent transparent transparent;
        }
        
        .ordinal-points .pointer {
            border-color: #aaa transparent transparent transparent;
        }
        
        .north-pointer {
            top: -40px;
            margin-top: -40px;
            left: 50%;
            margin-left: -14px;
            transform: rotate(180deg);
        }
        
        .east-pointer {
            top: 28%;
            right: -10px;
            margin-top: -40px;
            transform: rotate(-90deg);
        }
        
        .west-pointer {
            top: 28%;
            left: -10px;
            margin-top: -40px;
            transform: rotate(90deg);
        }
        
        .south-pointer {
            bottom: -40px;
            margin-bottom: -40px;
            left: 50%;
            margin-left: -14px;
        }
        
        .bt-center {
            width: 16px;
            height: 16px;
            position: absolute;
            z-index: 100000;
            top: 50%;
            left: 50%;
            margin-top: -8px;
            margin-left: -8px;
            display: block;
            background: #444;
            border-radius: 50%;
        }
        
        .dip-needle {
            width: 12px;
            height: 12px;
            position: absolute;
            z-index: 999;
            top: 50%;
            left: 50%;
            margin-top: -6px;
            margin-left: -6px;
            --needle-degree: 50deg;
            transform: rotate(var(--needle-degree));
            transition: transform 0.7s ease;
        }
        
        .dip-needle:after {
            content: "";
            width: 0;
            height: 0;
            position: absolute;
            top: -138px;
            right: -54px;
            border: 80px solid;
            border-left: 6px solid;
            border-right: 6px solid;
            border-color: #b20000 transparent transparent transparent;
            transform: rotate(220deg);
            z-index: -10000;
        }
        
        .dip-needle:before {
            content: "";
            display: block;
            width: 0;
            height: 0;
            position: absolute;
            top: -10px;
            right: 54px;
            border: 80px solid;
            border-left: 6px solid;
            border-right: 6px solid;
            border-color: #ccc transparent transparent transparent;
            transform: rotate(40deg);
        }
        
        .north-label {
            position: absolute;
            top: 10px;
            left: 116px;
        }
        
        .east-label {
            position: absolute;
            top: 114px;
            right: 12px;
        }
        
        .west-label {
            position: absolute;
            top: 114px;
            left: 12px;
        }
        
        .south-label {
            position: absolute;
            bottom: 6px;
            left: 116px;
        }
    `

    constructor() {
        super()
        this.innerHTML = `
            <style>${this.css}</style>
            
            <div class="compass text-black
                bg-[linear-gradient(#ddd,#ccc_20%,#ddd)] border-[#ddd] 
                dark:bg-[linear-gradient(#888,#999_20%,#888)] dark:border-[#888]"
            >
                <div class="compass-main">

                    <span class="north-label">N</span>
                    <span class="east-label">E</span>
                    <span class="west-label">O</span>
                    <span class="south-label">S</span>

                    <div class="compass-rose">

                        <div class="cardial-points">
                            <div class="north-pointer pointer"></div>
                            <div class="east-pointer pointer"></div>
                            <div class="west-pointer pointer"></div>
                            <div class="south-pointer pointer"></div>
                        </div>

                        <div class="ordinal-points">
                            <div class="northeast-pointer"></div>
                            <div class="northwest-pointer"></div>
                            <div class="southeast-pointer"></div>
                            <div class="south-west-pointer"></div>
                        </div>
                    </div>
                    
                    <div class="bt-center"></div>
                    <div class="dip-needle"></div>
                </div>
            </div>
        `;
    };
}


function setDirection() {
    const container = document.querySelector('.dip-needle');

    const direction = parseInt(document.getElementById("wind-direction").textContent);
    const currentAngle = parseInt(getComputedStyle(container).getPropertyValue('--needle-degree').replace('deg','')) + 40;

    const difference = Math.abs(currentAngle - direction);

    const finalAngle = difference > 180 ? direction + 360: direction;
    
    container.style.setProperty('--needle-degree', `${finalAngle-40}deg`);
}

setInterval(setDirection, 500);


customElements.define("my-compass", Compass);
