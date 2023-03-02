<template>
  <Header :header-bg="HEADER_BG"/>
</template>

<script setup>
import Header from "@/page/Home/Partials/Header.vue";
import NewsObj from '../../../news.json';

const HEADER_BG = `https://www.nytimes.com/${NewsObj.multimedia[43].url}`;
console.log(NewsObj.multimedia[43]);
</script>
