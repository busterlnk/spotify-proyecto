<template>
<div class="container">
  <Header />
  <Body />
  <Footer />

</div>
</template>

<script>
import Header from './components/Header';
import Body from './components/Body';


export default {
  name: 'App',
  components: {
    Header,
    Body,
  }
}
</script>

<style>
*{
  margin: 0px;
}
#app {
  margin: 0px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  box-sizing: border-box;
}
</style>
