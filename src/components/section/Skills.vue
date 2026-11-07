<script setup>
import { Terminal } from '@/components/blocks'

const skillGroups = [
  {
    title: 'Frontend',
    skills: [
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
        title: 'Vue.js',
        image: 'vue',
      },
      {
        title: 'Angular',
        image: 'angular',
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
    ],
  },
  {
    title: 'Backend',
    skills: [
      {
        title: 'PHP',
        image: 'php',
      },
      {
        title: 'Laravel',
        image: 'laravel',
      },
      {
        title: 'ASP.NET',
        image: 'aspnet',
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
        title: 'C/C++',
        image: 'cpp',
      },
      {
        title: 'Resend',
        image: 'resend',
      },
    ],
  },
  {
    title: 'Mobile & Embedded',
    skills: [
      {
        title: 'React Native',
        image: 'react-native',
      },
      {
        title: 'Arduino',
        image: 'arduino',
      },
      {
        title: 'Raspberry Pi',
        image: 'raspberry-pi',
      },
    ],
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      {
        title: 'Google Cloud Platform',
        image: 'gcp',
      },
      {
        title: 'Vercel',
        image: 'vercel',
      },
      {
        title: 'Docker',
        image: 'docker',
      },
      {
        title: 'GitHub',
        image: 'github',
      },
    ],
  },
  {
    title: 'Tools & Workflow',
    skills: [
      {
        title: 'Claude',
        image: 'claude',
      },
      {
        title: 'Figma',
        image: 'figma',
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
    ],
  },
]
</script>

<template>
  <div class="mx-auto overflow-x-clip px-8 sm:px-16 lg:px-24 xl:container">
    <div class="mb-8 space-y-2 sm:mb-12">
      <h1 class="text-2xl-3xl text-golden-yellow font-bold">Skills & Technologies</h1>
      <p class="text-base-xl text-muted-foreground max-w-3xl">
        Tools and technologies I use to design, build, and ship full-stack applications.
      </p>
    </div>

    <div
      class="grid gap-10 lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-start xl:grid-cols-[minmax(0,1fr)_34rem]"
    >
      <div class="min-w-0 space-y-8 sm:space-y-10">
        <section v-for="group in skillGroups" :key="group.title" v-reveal>
          <h2 class="mb-4 text-base font-bold text-white">{{ group.title }}</h2>

          <div
            class="grid grid-cols-[repeat(auto-fill,minmax(64px,1fr))] gap-3 sm:grid-cols-[repeat(auto-fill,minmax(72px,80px))] sm:gap-4"
          >
            <div
              v-for="skill in group.skills"
              :key="skill.title"
              tabindex="0"
              class="group focus-visible:ring-golden-yellow relative w-full rounded-xl outline-none focus-visible:ring-2"
            >
              <div
                class="flex aspect-square w-full items-center justify-center rounded-xl bg-gray-800/30 p-3 backdrop-blur-sm transition-all duration-300 group-hover:scale-105 group-hover:bg-gray-700/50 group-focus:bg-gray-700/50 motion-reduce:transition-none sm:p-4"
              >
                <img
                  :src="`/images/logo/${skill.image}.svg`"
                  :alt="skill.title"
                  loading="lazy"
                  draggable="false"
                  class="size-full object-contain grayscale transition-all duration-300 group-hover:grayscale-0 group-focus:grayscale-0"
                />
              </div>

              <!-- Tooltip -->
              <div
                role="tooltip"
                class="bg-golden-yellow text-primary-foreground pointer-events-none invisible absolute top-full left-1/2 z-50 mt-2 w-max max-w-28 -translate-x-1/2 rounded-lg px-3 py-1 text-center text-xs leading-tight font-medium opacity-0 shadow-lg transition-opacity duration-200 group-hover:visible group-hover:opacity-100 group-focus:visible group-focus:opacity-100 sm:text-sm"
              >
                {{ skill.title }}
              </div>
            </div>
          </div>
        </section>
      </div>

      <!-- Terminal: stacks below on mobile, sticks beside the skills on desktop -->
      <div class="mx-auto w-full max-w-2xl min-w-0 lg:sticky lg:top-24 lg:max-w-none">
        <Terminal class="w-full" />
      </div>
    </div>
  </div>
</template>
