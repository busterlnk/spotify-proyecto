<template>
    <div class="gnres-container">
        <h3>Genres</h3>
        <div class="containe-buttons">
            <button>Classic</button>
            <button>Rock</button>
            <button>Alternative</button>
            <button>Pop</button>
            <button>Reggae</button>
            <button>Funk</button>
            <button>Punk</button>
            <button>Techno</button>
            <button>Rap</button>
        </div>
        <button class="all-gnres">All Genres</button>
    </div>
</template>

<script>
export default {
    name: 'Gnres',

}
</script>
<style>
    .gnres-container{
        width: 260px;
        color: #fff;
        text-align: left;
        left: 0;
    }
    h3{
        margin-bottom: 10px;
    }
    .container-buttons{
        display: flex;
        flex-wrap: wrap;
    }
    button{
        color: #fff;
        background-color: #0f0e0e;
        border: 1px solid #6f6f6f;
        padding: 7px 12px;
        margin:  4px 6px;
        border-radius: 10px;
    }

    button:hover{
        background-color: #6f6f6f;
    }

    .all-gnres{
        background-color: #6f6f6f;
        width: 90%;
    }
    .all-gnres:hover{
        background-color: #000;
        border: none;
    }
</style>
