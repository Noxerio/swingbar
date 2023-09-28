<script setup>
    const props = defineProps(['img'])
</script>
<template>
    <div class="bg-slate-800 rounded-xl transition-all hover:scale-110">
        <img :src="img" class="rounded-xl transition-all" alt="drink swingbar">
    </div>
</template>