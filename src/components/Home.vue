<template>
    <div id="landing">
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
#landing {
    height: 100vh;
    padding-left: 20%;
    padding-top: 15%;
}
</style>