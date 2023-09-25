<script setup>
    const props = defineProps(['title','img','price','date','path'])
</script>
<template>
    <NuxtLink :to="props.path" class="flex flex-col hover:scale-105 transition-all cursor-pointer">
        <div class="h-96 w-full bg-slate-800 rounded-xl p-5 mb-5">
            <div class="absolute bg-amber-300 rounded-xl p-3">
                <p class="font-primary font-bold">Vstupné: {{ props.price }}</p>
            </div>
        </div>
        <p class="font-bold text-white text-center mb-2 opacity-70">{{ props.date}}</p>

        <h3 class="font-primary text-white text-center text-2xl font-bold">{{ props.title }}</h3>
        <p class="text-amber-300 text-center" >Zobrazit více</p>
    </NuxtLink>
</template>