<template>
    <div class="container-recent-artists">
        <h3>Recent Artists</h3>
        <div class="recent-artists">
            <div class="recent-artist" v-for="artist in recentArtist" :key="artist.id">
                <img :src="artist.url" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RecentArtists',
    data(){
        return{
            recentArtist: [
                {
                    id: 1,
                    url: 'https://image.shutterstock.com/image-photo/colorful-fashion-modern-beauty-sexy-260nw-1475754200.jpg',
                },
                {
                    id: 2,
                    url: 'https://image.shutterstock.com/image-photo/colorful-fashion-modern-beauty-sexy-260nw-1475754200.jpg',
                },
                {
                    id: 3,
                    url: 'https://image.shutterstock.com/image-photo/colorful-fashion-modern-beauty-sexy-260nw-1475754200.jpg',
                },
                {
                    id: 4,
                    url: 'https://image.shutterstock.com/image-photo/colorful-fashion-modern-beauty-sexy-260nw-1475754200.jpg',
                },
            ]
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

    }
</style>