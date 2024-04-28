<template>
    <div>
        <h1>Guests</h1>
        <div>list</div>
    </div>
</template>

<script>
export default {
    data:function () {
        return {
            inputstring:'the input string' ,
            users:[
                {
                    name:'Alex' ,
                    email:'max@stierlitz.com' ,
                } ,
                {
                    name:'Denis' ,
                    email:'den@boy.com' ,
                } ,
                {
                    name:'Camaro' ,
                    email:'the@car.com' ,
                } ,
            ]
        }
    }, 
    components:[

    ]

}
</script>

<style scoped>



p {
    color:red ;
}

</style>