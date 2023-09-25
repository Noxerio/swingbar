<script setup>
const { data } = await useAsyncData('events', () => queryContent('/events').limit(3).sort({dateCheck: -1}).find());

</script>
<template>
    <section class="bg-slate-900">
        <div class="container mx-auto px-5">
            <AssetsTitle :title="'Události ve Swingu'"/>
            <AssetsHr/>
            <div class="grid md:grid-cols-4 gap-8">
                <SectionsEventsEvent 
                    v-for="event in data" 
                    :key="event._path"
                    :title="event.title"
                    :img="event.img"
                    :date="event.date"
                    :price="event.price"
                    :path="event._path"
                />
                <NuxtLink to="/events" class="group rounded-xl border-2 border-White flex flex-col items-center justify-center p-7 hover:bg-gradient-to-r from-amber-300 to-amber-400 hover:border-none transition-all cursor-pointer">
                    <Icon class="group-hover:drop-shadow-2xl" name="twemoji:spiral-calendar" size="120" />
                    <h4 class="group-hover:text-slate-800 text-white text-4xl font-primary mt-10 text-center font-bold">Kalendář událostí</h4>
                </NuxtLink>
            </div>
        </div>
    </section>
</template>