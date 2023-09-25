<template>
    
<!-- drawer component -->
<div id="drawer-right-example" class="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full backdrop-blur-sm bg-slate-800/30 w-80 dark:bg-gray-800" tabindex="-1" aria-labelledby="drawer-right-label">
    <h5 id="drawer-right-label" class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"></h5>
   <button type="button" data-drawer-hide="drawer-right-example" aria-controls="drawer-right-example" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" >
      <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
      </svg>
      <span class="sr-only">Close menu</span>
   </button>
   <div>
    <div class="rounded-xl bg-amber-300 p-5 mb-5">
        <h5 class="font-bold mb-2 text-lg font-primary">Najdete nás na adrese:</h5>
        <p class="opacity-70">Škroupova 1108/10</p>
        <p class="opacity-70">702 00 Moravská Ostrava a Přívoz</p>
    </div>
    <div class="rounded-xl bg-slate-700 p-5 mb-5 text-white">
        <h5 class="font-bold mb-2 text-lg font-primary">Parkování:</h5>
        <p class="opacity-70">Hned naproti baru je prostorné parkoviště.</p>
    </div>    
    <div class="rounded-xl bg-slate-700 text-white p-5 mb-5">
        <h5 class="font-bold my-2 text-lg font-primary">Tramvajový spoj:</h5>
        <p class="opacity-70">Zastávka Stodolní: 2, 8, 1, 14, 18, 6, 10</p>
    </div>
    <iframe class="grayscale rounded-xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.2982566286555!2d18.282609676848647!3d49.83685313135378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4713e33ae1a631e7%3A0x3fbfff8f811ec15!2zxaBrcm91cG92YSAxMTA4LzEwLCA3MDIgMDAgTW9yYXZza8OhIE9zdHJhdmEgYSBQxZnDrXZveg!5e0!3m2!1scs!2scz!4v1685788672188!5m2!1scs!2scz" width="100%" height="250" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

    </div>
</div>

</template>