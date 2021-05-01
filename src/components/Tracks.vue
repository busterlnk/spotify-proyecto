<template>
<div class="container-track">
    <div :key="task.id" v-for="task in tasks" class="track" >
        <img v-bind:src="task.img" alt="" class="image">
        <div class="textos">
            <p class="cantity">{{task.songs}} Tracks</p>
            <div class="spacebetween"></div>
            <div class="containerBottom">
                <fa icon="play-circle" class="playIcon" />
                <div class="bottom-text">
                    <p class="title">{{task.title}}</p>
                    <p class="subtitle">{{task.subtitle}}</p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>

export default {
    name: 'Tracks',
    data(){
        return{
            tasks:[
                {
                    id: 1,
                    title: 'Daily Mix 1',
                    subtitle: 'Here is your daily mix',
                    songs: 20,
                    img: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallpapercave.com%2Fwp%2FXmgloEq.jpg&f=1&nofb=1',
                },
                {
                    id: 2,
                    title: 'Daily Mix 2',
                    subtitle: 'Here is your daily mix',
                    songs: 15,
                    img: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fgetwallpapers.com%2Fwallpaper%2Ffull%2F2%2F2%2F3%2F590040.jpg&f=1&nofb=1',
                },
                {
                    id: 3,
                    title: 'Daily Mix 3',
                    subtitle: 'Here is your daily mix',
                    songs: 30,
                    img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.qULWzBgQpnwVVHC4H3SKAwHaEo%26pid%3DApi&f=1',
                }
            ]
        }
    }
}
</script>

<style scoped>
    .container-track{
        margin-right: 350px;
        margin-top: 60px;
        display: inline-block;
        
    }

    .container-track .image{
        width: 100%;
        height: 100%;
    }

    .track{
        color: #fff;
        height: 380px;
        width: 300px;
        margin: 20px 70px;
        display: inline-block;
        position: relative;
        border-radius: 50px;
        overflow: hidden;
    }
    .cantity{
        text-align: left;
        margin-left: 35px;
        margin-top: 35px;
    }
    .spacebetween{
        padding: 130px 0px;
    }

    .containerBottom{
        display: flex;
    }

    .playIcon{
        margin-left: 30px;
        height: 35px;
    }
    .container-track .textos{
        position: absolute;
        top: 0;
    }
    .title{
        text-align: left;
        margin-left: 20px;
    }
    .subtitle{
        text-align: left;
        margin-left: 20px;
    }
</style>