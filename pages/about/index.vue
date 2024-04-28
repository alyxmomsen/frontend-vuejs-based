<template>
    <div class="px-16 py-4 text-[#e7e5e4] bg-[#292524]">
        <h1>this is about page {{ foo }}</h1>
    </div>
</template>

<script>
export default {
    data:function () {
        return {
            foo:'bar' ,
            arr:[
                {
                    name:'alex' ,
                    password:'qwerty' ,
                    email:'alex@'
                }
            ]
        }
    }
}

</script>