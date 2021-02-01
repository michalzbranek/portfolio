<template>
<div class="hero-box h-100">
    <div class="hero-image">
        <div class="hero-text py-3 ps-5">
            <h1></h1>
            <p></p>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            greeting: '',
            intro: ''
        }
    }
}
</script>

<style>
.hero-box {
  overflow: hidden;
}

.hero-image {
  background-image: url("../assets/home.jpg");
  filter: grayscale(1);
  height: 100%;
  background-position: bottom;
  background-repeat: no-repeat;
  position: relative;
  background-size: cover;
  transition: transform .2s;
}

.hero-image:hover {
  transform: scale(1.2);
}

.hero-text {
  text-align: left;
  position: absolute; 
  top: 0;
  color: white;
  background: rgba(0, 0, 0, 0.6);
  width: 35%;
}
</style>