<template>
  <div class="row header m-0" style="padding-left: 15%; border-bottom: 1px solid #cccccc;">
    <div class="row m-0 p-0">
      <div class="col-9 py-4 ps-0">
        <h1 class="m-0">{{ title }}</h1>
      </div>
      <div class="col-3" style="border-left: 1px solid #cccccc"></div>
    </div>
  </div>
  <div class="row content m-0" style="padding-left: 15%;">
    <div class="row h-100 m-0 p-0">
      <div class="col-9 m-0 pe-0 py-0 ps-0">
          <component :is="currentComponent"></component>
      </div>
      <div class="col-3 p-0" style="border-left: 1px solid #cccccc"><Navbar @swapComponent="swapComponent" /></div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import Home from './components/Home.vue'
import Gallery from './components/Gallery.vue'
import Projects from './components/Projects.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    About,
    Contact,
    Home,
    Projects,
    Gallery
  },
  data() {
    return {
      currentComponent: Home,
      title: 'michal zbranek'
    }
  },
  methods: {
    swapComponent(component)  {
      this.currentComponent = component;
    }
  }
}
</script>

<style>
html, body {
  height: 100%;
  margin: 0;
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
  overflow: hidden;
  margin-right: 0;
}
</style>