<template>
  <footer class="flex flex-wrap pb-10">
    <section class="mb-10 w-full lg:mb-0 lg:w-2/6">
      <div class="flex items-center">
        <span class="mr-2 flex w-7">
          <img class="w-full" src="/assets/images/logo.svg" alt="News Linker Logo" />
        </span>
        <h2 class="text-xl font-black text-indigo-500">NewsLinker</h2>
      </div>
      <p class="text-sm font-medium text-slate-600">
        This is a news aggregator that redirects users to the original articles, providing a
        convenient and centralized way to discover and read the latest news.
      </p>
    </section>
    <section
      class="mb-10 flex w-full flex-col font-bold sm:mb-0 sm:w-4/12 lg:w-2/6 lg:w-2/6 lg:items-center"
    >
      <div>
        <h2 class="mb-4 text-xl text-indigo-900">Follow Me On</h2>
        <a
          class="group mb-3 flex items-center last:mb-0"
          :href="link.href"
          v-for="link in SOCIALS"
          :key="link"
          target="_blank"
        >
          <span class="mr-1 w-6">
            <component
              class="block w-full fill-indigo-600 group-hover:fill-indigo-500"
              :is="link.component"
            />
          </span>
          <span class="text-base font-bold text-indigo-900 group-hover:text-indigo-500">{{
            link.text
          }}</span>
        </a>
      </div>
    </section>
    <section class="flex flex-col font-bold sm:w-4/12 lg:w-2/6 lg:w-2/6 lg:items-center">
      <div>
        <h2 class="mb-4 text-xl text-indigo-900">Special Thanks</h2>
        <a
          class="group mb-3 flex items-center last:mb-0"
          :href="link.href"
          v-for="link in THIRD_PARTY_TOOLS"
          :key="link"
          target="_blank"
        >
          <span class="text-base font-bold text-indigo-900 group-hover:text-indigo-500"
            >• {{ link.text }}</span
          >
        </a>
      </div>
    </section>
  </footer>
</template>

<script setup>
import Discord from '@/components/icons/Discord.vue';
import Github from '@/components/icons/Github.vue';
import LinkedIn from '@/components/icons/LinkedIn.vue';
const SOCIALS = [
  {
    component: Github,
    href: 'https://github.com/Finestwork',
    text: 'Github'
  },
  {
    component: Discord,
    href: 'https://discordapp.com/users/431340211952418827',
    text: 'Discord'
  },
  {
    component: LinkedIn,
    href: '#',
    text: 'LinkedIn'
  }
];
const THIRD_PARTY_TOOLS = [
  {
    href: 'https://logoipsum.com/',
    text: 'LoremIpsum'
  },
  {
    href: 'https://developer.nytimes.com/apis',
    text: 'NYTimes API'
  }
];
</script>
