<template>
    <section  style="background-image:url('/img/bg.png');background-size:100% 100%">
        <div class="container mx-auto px-5">
            <AssetsTitle :title="'Karaoke jak ho neznáte'"/>
            <AssetsHr />
            <div class="grid md:grid-cols-3 gap-8 items-center justify-center">
                <div class="flex flex-col gap-8 items-center justify-center">
                    <div class="bg-amber-300 p-4 rounded-xl w-full hover:scale-105 transition-all">
                        <h3 class="font-bold text-2xl font-primary mb-2">Moderní jubox</h3>
                        <p class="leading-6 opacity-70">Dotykový display, jednoduché vyhledávání a mnohem více.</p>
                    </div>
                    <div class="bg-slate-800 p-4 rounded-xl w-full text-white hover:scale-105 transition-all">
                        <h3 class="font-bold text-2xl font-primary mb-2">Platba kartou i hotově</h3>
                        <p class="leading-6 opacity-70">Žádný bankomat už není potřeba jsme připraveni na vše.</p>
                    </div>
                </div>

                <img class="mx-auto" src="/img/jubox.png" >

                <div class="flex flex-col gap-8 items-center justify-center">
                    <div class="bg-slate-800 p-4 rounded-xl w-full text-white border-2 border-red-800 hover:scale-105 transition-all">
                        <h3 class="font-bold text-2xl font-primary mb-2">Připojení na youtube</h3>
                        <p class="leading-6 opacity-70">Nenechte se omezovat naší knihovnou písniček a vyberte si přímo z Youtube.</p>
                    </div>
                    <div class="bg-amber-300 p-4 rounded-xl w-full hover:scale-105 transition-all">
                        <h3 class="font-bold text-2xl font-primary mb-2">Karaoke na 4500 skladeb</h3>
                        <p class="leading-6 opacity-70">Česky, slovensky nebo anglicky? Není problém! U nás si vybere každý.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>