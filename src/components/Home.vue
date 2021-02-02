<template>
    <div class="h-100 float-start fixed-top" style="padding-left: 3%;">
        <div class="border-start border-white" style="margin-left: 1.6%; height: 20%; margin-top: 3%; margin-bottom: 3%;"></div>
        <div class="mb-2">
            <i class="bi bi-instagram fs-2 icon"></i>
        </div>
        <div class="mb-2">
            <i class="bi bi-facebook fs-2 icon"></i>
        </div>
        <div class="mb-2">
            <i class="bi bi-linkedin fs-2 icon"></i>
        </div>
        <div class="mb-2">
            <i class="bi bi-twitter fs-2 icon"></i>
        </div>
        <div class="mb-2">
            <i class="bi bi-pen-fill fs-2 icon"></i>
        </div>
        <div class="mb-2">
            <i class="bi bi-image-fill fs-2 icon"></i>
        </div>
        <div class="border-start border-white" style="margin-left: 1.6%; height: 25%; margin-top: 3%;"></div>
    </div>
    <div style="padding-left: 20%; padding-top: 15%;">
        <h1 class="m-0 p-0 fw-bold" style="font-size: 6vw;">{{ name }}</h1>
        <h1 class="m-0 p-0 fw-bold" style="font-size: 3vw;">{{ intro }}</h1>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: 'Michal Zbranek',
            intro: 'Programátor'
        }
    }
}
</script>

<style>
.icon {
    position: relative;
    right: -0.8%;
}

i:hover {
    color: #BF35BC;
}
</style>