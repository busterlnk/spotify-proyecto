<template>
<div class="container">
  <Header />
  <Body />
  <Player class="player-container" :device="device"/>
</div>
</template>

<script>
import Header from './components/Header';
import Body from './components/Body';
import Player from './components/Player';





export default {
  name: 'App',
  data(){
    return{

    }
  },
  components: {
    Header,
    Body,
    Player

  },
    async mounted() {
      const deviceID = await this.getDevices()
      const devices = deviceID.devices[0].id
      console.log(devices)
  },
  methods: {
      getDevices(){
          return fetch(`https://api.spotify.com/v1/me/player/devices`,{
              method: 'get',
              headers:{
              'Authorization': 'Bearer BQDBPO-6VbfdoveGPHw58rJTOpwfk5YE2S4QOSMZxhLxuvePzKtULQrPjem5tgEBzaus_OuRHZDOdZmh5KZI3syNO4KA3K9VnZriWBVPjo4ZCthJmQiO7K-c_zJcOX3a3xg_Ia-O6gdqirgQKHT4__M6MTLgGeFivaXhDOPixrydjqJW6dlAfKU'
              }
          })
          .then(response => response.json())
          .catch(err => console.log(err))
      }
  }
}
</script>

<style>
*{
  margin: 0px;
  padding: 0px;
}
#app {
  margin: 0px;
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  box-sizing: border-box;
}

</style>
