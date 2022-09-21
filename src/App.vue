<template>
  <v-app id="app">
    <v-main>
      <Navbar/>
      <router-view/>
      
    </v-main>
  </v-app>
</template>

<script setup>
  import Navbar from '@/components/NavBar.vue';
</script>

<style>
  #app {
    background: url('../img/bg.jpg') no-repeat center center fixed !important;
    background-size: cover;
  }
</style>