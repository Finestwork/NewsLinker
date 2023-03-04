<template>
  <section class="flex h-screen flex-col items-center justify-center">
    <span class="mb-3 flex w-4/5 max-w-sm md:w-96">
      <img class="w-full" src="/assets/images/fatal-error.svg" alt="Fatal Error Image" />
    </span>
    <h2 class="text-2xl font-bold text-red-500 sm:text-3xl">Too Many Requests</h2>

    <p class="mt-2 w-10/12 text-justify text-sm font-medium text-slate-700 md:w-7/12">
      We're sorry, but it appears that you have exceeded your rate limit quota. We are using
      <span class="text-red-500">New York Times News API</span> and per minute you have 10 requests
      that's why our system have detected that you have made too many requests within a given
      timeframe. As a result, we are unable to process your request at this time. Please try again
      later. Thank you for your understanding.
    </p>

    <router-link
      class="my-2 mt-8 flex w-11/12 max-w-xs justify-center rounded-lg bg-red-500 px-4 py-3.5 text-sm font-semibold text-white hover:bg-red-600"
      :to="{ name: 'Home' }"
      >Go back home</router-link
    >
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>
