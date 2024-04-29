<script setup>
import { useUtils } from '../../composables/useUtils';




const {sayHello} = useUtils();

sayHello('hello world');

</script>

<template>
    <div class="bg-green-500">
        <h1>hello this is component</h1>
    </div>
</template>