<template>
  <h1 id="footer" class="fw-bold mb-5" style="">kontakt</h1>
    <footer class="pb-4 mt-5">
        <p>
            <i class="bi bi-phone-fill" style="font-size: 1.5rem;"></i>
            +420 731 840 268
        </p>
        <p id="mail">
            <i class="bi bi-envelope-fill" style="font-size: 1.5rem;"></i>
            &nbsp;
            <a href="mailto:michal.zbranek.1@gmail.com">
                michal.zbranek.1@gmail.com
            </a>
        </p>
        <p>© 2022 All rights reserved</p>
    </footer>
</template>

<style scoped>
a {
    color: white;
    text-decoration: none;
}

a:hover {
    color: #BF35BC;
}

.bi {
    vertical-align: -0.175em;
}

h1 {
  font-size: 8vw;
}

@media (max-width: 576px) {
  #mail {
      font-size: 78%;
  }
}
</style>