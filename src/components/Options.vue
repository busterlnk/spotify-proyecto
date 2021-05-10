<template>
    <div class="container-options">
        <div class="options">
            <fa icon="shield-alt" class="optionIcon" />
            <fa icon="cog" class="optionIcon" />
            <fa icon="bell" class="optionIcon" />
        </div>
        <div class="container-photo">
            <div class="non-photo">
                <fa icon="sort-down" class="optionIcon" v-show="ocultarDesplegable" @click="desplegarPerfil()"/>
            </div>
            <div class="photo">
                <img src="./../images/IMG_0062.jpg" alt="">
            </div>
            <div class="desplegable" v-show="mostrarPerfil">
                <ul class="menu">
                    <router-link to="/profile"> <li>Profile</li> </router-link>
                    <router-link to="/Plan"> <li>Plan</li> </router-link>
                    <li @click="desplegarPerfil()"><fa icon="sort-up" class="sort-up"/></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Options',
    data(){
        return{
            mostrarPerfil: false,
            ocultarDesplegable: true,
            artista: {},

        }
    },
    methods:{
        desplegarPerfil(){
            this.mostrarPerfil = !this.mostrarPerfil;
            this.ocultarDesplegable = !this.ocultarDesplegable;
        },
    }
}

</script>

<style scoped>
.container-options{
    position: absolute;
    display: flex;
    right: 0;
    margin-right: 180px;
}
.options{
    background-color: #000;
    border: gray 1px solid;
    display: inline-block;
    border-radius: 120px;
    width: 120px;
    height: 50px;
    font-size: 20px;
    margin-right: 30px;
}
.optionIcon{
    height: 25px;
    text-align: center;
    padding: 13px 5px;
    /* margin: 15px; */
    color: #fff;
}
.optionIcon:hover{
    color: #1DB954;
}

.container-photo{
    width: 100px;
    height: 50px;
    border: 1px solid gray;
    background: #000;
    border-radius: 100px;
    display: flex;
    z-index: 1;
}

.container-photo .non-photo{
    padding-left: 17px;
    display: absolute;
}

.container-photo .photo{
    border-radius: 100%;
    background: #fff;
    position: absolute;
    width: 55px;
    height: 100%;
    z-index: 2;
    margin-left: 55px;
}

.container-photo .photo img{
    border-radius: 100%;
    height: 100%;
    width: 100%;

}

.desplegable{
    background: #000;
    height: 200px;
    width: 110px;
    top: 0;
    position: absolute;
    border-radius: 25px 27px 25px 25px;
    border: 1px solid gray;
    z-index: 0;
    padding-top: 55px;
    box-sizing: border-box;
}

.desplegable .menu{
    list-style-type: none;
    margin: 0px;
    left: 0;
    color: #fff;
}

.desplegable .menu li{
    border-top: 1px solid #fff;
    padding-top: 7px;
    padding-bottom: 7px;
}

.desplegable .menu li:hover{
    background-color: #fff;
    color: #000;
    overflow: hidden;
}

.desplegable .menu .sort-up{
    height: 25px;
    width: 25px;
    text-align: center;
    padding-top: 10px;
}

</style>