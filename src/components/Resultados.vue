<template>
    <div class="container-resultados">
        {{resultado}}
    </div>
</template>

<script>
export default {
    name: 'Resultados',
    props: {
        resultado:null,
    },
    methods:{
        search(resultado){
            fetch(`https://api.spotify.com/v1/search?q=${resultado}&type=artist`,{
                method: 'get',
                headers:{
                    'Authorization': 'Bearer BQDBPO-6VbfdoveGPHw58rJTOpwfk5YE2S4QOSMZxhLxuvePzKtULQrPjem5tgEBzaus_OuRHZDOdZmh5KZI3syNO4KA3K9VnZriWBVPjo4ZCthJmQiO7K-c_zJcOX3a3xg_Ia-O6gdqirgQKHT4__M6MTLgGeFivaXhDOPixrydjqJW6dlAfKU'
                }
            })
            .then(response => response.json())
            .then(json => console.log(json))
            .catch(err => console.log(err))
        },
    }

}
</script>