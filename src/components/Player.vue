<template>
<div class="player">
    <div class="buttons-container">
        <fa icon="angle-double-left" @click="previous()" class="controllers" />
        <div class="playcontainer" v-if="!current.is_playing" @click="play(),  current.is_playing = !current.is_playing" >
            <fa icon="play" class="controllersPP"/>
        </div>

        <div class="playcontainer" v-else @click="pause(), current.is_playing = !current.is_playing" >
            <fa icon="pause" class="controllersPP"/>
        </div>
        <fa icon="angle-double-right" @click="next()" class="controllers" />
    </div>
    <div class="volume-container">
        <input type="range" name="volume" @click="changeVolume(volume)" min="0" max="100" v-model="volume" id="volume">
    </div>
</div>
</template>

<script>
export default {
    name: "Player",
    props: [
        'accessToken',
        'devices'
    ],
    data(){
        return{
            mostrarPlay: true,
            mostrarPause: false,
            current: {},
            volume: '',
        }
    },
    async mounted(){
        this.current = await this.currentTrack()
        console.log(this.current)
    },
    methods:{
        async play(){
            await fetch('https://api.spotify.com/v1/me/player/play?device_id='+this.devices,{
                method: 'put',
                headers:{
                'Authorization': 'Bearer '+this.accessToken,
                },
            })
            .catch(err => console.log(err))
        },
        pause(){
            return fetch('https://api.spotify.com/v1/me/player/pause?device_id='+this.devices,{
                method: 'put',
                headers:{
                'Authorization': 'Bearer '+this.accessToken,
                }
            })
            .catch(err => console.log(err))
        },
        next(){
            return fetch('https://api.spotify.com/v1/me/player/next?device_id='+this.devices,{
                method: 'post',
                headers:{
                'Authorization': 'Bearer '+this.accessToken,
                }
            })
            .catch(err => console.log(err))
        },
        previous(){
            return fetch('https://api.spotify.com/v1/me/player/previous?device_id='+this.devices,{
                method: 'post',
                headers:{
                'Authorization': 'Bearer '+this.accessToken,
                }
            })
            .catch(err => console.log(err))
        },
        changeVolume(volume){
            fetch('https://api.spotify.com/v1/me/player/volume?volume_percent='+volume+'&device_id='+this.devices,{
                method: 'put',
                headers:{
                'Authorization': 'Bearer '+this.accessToken,
                }
            })
            .catch(err => console.log(err))
        },
        currentTrack() {
            return fetch('https://api.spotify.com/v1/me/player/currently-playing',{
                method: 'get',
                headers:{
                'Authorization': 'Bearer '+this.accessToken,
                }
            })
            .then(response => response.json())
            .catch(err => console.log(err))
        },
    },
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