<script setup>
    const props = defineProps(['title'])
</script>
<template>
    <h2 class="text-6xl text-amber-300 text-center font-primary font-semibold" v-motion-fade-visible>{{ props.title }}</h2>
</template>