<script setup>
  import styles from "./TestView.module.scss"
  import HomeLink from '@/components/HomeLink/HomeLink.vue';
</script>

<template>
  <div :class="styles.wrapper">
    <div :class="styles.content_container">
        <p :class="styles.paragraph">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus pariatur quibusdam accusamus harum laboriosam vel eum unde quam in! Perspiciatis recusandae quos vitae. Dicta, nihil praesentium quaerat dolores quidem expedita.
        </p>
        <HomeLink :class="styles.link" link="/" title="Back to the home page"/>
    </div>
  </div>
</template>




