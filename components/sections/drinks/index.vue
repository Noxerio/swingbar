<template>
    <section class="bg-slate-900">
        <div class="container mx-auto px-5">
            <AssetsTitle :title="'Míchačky všeho druhu'"/>
            <AssetsHr/>
            <div class="grid grid-cols-2 md:grid-cols-5 gap-8">
                <SectionsDrinksDrink :img="'img/drinks/1.jpeg'"/>
                <SectionsDrinksDrink :img="'img/drinks/2.jpeg'"/>
                <SectionsDrinksDrink :img="'img/drinks/3.jpeg'"/>
                <SectionsDrinksDrink :img="'img/drinks/4.jpeg'"/>
                <SectionsDrinksDrink :img="'img/drinks/5.jpeg'"/>
            </div>
        </div>
    </section>
</template>