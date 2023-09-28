<script setup>
    const { path } = useRoute()

    const { data } = await useAsyncData(
        `events-${path}`,
        () => queryContent(path).findOne()
    );
useHead({
    link: [{
            rel: 'icon', type: 'image/png', href: '/favicon.png'
        }],
  meta: [
    { name: 'description', content: 'Vítejte v Swing Baru! Přijďte si vychutnat výborné drinky, tanec a karaoke v jednom. Naše místo je naplněno hudebními tóny swingu a vzrušující atmosférou. Připojte se k nám a zažijte nezapomenutelnou noc plnou zábavy.' },
    { name: 'keywords', content: 'Swing Bar, drinky, tanec, karaoke, swingová hudba, zábava, noční život, nezapomenutelná noc' }
  ]
})
</script>
<template>
        <HeaderNav/>
    <div class="mt-20">
        <div style="background-image:url('/img/bg.png');background-size:100% 100%">
            <section class="container mx-auto px-5">
            <div class="grid md:grid-cols-2 my-20 gap-8 items-center" >
                <div class="flex flex-col gap-8">
                    <h2 class="font-primary text-4xl text-amber-300">{{ data.title }}</h2>
                    <p class="text-white font-bold text-xl">{{ data.date }}</p>
                    <p v-if="data.body !== undefined && data.body.children.length !== 0" class="text-white opacity-70 leading-8">
                        <ContentDoc  />
                    </p>
                    <p v-else class="text-white opacity-70 leading-8">Tato událost mluví sama za sebe. Přijďte se za námi podívat a užijte si skvělou atmosféru plnou zábavy a dobrého kolektivu. Budeme se na vás těšit u nás ve SwingBaru!</p>
                    <div class="flex gap-8 item-center">
                        <p class="bg-slate-800 px-7 py-4 rounded-xl text-white font-primary text-xl">Vstupné: {{ data.price }}</p>
                        <NuxtLink v-if="data.ticket" :to="data.ticket" class="flex items-center">
                            <button class="bg-amber-300 text-slate-800 rounded-xl px-5 py-2 font-bold font-primary hover:bg-amber-400">Zakoupit vstupenku</button>
                        </NuxtLink>
                    </div>
                    
                </div>
                <div class="bg-white w-full h-96 rounded-xl bg-cover bg-center" :style="'background-image: url(' + data.img + ');'">

                </div>
            </div>
        </section>
        </div>
        
        <SectionsEventsOthers :remove="data._path"/>
        <Footer/>
    </div>
</template>