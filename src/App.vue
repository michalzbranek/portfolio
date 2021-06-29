<template>
    <Navbar/>
    <Home/>
    <div class="content">
      <About/>
    </div>
    <div class="content" style="top: 10vh;">
      <Projects/>
    </div>
    <div class="content" style="top: 20vh;">
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

@media (max-width: 992px) {  
  .content {
      left: 10vw !important;
      width: 80vw !important;
  }
  p {
    width: 100% !important;
  }
}

.content {
  position: relative;
  left: 20vw;
  width: 70vw;
}
</style>