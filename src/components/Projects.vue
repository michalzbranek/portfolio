<template>
  <h1 id="portfolio" class="fw-bold mb-5" style="">projekty</h1>
<!--   <div class="d-none d-sm-block" style="position: relative;">
      
      <div class="row">
        
        <div class="col p-0 me-3">
            <img id="portfolio_id" src="../assets/portfolio.png">
            <p id="portfolio_text" style="position: absolute; width: 20vw; top: 5vw; left: 5vw;">Shromáždění mé práce + koníčků. Naučení se frameworku VUE.</p>
        </div>

        <div class="col p-0 m-0">

            <div class="row mb-3">
              <img id="blog_id" src="../assets/blog.png">
              <p id="blog_text" style="position: absolute; width: 30vw; top: 0vw; left: 40vw;">Můj vlastní blog. Spolupráce s databází. Kompletní admin systém.</p>
            </div>

            <div class="row">
              <img id="malenovice_id" src="../assets/fcmalenovice.png">
              <p id="malenovice_text" style="position: absolute; width: 30vw; top: 20vw; left: 40vw;">První projekt. Snaha naučit se základy vývoje webových stránek.</p>
            </div>

        </div>
      
      </div>

  </div>

  <div class="d-sm-none" style="position: relative;">
    
    <img id="portfolio_id" src="../assets/portfolio.png">
    <p id="portfolio_text" style="position: absolute; width: 20vw; top: 5vw; left: 5vw;">Shromáždění mé práce + koníčků. Naučení se frameworku VUE.</p>
        
    <hr style="opacity: 1;">

    <img id="blog_id" src="../assets/blog.png">
    <p id="blog_text" style="position: absolute; width: 30vw; top: 80vw; left: 10vw;">Můj vlastní blog. Spolupráce s databází. Kompletní admin systém.</p>

    <hr style="opacity: 1;">

    <img id="malenovice_id" src="../assets/fcmalenovice.png">
    <p id="malenovice_text" style="position: absolute; width: 30vw; top: 110vw; left: 10vw;">První projekt. Snaha naučit se základy vývoje webových stránek.</p>

  </div> -->

<div class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../assets/blog.png" class="d-block w-100">
    </div>
    <div class="carousel-item">
      <img src="../assets/fcmalenovice.png" class="d-block w-100">
    </div>
  </div>
</div>

</template>

<style scoped>
.carousel {
    height: 32vw;
}

.carousel-inner {
    height: 100%;
}            

.carousel-item {
    width: 100%;
    height: 100%;                
}

.carousel-item img {
    object-fit: cover;
/*
    object-fit: fill;
    object-fit: none;
    object-fit: contain;
    object-fit: scale-down;
*/
}
/* img:hover {
  -webkit-filter: brightness(25%);
  filter: brightness(25%);
}

#malenovice_text {
  opacity: 0;
}

#malenovice_id:hover ~ #malenovice_text {
  opacity: 1;
}

#blog_text {
  opacity: 0;
}

#blog_id:hover ~ #blog_text {
  opacity: 1;
}

#portfolio_text {
  opacity: 0;
}

#portfolio_id:hover ~ #portfolio_text {
  opacity: 1;
}

@media (max-width: 768px) {  
  p {
      font-size: 10px !important;
  }
} */

h1 {
  font-size: 8vw;
}
</style>