<template>
    <div class="login-container">
        <img src="../images/Spotify_Logo.png" class="spotifyImg" alt="">
        <h1>Log In</h1>
        <a href="http://localhost:8888/login" class="login"> <li>login</li></a>
    </div>    
</template>

<script>

export default {
    name: 'Login',

}
</script>

<style>
    .login-container{
        margin-top: 40px;
    }

    .login-container .spotifyImg{
        height: 100px;
        margin-bottom: 30px;
    }

    .login-container h1{
        margin-bottom: 50px;
        font-size: 60px;
        color: black;
    }

    .login-container .login{
        list-style-type: none;
        font-size: 20px;
    }
</style>