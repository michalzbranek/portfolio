<template>
  <h1 id="portfolio" class="fw-bold">projekty</h1>
  <div style="top: 13vw; position: absolute;">
    <div class="container">
      
      <div class="row">
        
        <div class="col p-0 me-3">
            <img id="portfolio_id" src="../assets/portfolio.png" class="img-fluid">
            <p id="portfolio_text" style="position: absolute; width: 30%; top: 25%; left: 10%;">Shromáždění mé práce + koníčků. Naučení se frameworku VUE.</p>
        </div>

        <div class="col p-0 m-0">

            <div class="row mb-3">
              <img id="blog_id" src="../assets/blog.png" class="img-fluid">
              <p id="blog_text" style="position: absolute; width: 30%; top: 10%; left: 60%;">Můj vlastní blog. Naučil jsem se spolupracovat s databází. Kompletní admin systém.</p>
            </div>

            <div class="row">
              <img id="malenovice_id" src="../assets/fcmalenovice.png" class="img-fluid">
              <p id="malenovice_text" style="position: absolute; width: 30%; top: 60%; left: 60%;">První projekt. Snaha naučit se základy vývoje webových stránek.</p>
            </div>

        </div>
      
      </div>

    </div>
  </div>
</template>

<style scoped>
img {
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  -ms-transition: all 0.5s ease;
  transition: all 0.5s ease;
  border-radius: 4%;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

img:hover {
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
</style>