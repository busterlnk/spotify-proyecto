<template>
    <div class="login-container">
        <img src="../images/Spotify_Logo.png" class="spotifyImg" alt="">
        <a href="http://localhost:8888/login" class="login"> <li>Login</li></a>
        <p>Por favor leer el txt Importante ubicado en la raiz</p>
    </div>    
</template>

<script>

export default {
    name: 'Login',

}
</script>

<style>
    .login-container{
        margin-top: 100px;
    }

    .login-container .spotifyImg{
        height: 100px;
        margin-bottom: 30px;
    }

    .login-container .login{
        list-style-type: none;
        font-size: 60px;
        text-decoration: none;
        font-weight: 600;
        color: #000;
    }



    .login-container .login:hover{
        text-decoration: underline;
    }

    .login-container p{
        margin-top: 40px;
    }
</style>