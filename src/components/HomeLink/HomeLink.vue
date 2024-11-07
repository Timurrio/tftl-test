<script setup>
    import "./HomeLink.scss"

    const {title,link} = defineProps({
        title: String,
        link: String,
    })

    function onLinkMouseEnter(event) {
        event.target.classList.remove("home_link--unactive")
        event.target.classList.toggle("home_link--active")
    }   

    function onLinkMouseLeave(event) {
        event.target.classList.remove("home_link--active")
        event.target.classList.toggle("home_link--unactive")
    }
</script>

<template>
        <RouterLink @mouseenter="onLinkMouseEnter" @mouseleave="onLinkMouseLeave" class="home_link" :to="link">{{ title }}</RouterLink>
</template>