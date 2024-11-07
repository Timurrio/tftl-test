<script setup>
    import { onMounted } from "vue";
    import "./HomeShowreel.scss"
    import gsap from 'gsap';

    onMounted( () => {
        gsap.to(".showreel_text-container", {rotate: 360, repeat: -1, repeatDelay:0, duration:5, transformOrigin: "50% 50%", ease: "linear"})
    })

    function onHoverStart(){
        gsap.to(".showreel_text-container", {
            rotate: -360, repeat: -1, repeatDelay:0, duration:5, transformOrigin: "50% 50%", ease: "linear"
        })
    }

    function onHoverEnd(){
        gsap.to(".showreel_text-container", {rotate: 360, repeat: -1, repeatDelay:0, duration:5, transformOrigin: "50% 50%", ease: "linear"})
    }

    
</script>


<template>
    <div class="showreel_container">
        <svg class="showreel_svg" xmlns="http://www.w3.org/2000/svg" viewBox="50 50 200 200" @mouseenter="onHoverStart" @mouseleave="onHoverEnd">            
            <defs>
                <path id="circlePath" d="M 250, 250 m -200, 0 a 200,200 0 1,1 400,0 a 200,200 0 1,1 -400,0" />
            </defs>

            <circle class="showreel_circle" cx="250" cy="250" r="50" fill="#373737"/>

            <text dy="-25" class="showreel_text-container">  
                <textPath  class="showreel_text" xlink:href="#circlePath">showreel showreel showreel</textPath>
            </text>
        </svg>
    </div>
</template>