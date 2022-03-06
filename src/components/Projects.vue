<template>
  <h1 id="portfolio" class="fw-bold mb-5" style="">projekty</h1>
  <div id="carouselExampleDark" data-bs-interval="false" class="carousel carousel-dark slide carousel-fade" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <a href="https://michalzbranekblog.herokuapp.com/" target="_blank">
          <img src="../assets/copy1.png" class="d-block w-100">
        </a>
        <div class="carousel-caption d-none d-md-block">
          <h4 class="rounded-3">Tento blog jsem si vytvořil pro mé psaní. Ukazuje použití Heroku platformy, Javascript, Node.js a používá MongoDB databázi.</h4>
        </div>
      </div>
      <div class="carousel-item rounded">
        <a href="https://michalzbranek.github.io/fcmalenovice/" target="_blank">
          <img src="../assets/copy3.png" class="d-block w-100">
        </a>
        <div class="carousel-caption d-none d-md-block">
          <h4 class="rounded-3">Tento web jsem vytvořil pro fotbalový klub. Web používá pouze HTML a CSS a slouží tak pro zachycení základních znalostí vývoje webu.</h4>
        </div>
      </div>
      <div class="carousel-item">
        <a href="https://michalzbranek.github.io/portfolio/" target="_blank">
          <img src="../assets/main.png" class="d-block w-100">
        </a>
        <div class="carousel-caption d-none d-md-block">
          <h4 class="rounded-3">Webová stránka, na které zrovna jste. K předchozím znalostem je přidána i schopnost využití Javascriptového Frameworku Vue.</h4>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

  
</template>

<style scoped>
h1 {
  font-size: 8vw;
}

h4 {
  background-color: black;
  color: white;
}
</style>