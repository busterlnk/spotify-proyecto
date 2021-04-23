<template>
    <input type="text" v-model="busqueda" class="search-bar far fa-circle" placeholder="Search...">
</template>

<script>
export default{
    name:"SearchBar"
}
</script>

<style>
.search-bar{
    border-color: darkslategray;
    background-color: #000;
    border-radius: 120px;
    margin-top: 40px;
    width: 70%;
    height: 50px;
    font-size: 20px;
    padding-left: 60px;
    color: #fff;
}

</style>