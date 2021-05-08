<template>
<div class="player">
    <div class="buttons-container">
        <fa icon="angle-double-left" class="controllers" />
        <div class="playcontainer"  @click="play(), mostrarPause= !mostrarPause, mostrarPlay= !mostrarPlay" v-show="mostrarPlay" >
            <fa icon="play" class="controllersPP"/>
        </div>

        <div class="playcontainer"  @click="pause(), mostrarPlay= !mostrarPlay, mostrarPause= !mostrarPause" v-show="mostrarPause" >
            <fa icon="pause" class="controllersPP"/>
        </div>
        <fa icon="angle-double-right" class="controllers" />
    </div>
</div>
</template>

<script>
export default {
    name: "Player",
    data(){
        return{
            mostrarPlay: true,
            mostrarPause: false,
            // deviceID: this.device
        }
    },
    mounted(){
        // console.log(this.device)
    },
    // props: ['device'],
    methods:{
        async play(){
            await fetch(`https://api.spotify.com/v1/me/player/play?device_id=8cb56f32b9369cf8fbe7411c06bbd832fdd08092`,{
                method: 'put',
                headers:{
                'Authorization': 'Bearer BQDBPO-6VbfdoveGPHw58rJTOpwfk5YE2S4QOSMZxhLxuvePzKtULQrPjem5tgEBzaus_OuRHZDOdZmh5KZI3syNO4KA3K9VnZriWBVPjo4ZCthJmQiO7K-c_zJcOX3a3xg_Ia-O6gdqirgQKHT4__M6MTLgGeFivaXhDOPixrydjqJW6dlAfKU',
                },
            })
            .catch(err => console.log(err))
        },
        pause(){
            return fetch(`https://api.spotify.com/v1/me/player/pause?device_id=8cb56f32b9369cf8fbe7411c06bbd832fdd08092`,{
                method: 'put',
                headers:{
                'Authorization': 'Bearer BQDBPO-6VbfdoveGPHw58rJTOpwfk5YE2S4QOSMZxhLxuvePzKtULQrPjem5tgEBzaus_OuRHZDOdZmh5KZI3syNO4KA3K9VnZriWBVPjo4ZCthJmQiO7K-c_zJcOX3a3xg_Ia-O6gdqirgQKHT4__M6MTLgGeFivaXhDOPixrydjqJW6dlAfKU',
                }
            })
            .catch(err => console.log(err))
        }
    }
}
</script>

<style scoped>
    .player{
        display: flex;
        justify-content: space-between;
        align-content: space-between;
        position: fixed;
        width: 100%;
        border-top: 1px solid #3f3f3f;
        background-color: #000;
        align-items: center;
        bottom: 0;
        height: 80px;
    }
    .actual-track{
        display: flex;

        align-items: center;
        color: #fff;
        padding-left: 30px;
    }
    .buttons-container{
        display: flex;
        align-items: center;
        color: #fff;
        padding-left: 30px;
    }
    .controllers{
        height: 40px;
    }
    .playcontainer{
        border-radius: 100%;
        background-color: #3f3f3f;
        padding: 12px;
        margin: 0 10px ;
    }
    .playcontainer:active{
        background-color: #5f5f5f;
    }
    .controllersPP{
        height: 30px;
    }
</style>