// https://github.com/EstherDhiramo/Car-speedometer-animation.git
class Speedometer extends HTMLElement {

    constructor() {
        super()
        this.innerHTML = `
            <style>${this.css}</style>
            <div id="speed-gauge" class="bg-zinc-200 dark:bg-[#111]">
            
                <div class="gauge border-slate-800 border-b-transparent dark:animate-[gauge-glow_2s_ease-in_infinite]">
                    <div class="slice bg-slate-800 dark:bg-white"></div>
                    <div class="slice bg-slate-800 dark:bg-white"></div>
                    <div class="slice bg-slate-800 dark:bg-white"></div>
                    <div class="slice bg-slate-800 dark:bg-white"></div>
                    <div class="slice bg-slate-800 dark:bg-white"></div>
                    <div class="slice bg-slate-800 dark:bg-white"></div>
                    <div class="slice bg-[red] dark:bg-[#AD191B]"></div>
                    <div class="slice bg-[red] dark:bg-[#AD191B]"></div>
                    <div class="slice bg-[red] dark:bg-[#AD191B]"></div>
        
                    <div class="subslice bg-slate-800 dark:bg-white"></div>
                    <div class="subslice bg-slate-800 dark:bg-white"></div>
                    <div class="subslice bg-slate-800 dark:bg-white"></div>
                    <div class="subslice bg-slate-800 dark:bg-white"></div>
                    <div class="subslice bg-slate-800 dark:bg-white"></div>
                    <div class="subslice bg-slate-800 dark:bg-white"></div>
                    <div class="subslice bg-[red] dark:bg-[#AD191B]"></div>
                    <div class="subslice bg-[red] dark:bg-[#AD191B]"></div>
                    
                    <div class="rpm"></div>
                    <div class="rpm"></div>
                    <div class="rpm"></div>
                    <div class="rpm"></div>
                    <div class="rpm"></div>
                    <div class="rpm"></div>
                    <div class="rpm"></div>
                    <div class="rpm"></div>
                    <div class="rpm"></div>
        
                    <!--RPM Slice-->
                    <div class="rpmSlice"></div>
                    <div class="rpmSlice"></div>
                    <div class="rpmSlice"></div>
                    <div class="rpmSlice"></div>
                    <div class="rpmSlice"></div>
                    <div class="rpmSlice"></div>
                    <div class="rpmSlice"></div>
                    <div class="rpmSlice"></div>
                    <div class="rpmSlice"></div>
                    <div class="rpmSlice"></div>
                    <div class="rpmSlice"></div>
                    <div class="rpmSlice"></div>
                    <div class="rpmSlice"></div>
                    <div class="rpmSlice"></div>
                    <div class="rpmSlice"></div>
                    <div class="rpmSlice"></div>
                    <div class="rpmSlice"></div>
        
        
                    <div class="rpmSpeed">0</div>
                    <div class="rpmSpeed">5</div>
                    <div class="rpmSpeed">10</div>
                    <div class="rpmSpeed">15</div>
                    <div class="rpmSpeed">20</div>
                    <div class="rpmSpeed">25</div>
                    <div class="rpmSpeed">30</div>
                    <div class="rpmSpeed">35</div>
                    <div class="rpmSpeed">40</div>
                    <div class="rpmSpeed">45</div>
                    <div class="rpmSpeed">50</div>
                    <div class="rpmSpeed">55</div>
                    <div class="rpmSpeed">60</div>
                    <div class="rpmSpeed">65</div>
                    <div class="rpmSpeed">70</div>
                    <div class="rpmSpeed">75</div>
                    <div class="rpmSpeed">80</div>
                    <div class="rpmSpeed">m/s</div>
        
                    <div id="sui"></div>
                    <div id="SUICIRCLE" class="suiCircle"></div>
        
                    <div class="bottomStroke">
                        <svg class="fill-slate-700 dark:fill-slate-600 h-[29px] w-[133.6px]" version="1.0" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 737.000000 158.000000" preserveAspectRatio="xMidYMid meet"
                        >
                            <g transform="translate(0.000000,158.000000) scale(0.100000,-0.100000)" stroke="none">
                                <path d="M940 1540 l0 -40 2745 0 2745 0 0 40 0 40 -2745 0 -2745 0 0 -40z" />
                                <path d="M26 621 l-26 -28 142 -130 c263 -241 543 -460 565 -441 10 8 13 6 13
                                    -6 0 -15 237 -16 2965 -16 l2965 0 0 22 c0 20 1 20 13 5 11 -16 25 -8 145 82
                                    157 118 284 225 445 374 l118 110 -27 28 -27 28 -91 -86 c-155 -148 -361 -320
                                    -512 -429 l-76 -54 -2954 0 -2954 0 -127 97 c-154 116 -267 211 -429 360
                                    l-121 112 -27 -28z" 
                                />
                            </g>
                        </svg>
                        <div class="speedplus">0</div>
                    </div>
        
                    <div class="gauge-circle-1 dark:animate-[gauge-glow_1s_ease-in_infinite]"></div>
                </div>
            </div>
        `;
    };


