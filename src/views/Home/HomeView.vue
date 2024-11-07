<script setup>
  import styles from "./HomeView.module.scss"
  import HomeHeading from "../../components/HomeHeading/HomeHeading.vue"
  import HomeLink from "@/components/HomeLink/HomeLink.vue";
  import HomeMarquee from "@/components/HomeMarquee/HomeMarquee.vue";
import HomeShowreel from "@/components/HomeHeading/HomeShowreel/HomeShowreel.vue";
</script>

<template>
  <div :class="styles.container">

    <HomeHeading/>
    <HomeShowreel :class="styles.home_showreel"/>

    <HomeMarquee :class="styles.home_marquee"/>

    <HomeLink :class="styles.link_left" link="/where" title="where?"/>
    <HomeLink :class="styles.link_bottom" link="/who" title="who?"/>
    <HomeLink :class="styles.link_right" link="/what" title="what?"/>
  </div>
</template>




