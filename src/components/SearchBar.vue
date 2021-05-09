<template>
<div class="container-searchbar">
    <input type="text" v-model="busqueda" @keyup='search(busqueda)' class="search-bar" placeholder="Search...">
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
    props: [
        'accessToken'
    ],
    data(){
        return{
            busqueda: '',
        }
    },
    methods: {
        search(busqueda){
            fetch(`https://api.spotify.com/v1/search?q=${busqueda}&type=artist,track`,{
                method: 'get',
                headers:{
                    'Authorization': 'Bearer ' +this.accessToken
                }
            })
            .then(response => response.json())
            .then(json => console.log(json))
            .then(this.$emit('resultado-busqueda', this.resultados))
            .catch(err => console.log(err))

        },
    },
    // watch: {
    //     resultados: search = (busqueda) => {
    //     this.$emit('resultado-busqueda', this.resultados);
    // }
    // },
    // created: function() {
    //     this.$emit('resultado-busqueda', this.resultados);
    // }
}
</script>

<style>

.container-searchbar{
    width: 69%;
    float: left;
    position: relative; 
}
.search-bar{
    border: gray 1px solid;
    background-color: #1f1f1f;
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
    color: #fff;
}

.container-filters{
    position: absolute;
    color: lightcyan;
    right: 0;
    display: flex;
    top: 0;
}

.container-filters .buttons{
    padding-top: 5px;
}

.container-filters .buttons .button{
    font-size: 18px;
    padding: 5px;
    margin-right: 10px;
    background-color: transparent;
    color: #1DB954;
    border-radius: 5px;
    border: 1px solid #1DB954;
}

.container-filters .buttons .button:hover{
    background: #1DB954;
    color: #fff;
}


</style>