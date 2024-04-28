<template>
    <div>
        <h1>Users</h1>
        <h2>{{ inputstring }}</h2>
        <div>
            <div v-for="user in users">
                <p>{{ user.name }}</p>
                <p>{{ user.email }}</p>
            </div>
            <input type="text" v-model="inputstring"/>
        </div>
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
    }
}
</script>

<style scoped>



p {
    color:red ;
}

</style>