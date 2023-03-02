<template>
  <Header
    :header-bg="HEADER_BG"
    :headline="HEADLINE"
    :print-headline="PRINT_HEADLINE"
    :features="FEATURED_CARD_OBJ"
  />
</template>

<script setup>
import Header from '@/page/Home/Partials/Header.vue';
import NewsObj from '../../../news.json';

const HEADER_BG = `https://www.nytimes.com/${NewsObj.multimedia[43].url}`;
const HEADLINE = NewsObj.headline.main;
const PRINT_HEADLINE = NewsObj.headline.print_headline;

// Features
const FEATURED_CARD_OBJ = [
  {
    imgSrc: HEADER_BG,
    title: 'For a President Who Spends His Days Confronting Russia and China, a Domestic Focus',
    subSectionName: 'Politics'
  },
  {
    imgSrc: HEADER_BG,
    title: 'For a President Who Spends His Days Confronting Russia and China, a Domestic Focus',
    subSectionName: 'Politics'
  },
  {
    imgSrc: HEADER_BG,
    title: 'For a President Who Spends His Days Confronting Russia and China, a Domestic Focus',
    subSectionName: 'Politics'
  },
  {
    imgSrc: HEADER_BG,
    title: 'For a President Who Spends His Days Confronting Russia and China, a Domestic Focus',
    subSectionName: 'Politics'
  },
  {
    imgSrc: HEADER_BG,
    title: 'For a President Who Spends His Days Confronting Russia and China, a Domestic Focus',
    subSectionName: 'Politics'
  },
  {
    imgSrc: HEADER_BG,
    title: 'For a President Who Spends His Days Confronting Russia and China, a Domestic Focus',
    subSectionName: 'Politics'
  },
  {
    imgSrc: HEADER_BG,
    title: 'For a President Who Spends His Days Confronting Russia and China, a Domestic Focus',
    subSectionName: 'Politics'
  },
  {
    imgSrc: HEADER_BG,
    title: 'For a President Who Spends His Days Confronting Russia and China, a Domestic Focus',
    subSectionName: 'Politics'
  },
  {
    imgSrc: HEADER_BG,
    title: 'For a President Who Spends His Days Confronting Russia and China, a Domestic Focus',
    subSectionName: 'Politics'
  },
  {
    imgSrc: HEADER_BG,
    title: 'For a President Who Spends His Days Confronting Russia and China, a Domestic Focus',
    subSectionName: 'Politics'
  }
];
</script>
