<template>
  <nav class="fixed top-0 left-0 w-full bg-black/50 py-4 font-sans backdrop-blur-2xl">
    <div class="mx-auto flex flex-col justify-between xl:flex-row">
      <Splide class="order-2 font-semibold text-white xl:order-1" :options="splideOptions">
        <SplideSlide v-for="nav in PROPS.navLinks" :key="nav">
          <router-link class="px-4" :to="{ name: 'Category', params: { id: nav.toLowerCase() } }">{{
            nav
          }}</router-link>
        </SplideSlide>
      </Splide>

      <div
        class="order-1 ml-6 mr-6 mb-6 flex items-center xl:order-2 xl:ml-4 xl:mb-0"
        ref="searchBox"
      >
        <span class="mr-3 flex h-4 w-4">
          <MagnifyingGlass class="flex h-full w-full fill-white" />
        </span>
        <OnClickOutside class="w-full" @trigger="hideSearchBox">
          <input
            ref="input"
            class="w-full bg-transparent font-medium text-white outline-none placeholder:text-white/80"
            type="text"
            placeholder="What's happening?"
            @keyup="onKeyUpShowSearchBox"
            @focus="showSearchBox"
            v-model="searchTerm"
          />
        </OnClickOutside>
      </div>
    </div>
    <Teleport to="body">
      <KeepAlive>
        <FloatingSearchBox
          ref="floatingSearchBox"
          :linked-element="searchBox"
          :is-search-box-loading="isSearchBoxLoading"
          :error-txt="searchErrorTxt"
          :search-results="searchResults"
          v-if="canShowSearchBox"
        />
      </KeepAlive>
    </Teleport>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import MagnifyingGlass from '@/components/icons/MagnifyingGlass.vue';
import FloatingSearchBox from '@/components/globals/FloatingSearchBox.vue';
import { OnClickOutside } from '@vueuse/components';
import TimesAPI from '@/helpers/APIs/TimesAPI';
import NewsFormatter from '@/helpers/Formatters/NewsFormatter';

const PROPS = defineProps({
  navLinks: {
    type: Array,
    required: true
  }
});
const splideOptions = ref({
  arrows: false,
  live: false,
  pagination: false,
  mediaQuery: 'min',
  autoWidth: true,
  breakpoints: {
    900: {
      drag: false
    }
  }
});
const floatingSearchBox = ref(null);
const searchBox = ref(null);
const searchTerm = ref('');
const searchErrorTxt = ref('');
const searchResults = ref([]);
const isSearchBoxLoading = ref(false);
const canShowSearchBox = ref(false);
let oldSearchTxt = '';
let rateLimiterID = null;

const resetSearchBox = () => {
  canShowSearchBox.value = false;
  isSearchBoxLoading.value = false;
  searchErrorTxt.value = '';
  searchResults.value = [];
};
const showSearchBox = () => {
  canShowSearchBox.value = searchTerm.value.trim() !== '';
};
const onKeyUpShowSearchBox = () => {
  const SEARCH_TERM = searchTerm.value.trim();

  if (oldSearchTxt === SEARCH_TERM) return;

  clearTimeout(rateLimiterID);

  if (SEARCH_TERM === '') {
    oldSearchTxt = '';
    resetSearchBox();
    return;
  }

  isSearchBoxLoading.value = true;
  canShowSearchBox.value = true;
  searchResults.value = [];
  oldSearchTxt = SEARCH_TERM;

  rateLimiterID = setTimeout(() => {
    TimesAPI.getArticles({ q: SEARCH_TERM })
      .then((res) => {
        // If user decides to clear the search but the request has already been sent to the server
        if (searchTerm.value === '') {
          resetSearchBox();
          return;
        }

        const DOCS = res.data.response.docs;
        searchResults.value = DOCS.map((news) => NewsFormatter.format(news));
        isSearchBoxLoading.value = false;
      })
      .catch((err) => {
        searchResults.value = [];
        isSearchBoxLoading.value = false;

        if (err.response.status === 429) {
          searchErrorTxt.value = 'Too many requests. The API only allows 10 requests per minute.';
        } else {
          searchErrorTxt.value = 'Unfortunately, you are unable to search, please try again later.';
        }
      });
  }, 450);
};
const hideSearchBox = ({ target }) => {
  if (floatingSearchBox.value === null) {
    canShowSearchBox.value = false;
    return;
  }
  canShowSearchBox.value = floatingSearchBox.value.$el.contains(target);
};
</script>

<style scoped>
:deep(.splide__list) {
  display: flex;
  justify-content: space-between;
}

:deep(.splide__splide) {
  flex-shrink: 0;
}
</style>
