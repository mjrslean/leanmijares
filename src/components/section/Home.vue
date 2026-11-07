<script setup>
import Button from '../ui/button/Button.vue'
import About from './About.vue'

const downloadCV = () => {
  window.open(
    'https://drive.usercontent.google.com/u/0/uc?id=1pH2HLmwJYCsOThdcnioppH-JJ3uBaNth&export=download',
    '_blank',
  )
}

const socialLinks = [
  {
    icon: 'tabler:brand-github',
    label: 'GitHub',
    url: 'https://github.com/mjrslean',
  },
  {
    icon: 'tabler:brand-linkedin',
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/lean-elizebette-mijares/',
  },
  {
    icon: 'tabler:brand-facebook',
    label: 'Facebook',
    url: 'https://www.facebook.com/lean.schooldays/',
  },
  {
    icon: 'tabler:mail',
    label: 'Email',
    url: 'mailto:mijareslean@gmail.com',
  },
]
</script>

<template>
  <div class="mx-auto px-8 sm:px-16 lg:px-24 xl:container">
    <div
      class="flex flex-col-reverse items-center gap-12 pt-4 md:flex-row md:items-center lg:gap-20"
    >
      <!-- Intro -->
      <div
        v-reveal
        class="flex w-full flex-1 flex-col items-center gap-8 text-center md:items-start md:text-left"
      >
        <div
          class="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-medium text-emerald-300"
        >
          <span class="relative flex size-2">
            <span
              class="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75"
            ></span>
            <span class="relative inline-flex size-2 rounded-full bg-emerald-400"></span>
          </span>
          Open to opportunities
        </div>

        <h1 class="text-3xl-4xl leading-tight font-bold">
          Hi, I'm <span class="text-golden-yellow">Lean</span>
        </h1>

        <p class="text-base-xl max-w-xl text-white/70">
          I build fast, reliable web applications with clean, maintainable code, from Laravel APIs
          and Vue frontends to IoT integrations.
        </p>

        <div class="flex flex-wrap items-center justify-center gap-3 md:justify-start">
          <Button
            @click="downloadCV()"
            class="bg-golden-yellow/80 hover:bg-golden-yellow text-primary-foreground rounded-full"
          >
            <Icon icon="coolicons:download-round" class="size-4" />
            <span class="font-bold">Download CV</span>
          </Button>

          <RouterLink to="/contact">
            <Button
              @click="downloadCV()"
              class="rounded-full border border-white/4 bg-white/5 text-white transition-all duration-300 hover:border-white/8 hover:bg-white/10"
            >
              <Icon icon="tabler:message-circle" class="size-4" />
              <span class="font-semibold">Get in touch</span>
            </Button>
          </RouterLink>
        </div>

        <div class="flex items-center gap-3">
          <span class="text-xs font-semibold tracking-wider text-white/40 uppercase"
            >Find me on
          </span>
          <span class="h-px w-10 bg-white/10 md:w-16"></span>
          <a
            v-for="social in socialLinks"
            :key="social.label"
            :href="social.url"
            :aria-label="social.label"
            :target="social.url.startsWith('http') ? '_blank' : undefined"
            :rel="social.url.startsWith('http') ? 'noopener noreferrer' : undefined"
            class="hover:border-golden-yellow/30 hover:bg-golden-yellow/10 hover:text-golden-yellow inline-flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition-all duration-300 hover:scale-110"
          >
            <Icon :icon="social.icon" class="size-5" />
          </a>
        </div>
      </div>

      <!-- Avatar -->
      <div v-reveal="{ delay: 160 }" class="relative flex justify-center md:shrink-0 lg:w-[22rem]">
        <div
          class="border-golden-yellow/30 relative rounded-full border bg-white/5 p-2 shadow-2xl ring-2 ring-white/5 backdrop-blur-sm"
        >
          <img
            src="/images/Avatar.png"
            class="size-52 rounded-full object-cover lg:size-64"
            draggable="false"
            alt="Profile avatar"
          />
        </div>

        <div
          class="text-xs-sm bg-main-card/80 absolute -bottom-2 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 whitespace-nowrap text-white/80 shadow-lg backdrop-blur-sm"
        >
          <Icon icon="tabler:code" class="text-golden-yellow size-3.5" />
          Full-Stack Developer
        </div>
      </div>
    </div>

    <div id="about" class="text-sm-base mt-24 scroll-mt-24 space-y-8 tracking-wide">
      <About />
    </div>
  </div>
</template>
