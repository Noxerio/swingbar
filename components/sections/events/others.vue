<script setup>

const props = defineProps(['remove'])
const { data } = await useAsyncData('events', () => queryContent('/events').limit(4).sort({dateCheck: -1}).where({ _path: { $ne: props.remove }  }).find());

</script>
<template>
    <section class="bg-slate-900">
        <div class="container mx-auto px-5" v-motion-fade-visible>
            <AssetsTitle :title="'Další události'"/>
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
            </div>
        </div>
    </section>
</template>