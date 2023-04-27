<template>
<navbar-component></navbar-component>
<h1>Hello</h1>
<page-main>
    <div class="ps-4 text-center">
        <router-view></router-view>
    </div>
</page-main>
</template>

<script setup>
import NavbarComponent from './components/NavbarComponent.Vue'
</script>

<style>

</style>
