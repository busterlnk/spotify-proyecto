<template>
<div class="container-track">
    <div :key="item.id" v-for="item in items" class="track" >
        <img v-bind:src="item.images[0].url" alt="" class="image">
        <div class="textos">
            <p class="cantity">{{item.tracks.total}} Tracks</p>
            <div class="spacebetween"></div>
            <div class="containerBottom">
                <fa icon="play" class="playIcon" />
                <div class="bottom-text">
                    <p class="subtitle">{{item.description}}</p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>

export default{
    name: 'Tracks',
    props: [
        'accessToken'
    ],
    data(){
        return{
            items: []
        }
    },
    async mounted(){
        const artistas = await this.getArtist()
        const recomendaciones = await this.getRecomendations()
        this.items = recomendaciones.playlists.items
        console.log(artistas)
        
    },
    methods:{
        getRecomendations(){
            return fetch("https://api.spotify.com/v1/browse/categories/rock/playlists?country=es&limit=4&offset=5",{
                method: 'get',
                headers: {
                    'Authorization': 'Bearer ' +this.accessToken,
                },
                })
            .then(response => response.json())
            .catch(error => console.log(error))
        },
        getArtist(){
            return fetch("https://api.spotify.com/v1/artists/43ZHCT0cAZBISjO8DG9PnE/top-tracks?market=ES",{
                method: 'get',
                headers: {
                    'Authorization': 'Bearer ' +this.accessToken,
                },
                })
            .then(response => response.json())
            .catch(error => console.log(error))
        }
    }
}
</script>

<style scoped>
    .container-track{
        margin-top: 30px;
        width: 75%;
        justify-content: left;
    }

    .container-track .image{
        width: 100%;
        height: 100%;
    }

    .track{
        color: #fff;
        height: 380px;
        width: 280px;
        margin: 20px 20px;
        display: inline-block;
        position: relative;
        border-radius: 50px;
        overflow: hidden;
    }
    .cantity{
        text-align: left;
        margin-left: 25px;
        margin-top: 35px;
        font-size: 18px;
        font-weight: 900;
    }
    .spacebetween{
        padding: 120px 0px;
    }


    .playIcon{
        margin-left: 17px;
        border-radius: 100%;
        background-color: #1DB954;
        height: 20px;
        padding: 15px;
        float: left;
    }

    .playIcon:hover{
        color: #1DB954;
        background-color: #fff;
    }
    
    .container-track .textos{
        position: absolute;
        top: 0;
    }
    .subtitle{
        text-align: left;
        margin-left: 70px;
        font-size: 18px;
        font-weight: 900;
        color: #fff;
        -webkit-text-stroke: .5px black;
    }
</style>