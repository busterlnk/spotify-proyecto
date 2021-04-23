<template>
<div class="container-body">
    <SearchBar />    

</div>
</template>

<script>
import SearchBar from './SearchBar';

export default{
    name:'Body',
    components:{
        SearchBar,
    }
}
</script>

<style>
    .container-body{
        background-color: rgb(31, 25, 25);
        height: 100vh;
    }
</style>