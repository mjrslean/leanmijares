<script setup>
import { MapPinned, Mail } from 'lucide-vue-next'

const contactInfo = [
  { icon: MapPinned, title: 'My Location', text: 'Quezon City, Metro Manila' },
  { icon: Mail, title: 'Email Address', text: 'mijareslean@gmail.com' },
]
</script>
<template>
  <div class="mx-auto px-6 lg:container">
    <div>
      <h1 class="text-2xl font-bold md:text-3xl">
        Get In
        <span class="group relative ml-1 inline-block">
          <span
            class="relative z-10 cursor-pointer transition-colors duration-300 group-hover:text-white"
            >Touch</span
          >
          <span
            class="bg-golden-yellow absolute bottom-0 left-0 z-0 h-0.5 w-full transition-all duration-300 group-hover:h-full"
          ></span>
        </span>
      </h1>
      <p class="text-base-xl mt-3 text-white/70 md:text-lg">
        Feel free to reach out for collaborations, opportunities, or just to say hello!
      </p>
    </div>

    <div class="my-28 grid grid-cols-1 gap-6 text-center sm:grid-cols-2 md:p-16">
      <div
        v-for="info in contactInfo"
        :key="info.title"
        class="flex flex-col items-center justify-center space-y-4"
      >
        <component :is="info.icon" class="text-golden-yellow size-8" />
        <div class="space-y-1">
          <p class="font-bold md:text-lg">{{ info.title }}</p>
          <p class="text-sm md:text-lg">{{ info.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
