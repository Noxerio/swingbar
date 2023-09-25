<script setup>
const { data } = await useAsyncData('events', () => queryContent('/events').limit(4).sort({dateCheck: -1}).find());

</script>
<template>
    <section class="bg-slate-900">
        <HeaderNav/>
        <div class="container mx-auto px-5 mt-20">
            <AssetsTitle :title="'Kalendář událostí'"/>
            <AssetsHr/>
            <div class="grid md:grid-cols-3 gap-8">
                <SectionsEventsEvent 
                    v-for="event in data" 
                    :key="event._path"
                    :title="event.title"
                    :img="event.img"
                    :date="event.date"
                    :price="event.price"
                    :path="event._path"
                />
            </div>
        </div>
    </section>
</template>