<template>
    <div>
        <h3 class="title-week">Tracks of the week</h3>
        <div class="container-weektracks">
            <div  v-for="last in lastReleased" :key="last.id" class="container-track">
                <div class="left-week">
                    <img v-bind:src="last.images[0].url" alt="" class="image-artist">
                    <div class="names">
                        <p class="title">{{last.name}}</p>
                        <p class="subtitle">{{last.artists[0].name}}</p>
                    </div>
                </div>
                <div class="right-week">
                    <fa icon="headphones" class="headphones" />
                    <p>asas</p>
                    <div class="like-play-container">
                        <fa icon="heart" class="like-button" />
                        <div class="container-play" @click="playTracks(last.uri)">
                            <fa icon="play" class="play-button" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'WeekTracks',
    props: ['accessToken', 'devices'],
    data(){
        return{
            lastReleased:[],
        }
    },
    async mounted(){
        const released = await this.newReleased()
        console.log(released.albums.items)
        this.lastReleased = released.albums.items

    },
    // data(){
    //     return{
    //         tracksOfTheWeek: [
    //             {
    //                 id: 1,
    //                 artist: 'James Arthur',
    //                 song: 'Say you wont let go',
    //                 listen: '255k',
    //                 img: 'https://i.pinimg.com/236x/5e/3a/e9/5e3ae94b12b1a37f4fe6ecb36c062eb0--james-arthur-king-arthur.jpg'
    //             },
    //             {
    //                 id: 2,
    //                 artist: 'Lewis Capaldi',
    //                 song: 'Before you go',
    //                 listen: '231k',
    //                 img: 'https://pbs.twimg.com/profile_images/1332377130534117381/zh29EAuy_400x400.jpg'
    //             },
    //             {
    //                 id: 3,
    //                 artist: 'Harry Styles',
    //                 song: 'Falling',
    //                 listen: '223k',
    //                 img: 'https://i.scdn.co/image/b2163e7456f3d618a0e2a4e32bc892d6b11ce673'
    //             },
    //             {
    //                 id: 4,
    //                 artist: 'Panic! at the disco',
    //                 song: 'Monalisa',
    //                 listen: '189k',
    //                 img: 'https://i.scdn.co/image/58518a04cdd1f20a24cf0545838f3a7b775f8080'
    //             },
    //             {
    //                 id: 5,
    //                 artist: 'My chemical Romance',
    //                 song: 'Helena',
    //                 listen: '175k',
    //                 img: 'https://i.scdn.co/image/bab47daddd2c01b0ee83e54536aa7e2c77ba7c14'
    //             }
    //         ]
    //     }
    // },
    methods:{
        newReleased(){
            return fetch("https://api.spotify.com/v1/browse/new-releases?country=ES&limit=5&offset=0",{
                method: 'get',
                headers:{
                    'Authorization': 'Bearer '+this.accessToken,
                }
            })
            .then(response => response.json())
            .catch(err => console.log(err))
        },
        playTracks(lasturi){
            fetch('https://api.spotify.com/v1/me/player/play?device_id='+this.devices,{
                method: 'put',
                body:
                    JSON.stringify({
                    "context_uri": lasturi,
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
    .title-week{
        text-align: left;
        margin-left: 30px;
    }
    .container-weektracks{
        border-radius: 20px;
        border: 1px solid #3f3f3f;
        margin-left: 20px;
        width: 600px;
        background-color: #0f0f0f;
        box-sizing: border-box;
        padding: 10px;
    }
    .container-track{
        padding: 10px 5px;
        display: flex;
        text-align: left;
        align-items: center;
        justify-content: space-between;
    }
    .headphones{
        height: 20px;
    }
    .left-week{
        display: flex;
        align-items: center;
    }
    .image-artist{
        height: 40px;
        width: 40px;
        border-radius: 14px;
        margin-right: 10px;
    }
    .left-week .names{
        font-size: 15px;
    }
    .left-week .names .subtitle{
        color: #7f7f7f;
    }
    .right-week{
        display: flex;
        align-items: center;
    }
    .right-week p{
        margin-left: 5px;
    }
    .right-week .like-play-container{
        width: 80px;
        height: 40px;
        border: 1px solid #3f3f3f;
        border-radius: 50px;
        margin: 0;
        margin-left: 10px;
        background-color: #000;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2px;
    }

    .right-week .like-play-container .like-button{
        height: 18px;
        margin-left: 12px;
    }
    
    .right-week .like-play-container .container-play{
        background: #3f3f3f;
        border-radius: 100%;
        height: 40px;
        width: 40px;
        justify-content: center;
        display: flex;
        align-items: center;
    }

    .right-week .like-play-container .container-play:active{
        background: #6f6f6f;
        color: #000;
    }

    .right-week .like-play-container .play-button{
        height: 18px;
        
    }
    
</style>