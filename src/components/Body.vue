<template>
<div class="container-body">
    <div class="top-container">
        <SearchBar :accessToken="accessToken" :search="search" />   
        <!-- <Resultados :accessToken="accessToken"/>  -->
        <Options />
    </div>
    <Tracks :accessToken="accessToken" class="tracks"/>
    <div class="bottom-container">
        <button @click="login()"></button>
        <Gnres />
        <WeekTracks class="weektracks"/>
        <RecentArtists class="recentArtists" />
    </div>
</div>
</template>

<script>

import SearchBar from './SearchBar';
import Options from './Options';
import Tracks from './Tracks';
import Gnres from './Gnres';
import WeekTracks from './WeekTracks';
import RecentArtists from './RecentArtists';
// import Resultados from './Resultados'

export default{
    name:'Body',
    props: [
        'accessToken'
    ],
    components:{
        SearchBar,
        Tracks,
        Options,
        Gnres,
        WeekTracks,
        RecentArtists,
        // Resultados
    },

    methods: {
    //     EnviarResultado(){
    //         this.resultado = this.resultados
    //     }
    // }
    // methods: {
    //     search(busqueda){
    //         fetch(`https://api.spotify.com/v1/search?q=${busqueda}&type=artist`,{
    //             method: 'get',
    //             headers:{
    //                 'Authorization': 'Bearer BQA-kteoL4pCPCheIDbAkbsBpKjHbZqmas-yzveKT2P1xVlfvd9s5c0gtUY349grdpcWkc2DEu69wHPCpOMl2LQVuvb7deeXu3JCcJWLLATWCc41u-uR1wjP0wvBGJ4-HPxkMdqVRxm0M_bY8MrOw75_3rq9sSQ'
    //             }
    //         })
    //         .then(response => response.json())
    //         .then(json => console.log(json))
    //         .catch(err => console.log(err))

    //     },
        login(){
            return fetch('/login',
                function(req, res){
                const scopes = 'user-read-private user-read-email';
                res.redirect('https://accounts.spotify.com/authorize'+
                '?response_type=code' +
                '&client_id=' + this.my_client_id +
                (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
                '&redirect_uri=' + encodeURIComponent(this.redirect_uri)); 
            })
        }
    },
}
</script>

<style scoped>
    .container-body{
        background-color: #000;
        color: #fff;
        height: 100%;
        padding-left: 160px;
    }

    .top-container{
        padding-top: 40px;
    }
    .bottom-container{
        display: flex;
        padding-bottom: 200px;
    }

    .weektracks{
        margin: 0px 20px;        
    }
</style>