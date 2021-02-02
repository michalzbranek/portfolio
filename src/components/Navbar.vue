<template>
    <!-- <nav class="text-white">
        <a @click="swapComponent('Home')" href="#">domů</a>
        <a @click="swapComponent('Projects')" href="#">projekty</a>
        <a @click="swapComponent('Gallery')" href="#">galerie</a>
        <a @click="swapComponent('About')" href="#">o mně</a>
        <a @click="swapComponent('Contact')" href="#">kontakt</a>
    </nav> -->

<nav class="navbar navbar-expand-lg p-4 fixed-top fw-bold">
  <div class="container-fluid">
    <!-- <a class="navbar-brand text-white" href="#">michal zbranek</a> -->
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
</style>