<script setup>
    import { onMounted, ref } from "vue";
    import "./HomeLanguage.scss"
    import gsap from "gsap";

    
    onMounted( () => {
        gsap.set(".language-select_option", {x: -30, opacity: 0, zIndex: -1})
    })

    function onLanguageHover() {
            gsap.set(".language-select_option", {zIndex: 10})
            gsap.to(".language-select_option",
                {x: 0, opacity: 1,stagger: 0.15, duration:0.2, ease: "power2.in" }
            )     
        }

    function onLanguageHoverEnd() {
            gsap.to(".language-select_option",
                {x: -30, opacity: 0, duration: 0.3, ease: "power2.out"},
            )
            gsap.set(".language-select_option", {zIndex: -1})
        }
    
   
</script>

<template>
    <div class="language-select_container"  @mouseleave="onLanguageHoverEnd">
        <span class="language-icon" @mouseenter="onLanguageHover">
            👅
        </span>
        <div class="language-select_option-list" >
            <span class="language-select_option">RU</span>
            <span class="language-select_option">UA</span>
        </div>

    </div>
</template>