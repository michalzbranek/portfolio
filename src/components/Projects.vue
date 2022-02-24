<template>
  <h1 id="portfolio" class="fw-bold mb-5" style="">projekty</h1>
  <div id="carouselExampleDark" data-bs-interval="false" class="carousel slide carousel-fade" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <a href="https://michalzbranekblog.herokuapp.com/" target="_blank">
          <img src="../assets/copy1.png" class="image">
        </a>
        <div class="text">Tento blog jsem si vytvořil pro mé psaní. Ukazuje použití Heroku platformy, Javascript, Node.js a používá MongoDB databázi.</div>
      </div>
      <div class="carousel-item">
        <a href="https://michalzbranek.github.io/fcmalenovice/" target="_blank">
          <img src="../assets/copy3.png" class="image">
        </a>
        <div class="text">Tento web jsem vytvořil pro fotbalový klub, ve kterém jsem dříve hrával. Web používá pouze HTML a CSS a slouží tak pro zachycení základních znalostí vývoje webu.</div>
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

.text {
  margin-top: 3%;
  width: 85%;
}

.image {
  width: 85%;
}
</style>