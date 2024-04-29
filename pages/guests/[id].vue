<script setup>

definePageMeta({
    layout: "custom"
});

const route = useRoute();
// const context = useNuxt();

console.log(route.params);

</script>

<template>
    <div>
        <img src="/favicon.ico" alt="hello"/>
        <h1>hello it s id : {{ $route.params.id }}</h1>
    </div>
</template>