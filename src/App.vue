<template>
<div class="container">
  <Header />
  <Body :accessToken="accessToken" />
  <Player :devices="devices" class="player-container" :device="device"/>
</div>
</template>

<script>
import Header from './components/Header';
import Body from './components/Body';
import Player from './components/Player';
import queryString from 'query-string';


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
      const parsed = await queryString.parse(window.location.search);
      const accessToken = parsed.access_token;
      console.log(accessToken);

      const deviceID = await this.getDevices()
      const devices = deviceID.devices[0].id
      console.log(devices)
  },
  methods: {
      getDevices(){
          return fetch(`https://api.spotify.com/v1/me/player/devices`,{
              method: 'get',
              headers:{
              'Authorization': 'Bearer '+this.accessToken,
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
