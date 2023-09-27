<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
</script>
<template>
    <nav class="bg-slate-800 bg-opacity-70 container mx-auto rounded-xl z-10 md:mt-5" v-motion-fade-visible>
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <NuxtLink to="/" class="flex items-center">
                <span class="self-center font-primary text-2xl font-semibold whitespace-nowrap text-amber-300">Swing Bar</span>
            </NuxtLink>
            <div class="flex md:order-2">
                <button type="button" data-drawer-backdrop="false" class="text-slate-800 bg-amber-300 hover:bg-amber-400 rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 font-primary font-semibold" data-drawer-target="drawer-right-example" data-drawer-show="drawer-right-example" data-drawer-placement="right" aria-controls="drawer-right-example">Jak se k nám dostanete?</button>
                <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-slate-800 focus:outline-none focus:ring-2 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
            </div>
            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                    <NuxtLink to="/" class="block py-2 pl-3 pr-4 text-slate-300 rounded hover:bg-gray-100 hover:text-slate-900 md:hover:bg-transparent md:hover:text-amber-300 md:p-0 md:dark:hover:text-amber-300 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Úvodní stránka</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/events" class="block py-2 pl-3 pr-4 text-slate-300 rounded hover:bg-gray-100 hover:text-slate-900 md:hover:bg-transparent md:hover:text-amber-300 md:p-0 md:dark:hover:text-amber-300 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Události</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/contact"  class="block py-2 pl-3 pr-4 text-slate-300 rounded hover:bg-gray-100 hover:text-slate-900 md:hover:bg-transparent md:hover:text-amber-300 md:p-0 md:dark:hover:text-amber-300 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Kontakt</NuxtLink>
                </li>
                </ul>
            </div>
        </div>
    </nav>
    <HeaderDrawer/>
</template>

<style>
a.nuxt-link-active {
  font-weight: r;
}
/* exact link will show the primary color for only the exact matching link */
a.nuxt-link-exact-active {
  color: #00c58e;
}
</style>