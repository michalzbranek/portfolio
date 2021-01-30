<template>
  <div class="row header m-0" style="padding-left: 15%; border-bottom: 1px solid grey;">
    <div class="row m-0 p-0">
      <div class="col-9 p-4">
        <h1>Vítejte na mých stránkách</h1>
        <p class="lead">Jsem Michal Zbranek, programátor ve firmě Tieto</p>
      </div>
      <div class="col-3" style="border-left: 1px solid grey"></div>
    </div>
  </div>
  <div class="row content m-0" style="padding-left: 15%;">
    <div class="row h-100 m-0 p-0">
      <div class="col-9"></div>
      <div class="col-3 p-0" style="border-left: 1px solid grey;"><Navbar/></div>
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