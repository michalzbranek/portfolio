<template>
    <nav class="nav flex-column">
        <a @click="swapComponent('Home')" class="link" href="#">Domů<div class="navigation"></div></a>
        <a @click="swapComponent('Projects')" class="link" href="#">Projekty<div class="navigation"></div></a>
        <a @click="swapComponent('Gallery')" class="link" href="#">Galerie<div class="navigation"></div></a>
        <a @click="swapComponent('About')" class="link" href="#">O mně<div class="navigation"></div></a>
        <a @click="swapComponent('Contact')" class="link" href="#">Kontakt<div class="navigation"></div></a>
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
    color: #ffffff;
    text-decoration: none;
    padding: 10px 0px 10px 20px;
  	position: relative;
}

.navigation {
	width: 0px;
    height: 100%;
    transition: 0.4s;
    margin-top: -45px;
	position: absolute;
    background-color:white;
    z-index: -1;
    margin-left: -20px;
}

.link:hover .navigation {
    margin-top: -45px;
    width: 100%;
}

.link:hover {
    color: #212529;
}
</style>