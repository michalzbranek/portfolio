<template>
    <nav class="nav flex-column">
        <a class="link" href="#">Domů<div class="bla"></div></a>
        <a class="link" href="#">Projekty<div class="bla"></div></a>
        <a class="link" href="#">Galerie<div class="bla"></div></a>
        <a class="link" href="#">O mně<div class="bla"></div></a>
        <a class="link" href="#">Kontakt<div class="bla"></div></a>
    </nav>
</template>

<style>
.link {
    color: #ffffff;
    text-decoration: none;
    padding: 10px 0px 10px 20px;
  	position: relative;
}

.bla {
	width: 0px;
    height: 100%;
    transition: 0.4s;
    margin-top: -45px;
	position: absolute;
    background-color:white;
    z-index: -1;
    margin-left: -20px;
}

.link:hover .bla {
    margin-top: -45px;
    width: 100%;
}

.link:hover {
    color: #212529;
}
</style>