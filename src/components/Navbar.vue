<template>
    <!-- <nav class="text-white">
        <a @click="swapComponent('Home')" href="#">domů</a>
        <a @click="swapComponent('Projects')" href="#">projekty</a>
        <a @click="swapComponent('Gallery')" href="#">galerie</a>
        <a @click="swapComponent('About')" href="#">o mně</a>
        <a @click="swapComponent('Contact')" href="#">kontakt</a>
    </nav> -->
  <nav class="navbar navbar-expand-lg p-4 fw-bold fixed-top navbar-dark">
    <div class="container-fluid">
<!--       <a class="navbar-brand ps-lg-4" href="#">M.Zbranek</a>
 -->      <button class="border-0 navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-grip-lines fa-2x text-white"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 fs-2" style="text-align: right;">
          <li class="nav-item px-lg-4">
            <a class="nav-link" href="#">domů</a>
          </li>
          <li class="nav-item px-lg-4">
            <a class="nav-link" href="#about">o mně</a>
          </li>
          <li class="nav-item px-lg-4">
            <a class="nav-link" href="#portfolio">projekty</a>
          </li>
          <li class="nav-item px-lg-4">
            <a class="nav-link" href="#footer">kontakt</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="float-start fixed-top d-none d-lg-block" style="height: 100vh; width: 80px;">
      <div class="border-end border-white" style="height: 20vh; position: absolute; top: 12.5%; left: 10.5vh;"></div>
      <div class="iconbox">
          <div class="mb-2">
              <a class="text-white" href="https://www.instagram.com/michal.zbranek/" target="_blank"><i class="bi bi-instagram icon"></i></a>
          </div>
          <div class="mb-2">
              <a class="text-white" href="https://www.facebook.com/BliXer/" target="_blank"><i class="bi bi-facebook icon"></i></a>
          </div>
          <div class="mb-2">
              <a class="text-white" href="https://www.linkedin.com/in/michal-zbranek-8a5421124/" target="_blank"><i class="bi bi-linkedin icon"></i></a>
          </div>
          <div class="mb-2">
              <a class="text-white" href="https://twitter.com/BliXer27" target="_blank"><i class="bi bi-twitter icon"></i></a>
          </div>
          <div class="mb-2">
              <a class="text-white" href="https://michalzbranekblog.herokuapp.com/" target="_blank"><i class="bi bi-pen-fill icon"></i></a>
          </div>
          <div class="mb-2">
              <a class="text-white" href="https://photos.app.goo.gl/FhVVwwoVSkEYyYtU6" target="_blank"><i class="bi bi-image-fill icon"></i></a>
          </div>
      </div>
      <div class="border-end border-white" style="height: 25%; bottom: 5%; position: absolute; left: 10.5vh;"></div>
  </div>

  <div class="iconbox2 position-absolute d-lg-none">
          <div class="mb-2">
              <a class="text-white" href="https://www.instagram.com/michal.zbranek/" target="_blank"><i class="bi bi-instagram icon"></i></a>
          </div>
          <div class="mb-2">
              <a class="text-white" href="https://www.facebook.com/BliXer/" target="_blank"><i class="bi bi-facebook icon"></i></a>
          </div>
          <div class="mb-2">
              <a class="text-white" href="https://www.linkedin.com/in/michal-zbranek-8a5421124/" target="_blank"><i class="bi bi-linkedin icon"></i></a>
          </div>
          <div class="mb-2">
              <a class="text-white" href="https://twitter.com/BliXer27" target="_blank"><i class="bi bi-twitter icon"></i></a>
          </div>
          <div class="mb-2">
              <a class="text-white" href="https://michalzbranekblog.herokuapp.com/" target="_blank"><i class="bi bi-pen-fill icon"></i></a>
          </div>
          <div class="mb-2">
              <a class="text-white" href="https://photos.app.goo.gl/FhVVwwoVSkEYyYtU6" target="_blank"><i class="bi bi-image-fill icon"></i></a>
          </div>
  </div>

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

<style scoped>
.navbar.navbar-dark .nav-link:hover {
    color: #BF35BC;
}

.navbar.navbar-dark .nav-link {
    color: white;
}

i:hover {
    color: #BF35BC;
}

.iconbox {
    position: absolute;
    top: 35%;
    left: 9vh;
}

.iconbox2 {
    bottom: 5%;
    right: 50px;
}

.icon {
    font-size: 3vh;
}
</style>