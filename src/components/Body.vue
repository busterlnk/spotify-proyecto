<template>
<div class="container-body">
    <div class="top-container">
        <SearchBar />    
        <Options />
    </div>
    <Tracks />

</div>
</template>

<script>
import SearchBar from './SearchBar';
import Options from './Options';
import Tracks from './Tracks';

export default{
    name:'Body',
    components:{
        SearchBar,
        Tracks,
        Options
    }
}
</script>

<style scoped>
    .container-body{
        background-color: rgb(19, 15, 15);
        height: 100vh;
    }
    .top-container{
        padding-top: 40px;
    }
</style>