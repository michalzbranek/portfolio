<template>
    <nav class="nav flex-column">
        <a @click="swapComponent('Home')" class="link" href="#">domů<div class="navigation"></div></a>
        <a @click="swapComponent('Projects')" class="link" href="#">projekty<div class="navigation"></div></a>
        <a @click="swapComponent('Gallery')" class="link" href="#">galerie<div class="navigation"></div></a>
        <a @click="swapComponent('About')" class="link" href="#">o mně<div class="navigation"></div></a>
        <a @click="swapComponent('Contact')" class="link" href="#">kontakt<div class="navigation"></div></a>
    </nav>
</template>

<script>
export default {
  methods: {
    swapComponent (component) {
      this.$emit('swapComponent', component);
    }
  }
}
</script>

<style>
.link {
    color: #cccccc;
    text-decoration: none;
    padding: 10px 0px 10px 20px;
  	position: relative;
}

.navigation {
	  width: 0px;
    height: 100%;
    transition: 0.4s;
    margin-top: -35px;
	  position: absolute;
    background-color:#cccccc;
    z-index: -1;
    margin-left: -20px;
}

.link:hover .navigation {
    margin-top: -35px;
    width: 100%;
}

.link:hover {
    color: black;
}
</style>