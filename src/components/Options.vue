<template>
    <div class="container-options">
        <div class="options">
            <fa icon="shield-alt" class="optionIcon" />
            <fa icon="cog" class="optionIcon" />
            <fa icon="bell" class="optionIcon" />
        </div>
        <div class="container-photo">
            <div class="non-photo">
                <fa icon="sort-down" class="optionIcon" />
            </div>
            <div class="photo">
                <img src="./../images/IMG_0062.jpg" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Options'
}
</script>

<style scoped>
.container-options{
    position: absolute;
    display: flex;
    right: 0;
    margin-right: 180px;
}
.options{
    background-color: #000;
    border: gray 1px solid;
    display: inline-block;
    border-radius: 120px;
    width: 120px;
    height: 50px;
    font-size: 20px;
    margin-right: 30px;
}
.optionIcon{
    height: 25px;
    text-align: center;
    padding: 13px 5px;
    /* margin: 15px; */
    color: #fff;
}
.optionIcon:hover{
    color: gray;
}

.container-photo{
    width: 100px;
    height: 50px;
    border: 1px solid gray;
    background: #000;
    border-radius: 100px;
    display: flex;
}

.container-photo .non-photo{
    padding-left: 17px;
    display: absolute;
}

.container-photo .photo{
    border-radius: 100%;
    background: #fff;
    position: absolute;
    width: 55px;
    height: 100%;
    margin-left: 55px;
}

.container-photo .photo img{
    border-radius: 100%;
    height: 100%;
    width: 100%;

}
</style>