<template>
    <Navbar/>
    <Home/>
    <div style="left: 20vw; position: relative; width: 70vw;">
      <About/>
    </div>
    <div style="left: 20vw; position: relative; width: 70vw; top: 10vh;">
      <Projects/>
    </div>
    <div style="left: 20vw; position: relative; width: 70vw; top: 20vh;">
      <Contact/>
    </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import Home from './components/Home.vue'
import Projects from './components/Projects.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    About,
    Contact,
    Home,
    Projects,
  },
  data() {
    return {
      currentComponent: Home,
      title: ''
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
  background-color: #121113;
  font-family: 'Poppins', sans-serif;
  color: white;
}
</style>