<template>
    <div class="container-recent-artists">
        <h3>Recent Artists</h3>
        <div class="recent-artists">
            <div class="recent-artist" v-for="artist in recentArtist" :key="artist.id">
                <img @click="playRecent(artist.track.album.uri)" :src="artist.track.album.images[0].url" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RecentArtists',
    props: [
        'accessToken',
        'devices'
    ],
    data(){
        return{
            recentArtist:[],
        }
    },
    async mounted(){
        const recents = await this.recent()
        console.log(recents.items)
        this.recentArtist = recents.items

    },
    methods: {
        recent(){
            return fetch("https://api.spotify.com/v1/me/player/recently-played?limit=4&after=1484811043508",{
                method: 'get',
                headers:{
                'Authorization': 'Bearer '+this.accessToken,
                }
            })
            .then(response => response.json())
            .catch(err => console.log(err))
        },
        playRecent(uri){
            fetch('https://api.spotify.com/v1/me/player/play?device_id='+this.devices,{
                method: 'put',
                body:
                    JSON.stringify({
                    "context_uri": uri,
                    "offset": {
                        "position": 0
                    },
                    "position_ms": 1
                    }),
                headers:{
                'Authorization': 'Bearer '+this.accessToken,
                }
            })
            .catch(err => console.log(err))
        }
    }
}
</script>

<style>

    .container-recent-artists h3{
        text-align: left;
    }

    .container-recent-artists .recent-artists{
        width: 350px;
        height: 350px;
        border-radius: 20px;
        display: flex;
        flex-wrap: wrap;
        overflow: hidden;
        justify-content: space-between;
        align-content: space-between;
    }
    .container-recent-artists .recent-artists .recent-artist{
        width: 49%;
        height: 49%;
        overflow: hidden;
        opacity: 0.8;

    }
    .container-recent-artists .recent-artists .recent-artist:active{
        opacity: 1;

    }
    .container-recent-artists .recent-artists .recent-artist img{
        height: 175px;
    }
</style>