<script setup>
    import { onMounted } from "vue";
    import "./HomeMarquee.scss"
    import gsap from "gsap";

    onMounted(() => {
        gsap.set(".marquee_line", {xPercent: 25});
        gsap.to(".marquee_line", {xPercent: -25, repeat: -1, duration: 15, ease: "linear"});

        gsap.set(".marquee_line--reverse", {xPercent: -25});
        gsap.to(".marquee_line--reverse", {xPercent: 25, repeat: -1, duration: 15, ease: "linear"});
    })


</script>

<template>
    <div class="marquee_container">
        <div class="marquee_line marquee_line--reverse">
            <h2 class="marquee_text">
                <span class="marquee_part">EVENT AGENCY</span>
                <span class="marquee_part">EVENT AGENCY</span>
                <span class="marquee_part">EVENT AGENCY</span>
                <span class="marquee_part">EVENT AGENCY</span>
                <span class="marquee_part">EVENT AGENCY</span>
                <span class="marquee_part">EVENT AGENCY</span>

            </h2>
        </div>
        <div class="marquee_line">
            <h2 class="marquee_text">
                <span class="marquee_part">EVENT AGENCY</span>
                <span class="marquee_part">EVENT AGENCY</span>
                <span class="marquee_part">EVENT AGENCY</span>
                <span class="marquee_part">EVENT AGENCY</span>
                <span class="marquee_part">EVENT AGENCY</span>
                <span class="marquee_part">EVENT AGENCY</span>
            </h2>
        </div>
    </div>
</template>