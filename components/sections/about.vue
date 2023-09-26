<template>
    <section class="bg-slate-900" style="background-image:url('/img/bg.png');background-size:100% 100%">
        <div class="container mx-auto px-5">
            <div class="grid md:grid-cols-2 gap-8 items-center">
                <div v-motion-slide-visible-left>
                    <AssetsTitle :title="'Vítejte v Swing Baru'"/>
                    <AssetsHr />
                    <p class="text-white opacity-70 text-lg text-center leading-8" >
                        Jsme hrdí na to, že vám můžeme představit náš Swing Bar, který je zároveň naším domovem plným zábavy, hudby a nezapomenutelných okamžiků. Naše místo je otevřené pro všechny, kteří hledají jedinečný zážitek a společnost, která sdílí lásku k hudbě a tanci.
                    </p>
                    <div class="flex gap-8 items-center justify-center mt-10">
                        <div class="w-36 h-36 rounded-lg border-2 border-white flex justify-center items-center">
                            <Icon name="bxs:drink" color="white" size="90"/>
                        </div>
                        <div class="w-36 h-36 hidden md:flex justify-center items-center">
                            <p class="font-bold text-6xl text-white">+</p>
                        </div>
                        <div class="w-36 h-36 rounded-lg border-2 border-white flex justify-center items-center">
                            <Icon name="mdi:dance-ballroom" color="white" size="90"/>
                        </div>
                    </div>
                </div>
                <img src="/img/about.jpg" class="rounded-xl hidden md:flex" v-motion-slide-visible-right>
            </div>
        </div>
    </section>
</template>