<script setup>
    const { data } = await useAsyncData('openhours', () => queryContent('/openhours').sort({order: 1}).find());
</script>
<template>
   <div class="rounded-xl border-2 border-white text-white p-7">
        <h3 class="font-primary text-4xl font-bold text-amber-300 text-center">Otevírací doba</h3>
        <table class="w-full m-5 text-2xl table-auto border-separate border-spacing-4">
            <tbody>
                <tr v-for="post in data" :key="post._path" class="border-b-2 border-dashed">
                    <td class="w-1/2">{{ post.title }}</td>
                    <td>{{ post.time }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>