<script setup>
const email = 'mijareslean@gmail.com'
const emailLink = `mailto:${email}?subject=${encodeURIComponent("Let's work together")}`

const openTo = ['Full-time roles', 'Freelance projects', 'Collaborations']
</script>

<template>
  <div class="mx-auto px-8 sm:px-16 lg:px-24 xl:container">
    <div class="mx-auto max-w-2xl text-center">
      <!-- Get in touch badge -->
      <div
        v-reveal="{ delay: 0 }"
        class="border-golden-yellow/30 bg-golden-yellow/10 text-golden-yellow inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold tracking-wider uppercase"
      >
        <span class="relative flex size-2">
          <span
            class="bg-golden-yellow absolute inline-flex h-full w-full rounded-full opacity-75 motion-safe:animate-ping"
          />
          <span class="bg-golden-yellow relative inline-flex size-2 rounded-full" />
        </span>
        Get in touch
      </div>

      <h1 v-reveal="{ delay: 80 }" class="text-2xl-3xl mt-6 leading-tight font-bold">
        Let's build something
        <span class="text-golden-yellow">great</span> together
      </h1>

      <p v-reveal="{ delay: 160 }" class="text-base-xl mt-4 text-white/70">
        Have a project in mind, a role to fill, or just want to say hello? I'm always happy to
        connect. Send a message and I'll get back to you as soon as I can.
      </p>

      <div v-reveal="{ delay: 240 }" class="mt-8 flex flex-wrap items-center justify-center gap-3">
        <a
          :href="emailLink"
          class="bg-golden-yellow text-primary-foreground hover:bg-golden-yellow/90 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 hover:scale-105"
        >
          <Icon icon="tabler:mail" class="size-4" />
          Send an email
        </a>
        <a
          :href="linkedinLink"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 rounded-full border border-white/4 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-white/8 hover:bg-white/10"
        >
          <Icon icon="tabler:brand-linkedin" class="size-4" />
          Connect on LinkedIn
        </a>
      </div>

      <div v-reveal="{ delay: 320 }" class="mt-10">
        <p class="text-sm font-semibold tracking-wider text-white/40 uppercase">
          Currently open to
        </p>
        <div class="mt-3 flex flex-wrap justify-center gap-2">
          <span
            v-for="item in openTo"
            :key="item"
            class="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-white/70"
          >
            {{ item }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
