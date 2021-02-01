<template>
    <div class="hero-image">
        <div class="hero-text py-4 ps-5">
            <h1>{{ greeting }}</h1>
            <p>{{ intro }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            greeting: 'Vítejte na mých stránkách',
            intro: 'Jsem Michal Zbranek, programátor ve firmě Tieto'
        }
    }
}
</script>

<style>
/*img {
    width: 60%;
    height: auto;
    filter: grayscale(1);
}*/

.hero-image {
  /* Use "linear-gradient" to add a darken background effect to the image (photographer.jpg). This will make the text easier to read */
  background-image: url("../assets/home.jpg");

  filter: grayscale(1);
  /*filter: blur(2px);*/

  /* Set a specific height */
  height: 85%;

  /* Position and center the image to scale nicely on all screens */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  transition: transform .2s; /* Animation */
}

.hero-image:hover {
  transform: scale(2.0); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}

/* Place text in the middle of the image */
.hero-text {
  text-align: left;
  position: absolute;
  bottom: 0;
  color: white;
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
}
</style>