<template>
    <section class="bg-slate-900">
        <div class="container mx-auto px-5">
            <AssetsTitle :title="'Nápoje'"/>
            <AssetsHr/>
            <div class="grid md:grid-cols-3 gap-10" v-motion-fade-visible> 
                <div class="bg-gradient-to-r from-slate-800 to-slate-700 rounded-xl p-10 scale-95" >
                    <img src="/img/services/coffe.png" class="p-14" alt="SwingBar Ostrava - Mletá káva">
                    <h3 class="font-primary text-white font-bold text-3xl text-center mb-8">Mletá káva</h3>
                    <p class="text-white opacity-70 text-xl px-6 text-center">Začni večer s kvalitní a čerstvě namletou kávou.</p>
                </div>
                <div class="bg-slate-800 rounded-xl p-10 border-2 border-amber-300" >
                    <div class="absolute rounded-xl border-2 border-amber-400 animate-bounce">
                        <p class="text-amber-300 font-primary text-xl px-5 py-3 font-semibold">Happy hours</p>
                    </div>
                    <img src="/img/services/drinks.png" class="p-14" alt="SwingBar Ostrava - Míchané drinky">
                    <h3 class="font-primary text-white font-bold text-3xl text-center mb-8">Míchané drinky</h3>
                    <p class="text-white opacity-70 text-xl px-6 text-center">S láskou namíchané unikátní, ale i klasické drinky.</p>
                </div>
                <div class="bg-gradient-to-r from-slate-800 to-slate-700 rounded-xl p-10 scale-95" >
                    <img src="/img/services/beer.png" class="p-14" alt="SwingBar Ostrava - Čepované pivo">
                    <h3 class="font-primary text-white font-bold text-3xl text-center mb-8">Čepované pivo</h3>
                    <img class="w-28 mx-auto" src="/radegast.png">
                </div>
            </div>
        </div>
    </section>
</template>