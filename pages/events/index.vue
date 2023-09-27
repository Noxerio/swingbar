<script setup>
const { data } = await useAsyncData('events', () => queryContent('/events').limit(6).sort({dateCheck: -1}).find());
useHead({
  title: 'Události | Swing Bar Ostrava',
  meta: [
    { name: 'description', content: 'Vítejte v Swing Baru! Přijďte si vychutnat výborné drinky, tanec a karaoke v jednom. Naše místo je naplněno hudebními tóny swingu a vzrušující atmosférou. Připojte se k nám a zažijte nezapomenutelnou noc plnou zábavy.' },
    { name: 'keywords', content: 'Swing Bar, drinky, tanec, karaoke, swingová hudba, zábava, noční život, nezapomenutelná noc' }
  ]
})
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
        <Footer/>
    </section>
</template>