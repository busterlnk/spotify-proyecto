<template>
    <div class="container-resultados">
        {{resultado}}
    </div>
</template>

<script>
export default {
    name: 'Resultados',
    props: [
        'accessToken'
    ],
    methods:{
        search(resultado){
            fetch('https://api.spotify.com/v1/search?q='+this.resultado+'&type=artist',{
                method: 'get',
                headers:{
                    'Authorization': 'Bearer ' +this.accessToken,
                }
            })
            .then(response => response.json())
            .then(json => console.log(json))
            .catch(err => console.log(err))
        },
    }

}
</script>