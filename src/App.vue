<template>
<div class="main-container">
  <div v-if="this.accessToken" class="container">
    <Header />
    <Body 
      v-bind:accessToken="accessToken" 
      v-bind:devices="devices"/>
    <Player 
      v-bind:accessToken="accessToken" 
      v-bind:devices="devices" 
      class="player-container"
    />
  </div>
  <div v-else>
    <Login />
  </div>
</div>
</template>

<script>
import Header from './components/Header';
import Body from './components/Body';
import Player from './components/Player';
import queryString from 'query-string';
import Login from './components/Login';


export default {
  name: 'App',
  data(){
    return{
      accessToken: '',
      devices: ''
    }
  },
  components: {
    Header,
    Body,
    Player,
    Login

  },
    async mounted() {
      const parsed = await queryString.parse(window.location.search);
      this.accessToken = parsed.access_token;
      console.log(this.accessToken);

      const deviceID = await this.getDevices()
      // console.log(deviceID)
      if(deviceID.devices.length > 0){
        this.devices = deviceID.devices[0].id
        console.log(this.devices)
      }
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
    },
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
