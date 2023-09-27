<script setup>
useHead({
  title: 'Swing Bar | Drinky, tanec a karaoke',
  meta: [
    { name: 'description', content: 'Vítejte v Swing Baru! Přijďte si vychutnat výborné drinky, tanec a karaoke v jednom. Naše místo je naplněno hudebními tóny swingu a vzrušující atmosférou. Připojte se k nám a zažijte nezapomenutelnou noc plnou zábavy.' },
    { name: 'keywords', content: 'Swing Bar, drinky, tanec, karaoke, swingová hudba, zábava, noční život, nezapomenutelná noc' }
  ]
})
</script>
<template>
    <div>
        <Header/>
        <main class="flex flex-col gap-36 py-36 bg-slate-900">
            <SectionsAbout/>
            <SectionsServices/>
            <SectionsEvents/>
            <SectionsJubox/>
            <SectionsDrinks/>
        </main>
        <Footer/>
    </div>
</template>