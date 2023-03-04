<template>
  <div
    ref="searchBox"
    class="fixed top-0 left-0 max-h-96 overflow-y-scroll bg-white p-4"
    style="z-index: 999"
  >
    <div v-if="shouldShowLoader">
      <ContentLoader
        class="mb-3 block h-full w-full last:mb-0"
        v-for="n in 6"
        :key="n"
        :speed="1"
        :width="400"
        :height="10"
        :viewBox="'0 0 400 10'"
        :primaryColor="'#d3d3d3'"
        :secondaryColor="'#ecebeb'"
      >
        <rect x="0" y="0" rx="1.5" ry="1.5" width="400" height="10" />
      </ContentLoader>
    </div>
    <ul v-if="shouldShowSearchResults">
      <li class="mb-4 flex items-start last:mb-0" v-for="result in searchResults" :key="result">
        <span class="mr-4 flex h-14 w-20 shrink-0 overflow-hidden rounded-lg">
          <img class="w-full object-cover" :src="result.img" alt="News Image" />
        </span>
        <a
          class="font-serif text-base font-semibold text-slate-900 hover:text-indigo-600 hover:underline"
          :href="result.src"
          target="_blank"
          >{{ result.headline }}</a
        >
      </li>
    </ul>
    <p class="text-center text-sm font-semibold text-rose-500" v-if="shouldShowError">
      {{ errorTxt }}
    </p>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick, computed } from 'vue';
import { ContentLoader } from 'vue-content-loader';

const PROPS = defineProps({
  linkedElement: {
    required: true
  },
  searchResults: {
    type: Array,
    required: true
  },
  isSearchBoxLoading: {
    type: Boolean,
    required: true
  },
  errorTxt: {
    type: String,
    required: true
  }
});
const searchBox = ref(null);

const shouldShowLoader = computed(() => {
  return PROPS.isSearchBoxLoading && PROPS.searchResults.length === 0 && PROPS.errorTxt === '';
});
const shouldShowSearchResults = computed(() => {
  return !PROPS.isSearchBoxLoading && PROPS.searchResults.length !== 0 && PROPS.errorTxt === '';
});
const shouldShowError = computed(() => {
  return !PROPS.isSearchBoxLoading && PROPS.searchResults.length === 0 && PROPS.errorTxt !== '';
});

const adjustSearchBox = () => {
  const LINKED_ELEMENT = PROPS.linkedElement;
  const RECT = LINKED_ELEMENT.getBoundingClientRect();
  Object.assign(searchBox.value.style, {
    top: `${RECT.height + RECT.top + RECT.y}px`,
    left: `${RECT.left}px`,
    width: `${RECT.width}px`
  });
};
onMounted(() => {
  nextTick(() => {
    adjustSearchBox();
    window.addEventListener('resize', adjustSearchBox);
  });
});
onUnmounted(() => {
  window.removeEventListener('resize', adjustSearchBox);
});
</script>
