<script setup>
const skills = [
  {
    title: 'HTML5',
    image: 'html5',
  },
  {
    title: 'CSS3',
    image: 'css',
  },
  {
    title: 'JavaScript',
    image: 'js',
  },
  {
    title: 'Typescript',
    image: 'typescript',
  },
  {
    title: 'React Native',
    image: 'react-native',
  },
  {
    title: 'Vue.js',
    image: 'vue',
  },
  {
    title: 'Tailwind CSS',
    image: 'tailwind',
  },
  {
    title: 'Bootstrap',
    image: 'bootstrap',
  },
  {
    title: 'Sass',
    image: 'sass',
  },
  {
    title: 'Vite',
    image: 'vite',
  },
  {
    title: 'PHP',
    image: 'php',
  },
  {
    title: 'Laravel',
    image: 'laravel',
  },
  {
    title: 'Java',
    image: 'java',
  },
  {
    title: 'MySQL',
    image: 'mysql',
  },
  {
    title: 'C++',
    image: 'cpp',
  },
  {
    title: 'Arduino',
    image: 'arduino',
  },
  {
    title: 'Raspberry Pi',
    image: 'raspberry-pi',
  },
  {
    title: 'Figma',
    image: 'figma',
  },
  {
    title: 'Google Cloud Platform',
    image: 'gcp',
  },
  {
    title: 'GitHub',
    image: 'github',
  },
  {
    title: 'Postman API',
    image: 'postman-api',
  },
  {
    title: 'PHPUnit',
    image: 'phpunit',
  },
  {
    title: 'VS Code',
    image: 'vs-code',
  },
  {
    title: 'Asana',
    image: 'asana',
  },
]
</script>

<template>
  <div class="mx-auto px-6 lg:container">
    <div class="mb-12 space-y-2">
      <h1 class="text-2xl-3xl text-golden-yellow font-bold">Skills & Technologies</h1>
      <p class="text-base-xl text-muted-foreground max-w-3xl">
        Tools and technologies I use to design, build, and ship full-stack applications.
      </p>
    </div>

    <div class="flex justify-center">
      <div
        v-reveal
        class="xs:grid-cols-[repeat(auto-fit,minmax(80px,90px))] grid w-full max-w-4xl grid-cols-[repeat(auto-fit,minmax(80px,1fr))] justify-center justify-items-center gap-6 px-12 sm:grid-cols-[repeat(4,minmax(80px,1fr))] sm:gap-10 md:grid-cols-[repeat(5,minmax(100px,1fr))] lg:grid-cols-[repeat(6,minmax(100px,1fr))]"
      >
        <div v-for="skill in skills" :key="skill.title" class="group relative w-full max-w-[120px]">
          <div
            class="flex aspect-square w-full items-center justify-center rounded-xl bg-gray-800/30 p-3 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-gray-700/50 md:p-4"
          >
            <img
              :src="`/images/logo/${skill.image}.svg`"
              :alt="skill.title"
              class="h-full w-full object-contain grayscale transition-all duration-300 group-hover:grayscale-0"
            />
          </div>

          <!-- Tooltip -->
          <div
            class="bg-golden-yellow text-primary-foreground pointer-events-none absolute -bottom-9 left-1/2 z-50 -translate-x-1/2 rounded-lg px-3 py-1 text-xs font-medium whitespace-nowrap opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 sm:text-sm"
          >
            {{ skill.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
