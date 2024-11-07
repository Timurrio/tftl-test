<script setup>
    import "./MobileMenu.scss"
    import gsap from "gsap";
    import {ref } from "vue";
    import HomeLink from "../HomeLink/HomeLink.vue";

    const isVisible = ref(false)


    function menuEnter(el,done) {
        gsap.fromTo(".mobile-menu_container", {y:"-100%", opacity: 0}, {y: "0%", opacity: 1, duration: 1, ease: "power1", onComplete: done})
    }

    function menuLeave(el,done) {
        gsap.to(".mobile-menu_container", {
            y: "-100%", opacity: 0, duration: 1, ease: "power1", onComplete: done
        })
    }
    
</script>

<template>
    <div>
        <button class="mobile-menu_button" @click="isVisible = !isVisible">
            =
        </button>
        <transition :css="false" mode="default" @enter="menuEnter" @leave="menuLeave">
            <div v-if="isVisible" class="mobile-menu_container">
                <div class="mobile-menu_links">
                    <button class="mobile-menu_button" @click="isVisible = !isVisible">
                    =
                    </button>
                    <HomeLink  link="/where" title="where?"/>
                    <HomeLink  link="/who" title="who?"/>
                    <HomeLink  link="/what" title="what?"/>
                </div>
            </div>
        </transition>

    </div>
</template>

<style scoped>
</style>