    css = `
        @import url('https://fonts.googleapis.com/css?family=Concert+One|Shrikhand');

        #speed-gauge {
            position: relative;
            width: 195px;
            height: 195px;
            border-radius: 50%;
            z-index: 15;
            overflow: hidden;
            zoom: 145%;
        }
        
        .gauge {
            width: 192px;
            height: 192px;
            border: 1px solid;
            position: absolute;
            margin: 1px 1.5px 1.5px 1.5px;
            border-radius: 50%;
            border-bottom-color: transparent;
            /* animation: gauge-glow 2s infinite; */
        }
        
        .gauge-circle-1 {
            width: 145.9px;
            height: 145.9px;
            right: 0px;
            bottom: 0px;
            left: 0px;
            top: 0px;
            margin: auto;
            border: 1.8px solid rgb(51 65 85);
            border-radius: 50%;
            border-bottom-color: transparent;
            position: absolute;
        
            z-index: 0;
        
            /* animation: gauge-glow 1s infinite; */
        }
        
        @keyframes gauge-glow {
            0% {
                border-color: #fff;
                border-bottom-color: transparent;
            }
        
            50% {
                border-color: #4C697A;
                border-bottom-color: transparent;
            }
        
            100% {
                border-color: #fff;
                border-bottom-color: transparent;
            }
        
        }
        
        
        .bottomStroke {
            background-size: contain;
            background-repeat: no-repeat;
            position: absolute;
            top: 77%;
            left: 15%;
            height: 29px;
            width: 133.6px;
        }
        
        .suiCircle {
            height: 22px;
            width: 22px;
            border-radius: 50%;
            background: #A01D26;
            position: absolute;
            top: 43%;
            left: 44.5%;
            border-style: dotted;
            transform: rotate(-120deg);
        }
        
        .speedplus {
            font-family: 'Concert One', cursive;
            font-size: 1.5em;
            /* line-height: 11px; */
            text-align: center;
            display: block;
            width: 7.7px;
            height: 7.7px;
            background: transparent;
            /* color: #fff; */
            position: absolute;
            left: 22%;
            top: -3%;
            animation: gauge-glow 1s infinite;
        }
        
        .Drive {
            animation: drve 1s infinite;
        }
        
        @keyframes drve {
            0% {
                color: whitesmoke;
            }
        
            50% {
                color: #4C697A;
            }
        
            100% {
                color: whitesmoke;
            }
        
        }
        
        .gear {
            float: left;
            margin-left: 3px;
            font-size: 10px;
            font-family: 'Concert One', cursive;
        }
        
        
        .gauge .slice {
            width: 7.7px;
            height: 1.5px;
            /* background: #fff; */
            position: absolute;
        }
        
        .gauge .slice:nth-child(1) {
            left: 12px;
            top: 74%;
            margin-top: -1.5px;
            transform: rotate(150deg);
            /* background: #35BE1A; */
        }
        
        .gauge .slice:nth-child(2) {
            left: 0px;
            top: 50%;
            margin-top: 0px;
            transform: rotate(179deg);
            /* background: #35BE1A; */
        }
        
        .gauge .slice:nth-child(3) {
            left: 12px;
            top: 26%;
            margin-top: 0px;
            transform: rotate(212deg);
            /* background: #17e7e7; */
        }
        
        .gauge .slice:nth-child(4) {
            left: 46px;
            top: 8%;
            margin-top: 0px;
            transform: rotate(241deg);
            /* background: #17e7e7; */
        }
        
        .gauge .slice:nth-child(5) {
            left: 91px;
            top: 2%;
            margin-top: 0px;
            transform: rotate(90deg);
            /* background: #17e7e7; */
        }
        
        .gauge .slice:nth-child(6) {
            left: 136.5px;
            top: 8%;
            margin-top: 0px;
            transform: rotate(121deg);
            /* background: #e1c554 */
        }
        
        .gauge .slice:nth-child(7) {
            left: 171px;
            top: 26%;
            margin-top: 0px;
            transform: rotate(150deg);
            /* background: #e1c554 */
        }
        
        .gauge .slice:nth-child(8) {
            left: 182.7px;
            top: 50%;
            margin-top: 0px;
            transform: rotate(179deg);
            /* background: #AD191B; */
        }
        
        .gauge .slice:nth-child(9) {
            left: 171.2px;
            top: 74%;
            margin-top: -2px;
            transform: rotate(210deg);
            /* background: #AD191B; */
        }
        
        .gauge .subslice {
            position: absolute;
            width: 3.8px;
            height: 1.5px;
            /* background: #fff; */
        }
        
        .gauge .subslice:nth-child(10) {
            left: 3px;
            top: 62%;
            margin-top: -0.7px;
            transform: rotate(168deg);
            /* background: #35BE1A; */
        }
        
        .gauge .subslice:nth-child(11) {
            left: 3.8px;
            top: 37%;
            margin-top: 0.7px;
            transform: rotate(20deg);
            /* background: #35BE1A; */
        }
        
        .gauge .subslice:nth-child(12) {
            left: 27.6px;
            top: 15%;
            margin-top: 0.7px;
            transform: rotate(223deg);
            /* background: #28b5df */
        }
        
        .gauge .subslice:nth-child(13) {
            left: 69px;
            top: 3%;
            margin-top: -1px;
            transform: rotate(71deg);
            /* background: #28b5df */
        }
        
        .gauge .subslice:nth-child(14) {
            left: 118px;
            top: 3%;
            margin-top: -0.7px;
            transform: rotate(103deg);
            /* background: #28b5df */
        }
        
        .gauge .subslice:nth-child(15) {
            left: 160px;
            top: 15%;
            margin-top: 0.7px;
            transform: rotate(134deg);
            /* background: #e1c554 */
        }
        
        .gauge .subslice:nth-child(16) {
            left: 183px;
            top: 37%;
            margin-top: 0.7px;
            transform: rotate(168deg);
            /* background: #AD191B; */
        }
        
        .gauge .subslice:nth-child(17) {
            left: 183px;
            top: 62%;
            margin-top: 0.7px;
            transform: rotate(198deg);
            /* background: #AD191B; */
        }
        
        .gauge .rpm {
            font-family: 'Shrikhand', cursive;
            font-size: 0.7em;
            line-height: 8.5px;
            text-align: center;
            display: block;
            width: 7px;
            height: 7px;
            background: transparent;
            /* color: #fff; */
            position: absolute;
        }
        
        .gauge .rpm:nth-child(18) {
            left: 20.7px;
            top: 69%;
            margin-top: -0.7px;
        }
        
        .gauge .rpm:nth-child(19) {
            left: 12.2px;
            top: 49%;
            margin-top: -2px;
        }
        
        .gauge .rpm:nth-child(20) {
            left: 21.5px;
            top: 28%;
            margin-top: -0.7px;
        }
        
        .gauge .rpm:nth-child(21) {
            left: 50px;
            top: 13%;
            margin-top: -1.5px;
        }
        
        .gauge .rpm:nth-child(22) {
            left: 90px;
            top: 7%;
            margin-top: -2px;
        }
        
        .gauge .rpm:nth-child(23) {
            left: 172px;
            top: 12%;
            margin-top: 0px;
        }
        
        .gauge .rpm:nth-child(24) {
            left: 210px;
            top: 28%;
            margin-top: -1px;
        }
        
        .gauge .rpm:nth-child(25) {
            left: 224px;
            top: 49%;
            margin-top: -1px;
            color: #AD191B;
        }
        
        .gauge .rpm:nth-child(26) {
            left: 210px;
            top: 69%;
            margin-top: -1px;
            color: #AD191B;
        }
        
        .gauge .rpmSlice {
            width: 7px;
            height: 2px;
            background: #fff;
            position: absolute;
        }
        
        .gauge .rpmSlice:nth-child(27) {
            left: 33px;
            top: 68%;
            transform: rotate(152deg);
            margin-top: -1px;
            background: #4C697A;
        }
        
        .gauge .rpmSlice:nth-child(28) {
            left: 25px;
            top: 59%;
            transform: rotate(166deg);
            margin-top: -1px;
            background: #4C697A;
        }
        
        .gauge .rpmSlice:nth-child(29) {
            left: 23px;
            top: 50%;
            transform: rotate(180deg);
            margin-top: -1px;
            background: #4C697A;
        }
        
        .gauge .rpmSlice:nth-child(30) {
            left: 25px;
            top: 39%;
            transform: rotate(195deg);
            margin-top: 4px;
            background: #4C697A;
        }
        
        .gauge .rpmSlice:nth-child(31) {
            left: 33px;
            top: 32%;
            transform: rotate(211deg);
            margin-top: -1px;
            background: #4C697A;
        }
        
        .gauge .rpmSlice:nth-child(32) {
            left: 44px;
            top: 25%;
            transform: rotate(45deg);
            margin-top: -2px;
            background: #4C697A;
        }
        
        .gauge .rpmSlice:nth-child(33) {
            left: 58px;
            top: 19%;
            transform: rotate(59deg);
            margin-top: -1.5px;
            background: #4C697A;
        }
        
        .gauge .rpmSlice:nth-child(34) {
            left: 75px;
            top: 15%;
            transform: rotate(75deg);
            margin-top: -0.7px;
            background: #4C697A;
        }
        
        .gauge .rpmSlice:nth-child(35) {
            left: 92.5px;
            top: 14%;
            transform: rotate(90deg);
            margin-top: -1px;
            background: #4C697A;
        }
        
        .gauge .rpmSlice:nth-child(36) {
            left: 110px;
            top: 15%;
            transform: rotate(105deg);
            margin-top: -0.7px;
            background: #4C697A;
        }
        
        .gauge .rpmSlice:nth-child(37) {
            left: 126px;
            top: 18%;
            transform: rotate(120deg);
            margin-top: 0px;
            background: #4C697A;
        }
        
        .gauge .rpmSlice:nth-child(38) {
            left: 139.2px;
            top: 24%;
            transform: rotate(134deg);
            margin-top: 0px;
            background: #4C697A;
        }
        
        .gauge .rpmSlice:nth-child(39) {
            left: 150px;
            top: 32%;
            transform: rotate(150deg);
            margin-top: -1.5px;
            background: #4C697A;
        }
        
        .gauge .rpmSlice:nth-child(40) {
            left: 157.4px;
            top: 40%;
            transform: rotate(165deg);
            margin-top: 1px;
            background: #4C697A;
        }
        
        .gauge .rpmSlice:nth-child(41) {
            left: 159.5px;
            top: 50%;
            transform: rotate(180deg);
            margin-top: -1px;
            background: #4C697A;
        }
        
        .gauge .rpmSlice:nth-child(42) {
            left: 157px;
            top: 59%;
            transform: rotate(15deg);
            margin-top: 0px;
            background: #4C697A;
        }
        
        .gauge .rpmSlice:nth-child(43) {
            left: 150.5px;
            top: 67%;
            transform: rotate(30deg);
            margin-top: 0.7px;
            background: #4C697A;
        }
        
        .gauge .rpmSpeed {
            font-family: 'Concert One', cursive;
            font-size: .65em;
            line-height: 6px;
            text-align: center;
            display: block;
            width: auto;
            height: 10px;
            background: transparent;
            /* color: #fff; */
            position: absolute;
        }
        
        .gauge .rpmSpeed:nth-child(44) {
            left: 42px;
            top: 64%;
        }
        
        .gauge .rpmSpeed:nth-child(45) {
            left: 34px;
            top: 56%;
        }
        
        .gauge .rpmSpeed:nth-child(46) {
            left: 31px;
            top: 48%;
        }
        
        .gauge .rpmSpeed:nth-child(47) {
            left: 33px;
            top: 40%;
        }
        
        .gauge .rpmSpeed:nth-child(48) {
            left: 40px;
            top: 32%;
        }
        
        .gauge .rpmSpeed:nth-child(49) {
            left: 49px;
            top: 25.5%;
        }
        
        .gauge .rpmSpeed:nth-child(50) {
            left: 60px;
            top: 21%;
        }
        
        .gauge .rpmSpeed:nth-child(51) {
            left: 75px;
            top: 17%;
        }
        
        .gauge .rpmSpeed:nth-child(52) {
            left: 91px;
            top: 15.5%;
        }
        
        .gauge .rpmSpeed:nth-child(53) {
            left: 106px;
            top: 17%;
        }
        
        .gauge .rpmSpeed:nth-child(54) {
            left: 121px;
            top: 20.1%;
        }
        
        .gauge .rpmSpeed:nth-child(55) {
            left: 132px;
            top: 25.5%;
        }
        
        .gauge .rpmSpeed:nth-child(56) {
            left: 139px;
            top: 31.5%;
        }
        
        .gauge .rpmSpeed:nth-child(57) {
            left: 145px;
            top: 39%;
        }
        
        .gauge .rpmSpeed:nth-child(58) {
            left: 147px;
            top: 47%;
        }
        
        .gauge .rpmSpeed:nth-child(59) {
            left: 144px;
            top: 55.5%;
        }
        
        .gauge .rpmSpeed:nth-child(60) {
            left: 138px;
            top: 64%;
        }
        
        .gauge .rpmSpeed:nth-child(61) {
            left: 45px;
            top: 71%;
        }
        
        #sui {
            width: 4.6px;
            height: 69px;
            background: #AD191B;
            border-left-style: inset;
            border-left-color: #00BE27;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;
            border-top-left-radius: 100%;
            border-top-right-radius: 100%;
        
            display: inline-block;
            left: 49%;
            position: absolute;
            top: 14%;
            transform-origin: bottom;
            /* animation: moveNeedle 5s; */
            --needle-degree: -120deg;
            transform: rotate(var(--needle-degree));
            transition: transform 0.7s ease;
        }    
    `;
}

function setDirection() {
    let container = document.querySelector('#sui');

    // let direction = parseInt(document.getElementById("wind-direction").textContent);
    // let currentAngle = parseInt(getComputedStyle(container).getPropertyValue('--needle-degree').replace('deg','')) + 40;
    // console.log(currentAngle);

    // let difference = Math.abs(currentAngle - direction);

    // let finalAngle = difference > 180 ? direction + 360: direction;
    
    // container.style.setProperty('--needle-degree', `${finalAngle-40}deg`);
}

setInterval(setDirection, 500);


customElements.define("my-speedometer", Speedometer);