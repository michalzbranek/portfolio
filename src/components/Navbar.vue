<template>
    <!-- <nav class="text-white">
        <a @click="swapComponent('Home')" href="#">domů</a>
        <a @click="swapComponent('Projects')" href="#">projekty</a>
        <a @click="swapComponent('Gallery')" href="#">galerie</a>
        <a @click="swapComponent('About')" href="#">o mně</a>
        <a @click="swapComponent('Contact')" href="#">kontakt</a>
    </nav> -->
  <nav class="navbar navbar-expand-lg p-4 fw-bold fixed-top">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 fs-5">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">domů</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">projekty</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">galerie</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">o mně</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">kontakt</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="float-start fixed-top d-none d-lg-block" style="height: 100vh; width: 80px;">
      <div class="border-end border-white" style="height: 20%; margin-top: 30%; margin-bottom: 25%;"></div>
      <div class="mb-2">
          <a class="text-white icon" href=""><i class="bi bi-instagram fs-2"></i></a>
      </div>
      <div class="mb-2">
          <a class="text-white icon" href=""><i class="bi bi-facebook fs-2"></i></a>
      </div>
      <div class="mb-2">
          <a class="text-white icon" href=""><i class="bi bi-linkedin fs-2"></i></a>
      </div>
      <div class="mb-2">
          <a class="text-white icon" href=""><i class="bi bi-twitter fs-2"></i></a>
      </div>
      <div class="mb-2">
          <a class="text-white icon" href=""><i class="bi bi-pen-fill fs-2"></i></a>
      </div>
      <div class="mb-2">
          <a class="text-white icon" href=""><i class="bi bi-image-fill fs-2"></i></a>
      </div>
      <div class="border-end border-white" style="height: 23%; margin-top: 35%;"></div>
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

<style>
.nav-item {
  padding-right: 40px;
}

.nav-link {
  color: white;
}

.nav-link:hover {
  color: #BF35BC;
}

i:hover {
    color: #BF35BC;
}

.icon {
    position: relative;
    right: -80%
}
</style>