<template>
<div class="container-searchbar">
    <input type="text" v-model="busqueda" class="search-bar" placeholder="Search...">
    <fa icon="record-vinyl" class="searchIcon" />
    <div class="container-filters">
        <div class="buttons">
            <button class="button">Minimal</button>
            <button class="button">House</button>
        </div>
    </div>

</div>
</template>

<script>
export default{
    name:"SearchBar",
    data(){
        return{
            busqueda: '',
        }
    }
}
</script>

<style>

.container-searchbar{
    width: 65%;
    margin-left: 130px;
    float: left;
    position: relative; 
}
.search-bar{
    border: gray 1px solid;
    background-color: #000;
    width: 100%;
    height: 50px;
    color: #fff;
    border-radius: 120px;
    font-size: 20px;
    padding-left: 60px;
    margin-right: 20px;
}
.searchIcon {
    height: 27px;
    position: absolute;
    left: 0;
    top: 8px;
    padding: 5px 17px;
    color: lightcyan;
}

.container-filters{
    position: absolute;
    color: lightcyan;
    right: 0;
    display: flex;
    top: 8px;
}

.container-filters .buttons{
    padding-top: 2px;
}

.container-filters .buttons .button{
    font-size: 18px;
    padding: 5px;
    margin-right: 10px;
    background-color: transparent;
    color: lightcyan;
    border-radius: 5px;
    border: 1px solid #fff;
}

.container-filters .buttons .button:hover{
    background: #fff;
    color: #000;
}


</style>