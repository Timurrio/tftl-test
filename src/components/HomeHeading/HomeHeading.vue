<script setup>
    import gsap from "gsap";
    import styles from "./HomeHeading.module.scss"
    import { onMounted, onUnmounted } from "vue";
import isMobile from "@/utils/isMobile";

    function animateHeaderMovement(event){
        const x = event.pageX
        const y = event.pageY
        gsap.to("#mainHeader", {x: x/15, y: y/15, ease: "power1"})
    }

    onMounted(() => {
        if(!isMobile() ){
            window.addEventListener("mousemove", animateHeaderMovement)
        }
    })

    onUnmounted(() => {
        if(!isMobile() ){
            window.removeEventListener("mousemove", animateHeaderMovement)
        }
    })

</script>


<template>
    <div :class="styles.container">
        <div :class="styles.header_container">
            <h1 :class="styles.header" id="mainHeader">
                FULL-CYCLE EVENT AGENCY
            </h1>
        </div>
    </div>
</template>

