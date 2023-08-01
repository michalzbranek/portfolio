<template>
    <img id="about" src="../assets/cropped.jpg" style="width: 25vw; position: relative;">
    <img src="../assets/cropped_snow.jpg" style="top: 7vw; width: 25vw; left: 20vw; position: relative;">
    <img src="../assets/cropped_sea.jpg" style="width: 15vw; right: 17vw; top: 8vw; position: relative;">
    <h1 class="fw-bold" style="position: relative;">o mně</h1>
    <p style="width: 80vw; position: relative;">
      Ahoj! Jmenuju se Michal Zbranek.
      Portfolio jsem si vytvořil z toho důvodu, abych se trochu seznámil s frameworkem VUE a měl mé různé koníčky pohromadě.
      Mezi odkazy například najdete i mé kreslení a vlastní blog.
      Vystudoval jsem Fakultu Informatiky v Brně a nyní bydlím ve Zlíně s přítelkyní.
      Pracuju v Tietu na pozici Testera/Developera a nyní se k tomu snažím naučit tvorbu webových stránek.
      Do toho miluji sport a filmy/seriály.
    </p>    
</template>

<style scoped>
img {
  border-radius: 3%;
}

h1 {
  font-size: 5vw;
}

p {
  font-size: 1vw;
}

@media (min-width: 992px) {  
  p {
      width: 40vw !important;
  }
}
</style>