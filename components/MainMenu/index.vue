<script setup>
import { useUtils } from '../../composables/useUtils';


    const {sayHello} = useUtils();

    sayHello('good bye');

</script>

<template>
    <div class="bg-[#292524] text-[#e7e5e4] px-9 py-9">
        <Alert />
        <NuxtLink to="/">to HOME</NuxtLink>
        <NuxtLink to="/about">to ABOUT</NuxtLink>
        <NuxtLink to="/guests">to GUESTS</NuxtLink>
    </div>
</template>

