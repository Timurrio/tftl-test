<script setup>
  import {RouterView } from 'vue-router'
  import gsap from "gsap"
  import HomeLogo from './components/HomeLogo/HomeLogo.vue';
  import HomeLanguage from './components/HomeLanguage/HomeLanguage.vue';
import MobileMenu from './components/MobileMenu/MobileMenu.vue';


  function onTransitionEnter(el, done) {
      gsap.set( 
        ".page-transition_container",
        {x: "-100%", opacity: 0, onComplete: done}  
      )
  }


  function onTransitionLeave(el, done) {
      const tl = gsap.timeline()

      tl
      .fromTo(
        ".page-transition_container",
        { x: "-100%", opacity: 1},
        { x: "-20%", duration: 0.6, ease: "expo.out", onComplete: done}
      )
      .to(".page-transition_container",{ duration: 0.3})
      .to(
        ".page-transition_container",
        {
          x: "100%", duration: 0.6, ease: "expo.in"
        }
      )
   
  }

</script>

<template>
  <div class="app-container">
    <nav class="navbar">
      <HomeLanguage class="nav_language"/>
      <HomeLogo class="nav_logo" />
      <div class="mobile_menu">
        <MobileMenu/>
      </div>
    </nav>
      <RouterView v-slot="{Component}">
        <transition :css="false" @enter="onTransitionEnter" @leave="onTransitionLeave" mode="default">
          <component :is="Component"/>
        </transition>
        <svg class="page-transition_container" viewBox="0 0 2000 500" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <rect class="page-transition_shape" x="190" y="0" width="90%" height="100%"  transform="skewX(-20)" />
        </svg>
      </RouterView>
  </div>
</template>

<style scoped>
  
.page-transition_container {
  position: absolute;
  z-index: 999;
  height: 130vh;
  width: 150vw;
  top: 50%;
  transform: translateY(-50%); 
  fill: #373737;
}


</style>