<template>
    <header>
        <fa icon="spotify" type="fab" class="navbarIcon" />
        <fa icon="home"  class="navbarIcon" />
        <fa icon="safari" type="fab" class="navbarIcon" />
        <fa icon="history" class="navbarIcon" />
        <fa icon="ellipsis-h" class="navbarIcon" />
    </header>
</template>

<script>
export default{
    name:'Header',
    components:{
    }
}

</script>

<style>
header{
    display: flex;
    flex-direction: column;
    float: left;
    padding: 15px 10px;
    background-color: #000;
    border-radius: 0px 10px 10px 0px;
    position: fixed;
    height: 87vh;
}

.navbarIcon{
    height: 30px;
    margin: 15px;
    color: #fff;
}

.navbarIcon:hover{
    color: #1DB954
}
</style>