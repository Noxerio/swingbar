<template>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8" v-motion-fade-visible>
        <div class="w-52 h-52 bg-amber-300 border-2 border-amber-300 rounded-lg flex flex-col justify-center items-center gap-6">
            <Icon name="twemoji:microphone" color="white" size="90" />
            <div>
                <h3 class="text-slate-800 text-center font-semibold text-lg">Karaoke</h3>
            </div>
        </div>
        <div class="w-52 h-52 bg-slate-800 border-2 border-amber-300 rounded-lg flex flex-col justify-center items-center gap-6 drop-shadow-2xl">
            <Icon name="twemoji:alarm-clock" color="white" size="90" />
            <div>
                <h3 class="text-white text-center font-semibold text-lg">Happy hours</h3>
            </div>
        </div>
        <div class="w-52 h-52 bg-slate-800 border-2 border-amber-300 rounded-lg flex flex-col justify-center items-center gap-6">
            <Icon name="twemoji:tropical-drink" color="white" size="90" />
            <div>
                <h3 class="text-white text-center font-semibold text-lg">Výhodné předplatné</h3>
            </div>
        </div>
        <div class="w-52 h-52 bg-slate-800 border-2 border-amber-300 rounded-lg flex flex-col justify-center items-center gap-6">
            <Icon name="noto:radio" color="white" size="90" />
            <div>
                <h3 class="text-white text-center font-semibold text-lg">Jubox s <Icon name="mdi:youtube" color="red" size="40" /></h3>
            </div>
        </div>
    </div>
</template>