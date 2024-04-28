<template>
    <div>
        <h1>Guests</h1>
        <form class="flex flex-col gap-9 justify-center">
            <label class="w-50" for="user-name">user name</label>
            <input id="user-name" type="text" placeholder="user-name" required />
            <label for="user-email">user email</label>
            <input id="user-email" type="text" placeholder="email" required />
        </form>
        <div v-for="user in users" :key="user.id">{{ user.name }}</div>
    </div>
</template>

<script>
export default {
    data:function () {
        return {
            inputstring:'the input string' ,
            users:[
                {
                    id:0 ,
                    name:'Alex' ,
                    email:'max@stierlitz.com' ,
                } ,
                {
                    id:1 ,
                    name:'Felix' ,
                    email:'felix@boy.com' ,
                } ,
                {
                    id:2 ,
                    name:'Max' ,
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