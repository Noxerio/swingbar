<template>
    <div class="p-7" v-motion-slide-visible-left>
        <AssetsTitle :title="'Rezervujte si stůl!'"/>
        <AssetsHr/>
        <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-slate-800 rounded-xl p-7">
                <p class="text-white font-semibold text-center text-lg">
                    <Icon name="material-symbols:call-outline" color="white" size="25"/>
                     +420 774 229 884
                </p>
            </div>
            <div class="bg-slate-800 rounded-xl p-7">
                <p class="text-white font-semibold text-center text-lg">
                    <Icon name="material-symbols:mail-outline" color="white" size="25"/>
                     info@swingbar.cz
                </p>
            </div>
        </div>
        <div class="mt-10">
            <h3 class="font-primary text-4xl font-bold text-white text-center">Kde nás najdete?</h3>
            <p class="text-center opacity-70 text-white mt-5 text-lg">Škroupova 1108/10, 702 00 Moravská Ostrava a Přívoz</p>
        </div>
    </div>
</template>