<template>
  <header
    class="inter h-screen bg-cover bg-center bg-no-repeat"
    :style="{ 'background-image': `url('${PROPS.headerBg}')` }"
  >
    <BlurredNavbar :nav-links="NAVS" />
  </header>
</template>

<script setup>
import { ref } from 'vue';
import BlurredNavbar from '@/components/globals/BlurredNavbar.vue';

const PROPS = defineProps({
  headerBg: {
    type: String,
    required: true
  }
});

const NAVS = ref([
  'Latest',
  'World',
  'Politics',
  'Health',
  'Tech',
  'Style',
  'Food',
  'Arts',
  'Sports',
  'Science',
  'Travel'
]);
</script>
