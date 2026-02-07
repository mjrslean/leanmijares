<script setup>
import Button from '../ui/button/Button.vue'
import About from './About.vue'

const downloadCV = () => {
  window.open(
    'https://drive.usercontent.google.com/u/0/uc?id=1pH2HLmwJYCsOThdcnioppH-JJ3uBaNth&export=download',
    '_blank',
  )
}

const socialMediaLinks = [
  { icon: 'tabler:brand-facebook', url: 'https://www.facebook.com/lean.schooldays/' },
  { icon: 'tabler:brand-github', url: 'https://github.com/mjrslean' },
  { icon: 'tabler:brand-linkedin', url: 'https://www.linkedin.com/in/lean-elizebette-mijares/' },
  { icon: 'tabler:mail', url: 'mailto:mijareslean@gmail.com' },
]
</script>

<template>
  <div class="mx-auto flex flex-col gap-12 px-6 tracking-wide md:flex-row lg:container">
    <div class="relative flex flex-col items-start gap-12">
      <div class="relative size-40">
        <div
          class="absolute inset-0 rounded-full bg-gradient-to-r from-gray-400 to-orange-500 opacity-30 blur-2xl"
        />
        <img
          src="/images/Avatar.png"
          class="border-golden-yellow relative z-10 h-full w-full rounded-full border-2 shadow-2xl"
          alt="Profile avatar"
        />
      </div>
      <Button @click="downloadCV()" class="bg-golden-yellow hover:bg-golden-yellow/80 text-white">
        <Icon icon="line-md:cloud-alt-download-loop" class="size-4" />
        <span class="text-sm font-bold">Download CV</span>
      </Button>
    </div>

    <div class="flex flex-col space-y-10">
      <!--Social Platform-->
      <div class="flex flex-col space-y-2">
        <div class="leading-8">
          <h1 class="text-3xl-4xl font-bold">
            Hi, I'm <span class="text-golden-yellow">Lean</span>
          </h1>
          <p class="text-sm-base text-sub-text font-semibold">Software Engineer</p>
        </div>

        <div class="text-sub-text flex items-center gap-4">
          <a v-for="link in socialMediaLinks" :key="link.icon" :href="link.url" target="_blank">
            <Icon
              :icon="link.icon"
              class="hover:text-golden-yellow size-6 transition-transform duration-300 hover:rotate-12"
            />
          </a>
        </div>
      </div>

      <div class="text-sm-base space-y-8 tracking-wide">
        <About />
      </div>
    </div>
  </div>
</template>
