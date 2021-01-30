<template>
  <div class="row header" style="border-bottom: 1px solid white;">
    <h1>Vítejte na mých stránkách</h1>
    <p class="lead">Jsem Michal Zbranek, programátor ve firmě Tieto</p>
  </div>
  <div class="row content">
    <div class="row h-100 m-0 p-0">
      <div class="col-9"></div>
      <div class="col-3" style="border-left: 1px solid white;"><Navbar/></div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
#app {
  padding-left: 15%;
  padding-top: 3%;
}

html, body {
  height: 100%;
  margin: 0;
  font-size: 1.2rem;
}

.box {
  display: flex;
  flex-flow: column;
  height: 100%;
}

.box .row.header {
  flex: 0 1 auto;
  margin-right: 0;
}

.box .row.content {
  display: flex;
  flex-flow: column;
  flex: 1 1 auto;
  overflow-y: auto;
  margin-right: 0;
}
</style>