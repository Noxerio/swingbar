<template>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-8" v-motion-fade-visible>
        <div class="group cursor-none hover:scale-105 transition-all">
            <div class="group-hover:hidden md:w-52 h-52 bg-amber-300 border-2 border-amber-300 rounded-lg flex flex-col justify-center items-center gap-6">
                <Icon name="twemoji:microphone" color="white" size="90" />
                <div>
                    <h3 class="text-slate-800 text-center font-semibold text-lg">Karaoke</h3>
                </div>
            </div>
            <div class="hidden group-hover:flex md:w-52 h-52 bg-amber-300 border-2 border-amber-300 rounded-lg flex-col justify-center items-center gap-6">
                <div>
                    <h3 class="text-slate-800 text-center font-semibold text-lg mb-2">Karaoke</h3>
                    <p class="px-2 text-center leading-6 opacity-70">Více než 4500 skladeb v různých jazycích a na moderním zařízení!</p>
                </div>
            </div>
        </div>
        
        <div class="group cursor-none hover:scale-105 transition-all">
            <div class="group-hover:hidden md:w-52 h-52 bg-slate-800 border-2 border-amber-300 rounded-lg flex flex-col justify-center items-center gap-6 drop-shadow-2xl">
                <Icon name="twemoji:alarm-clock" color="white" size="90" />
                <div>
                    <h3 class="text-white text-center font-semibold text-lg">Happy hours</h3>
                </div>
            </div>
            <div class="hidden group-hover:flex md:w-52 h-52 bg-slate-800 border-2 border-amber-300 rounded-lg flex-col justify-center items-center gap-6">
                <div>
                    <h3 class="text-white text-center font-semibold text-lg mb-2">Happy hours</h3>
                    <p class="px-2 text-center leading-6 text-white opacity-70">Od 18:00 do 22:00 si můžeš vychutnat všechny drinky v nabídce za polovinu!</p>
                </div>
            </div>
        </div>
        <div class="group cursor-none hover:scale-105 transition-all">
            <div class="group-hover:hidden md:w-52 h-52 bg-slate-800 border-2 border-amber-300 rounded-lg flex flex-col justify-center items-center gap-6">
                <Icon name="twemoji:tropical-drink" color="white" size="90" />
                <div>
                    <h3 class="text-white text-center font-semibold text-lg px-2 md:px-0">Výhodné předplatné</h3>
                </div>
            </div>
            <div class="hidden group-hover:flex md:w-52 h-52 bg-slate-800 border-2 border-amber-300 rounded-lg flex-col justify-center items-center gap-6">
                <div>
                    <h3 class="text-white text-center font-semibold text-lg mb-2">Výhodné předplatné</h3>
                    <p class="px-2 text-center leading-6 text-white opacity-70">Předplať si u nás útratu a získáš neomezené happy hours a kredit do juboxu.</p>
                </div>
            </div>
        </div>

        <div class="group cursor-none hover:scale-105 transition-all">
            <div class="group-hover:hidden md:w-52 h-52 bg-slate-800 border-2 border-amber-300 rounded-lg flex flex-col justify-center items-center gap-6">
                <Icon name="noto:radio" color="white" size="90" />
                <div>
                    <h3 class="text-white text-center font-semibold text-lg">Jubox s <Icon name="mdi:youtube" color="red" size="40" /></h3>
                </div>
            </div>
            <div class="hidden group-hover:flex md:w-52 h-52 bg-slate-800 border-2 border-amber-300 rounded-lg flex-col justify-center items-center gap-6">
                <div>
                    <h3 class="text-white text-center font-semibold text-lg mb-2">Jubox s <Icon name="mdi:youtube" color="red" size="40" /></h3>
                    <p class="px-2 text-center leading-6 text-white opacity-70">Moderní jubox ve, kterém si můžeš nechat zahrát cokoliv z naší knihovny nebo youtube!</p>
                </div>
            </div>
        </div>
        
    </div>
</template>