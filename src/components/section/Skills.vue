<script setup>
const skills = [
  'html5',
  'css',
  'js',
  'react-native',
  'vue',
  'tailwind',
  'bootstrap',
  'sass',
  'php',
  'laravel',
  'java',
  'mysql',
  'cpp',
  'arduino',
  'raspberry-pi',
  'figma',
  'gcp',
  'vs-code',
  'github',
  'postman-api',
]
</script>

<template>
  <div class="mx-auto px-6 lg:container">
    <div class="space-y-2">
      <h1 class="text-2xl-3xl text-golden-yellow font-bold">Skills</h1>
      <p class="text-base-xl text-white/70">
        These are the technologies and tools that I have knowledge about.
      </p>
    </div>

    <div class="mt-24 px-6 md:px-16">
      <div class="grid grid-cols-3 justify-items-center space-y-10 sm:grid-cols-5">
        <div
          v-for="skill in skills"
          :key="skill"
          class="size-18 cursor-pointer p-2 grayscale hover:grayscale-0 sm:size-20"
        >
          <img :src="`/images/logo/${skill}.svg`" :alt="skill" />
        </div>
      </div>
    </div>
  </div>
</template>
