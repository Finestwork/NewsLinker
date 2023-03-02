<template>
  <Header :header-bg="HEADER_BG" :headline="HEADLINE" :print-headline="PRINT_HEADLINE" />
</template>

<script setup>
import Header from '@/page/Home/Partials/Header.vue';
import NewsObj from '../../../news.json';

const HEADER_BG = `https://www.nytimes.com/${NewsObj.multimedia[43].url}`;
const HEADLINE = NewsObj.headline.main;
const PRINT_HEADLINE = NewsObj.headline.print_headline;
</script>
