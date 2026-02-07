<script setup>
// import { MapPinned, Mail } from 'lucide-vue-next'

const contactInfo = [
  { icon: 'lucide:map', title: 'My Location', text: 'Quezon City, Metro Manila' },
  { icon: 'lucide:mail', title: 'Email Address', text: 'mijareslean@gmail.com' },
]
</script>
<template>
  <div class="mx-auto px-6 lg:container">
    <div>
      <h1 class="text-2xl-3xl font-bold">
        Get In
        <span class="group relative ml-1 inline-block">
          <span
            class="relative z-10 cursor-pointer transition-colors duration-300 group-hover:text-white"
            >Touch</span
          >
          <span
            class="bg-golden-yellow absolute bottom-0 left-0 z-0 h-1 w-full rounded-full transition-all duration-300 group-hover:h-full"
          ></span>
        </span>
      </h1>
      <p class="text-base-xl mt-3 text-white/70 md:text-lg">
        Feel free to reach out for collaborations, opportunities, or just to say hello!
      </p>
    </div>

    <!-- Contact Cards -->
    <div class="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-24">
      <div
        v-for="info in contactInfo"
        :key="info.title"
        class="group hover:shadow-golden-yellow/10 relative overflow-hidden rounded-2xl border border-white/10 bg-gray-800/30 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/5"
      >
        <!-- Icon -->
        <div
          class="bg-golden-yellow/10 group-hover:bg-golden-yellow/20 mb-6 inline-flex rounded-full p-4 transition-all duration-300 group-hover:scale-110"
        >
          <Icon
            :icon="info.icon"
            class="text-golden-yellow size-6 transition-transform duration-300 group-hover:rotate-12"
          />
        </div>

        <!-- Content -->
        <div class="space-y-2">
          <h3 class="text-base-lg font-semibold text-white">
            {{ info.title }}
          </h3>
          <p
            class="text-sm-base text-white/60 transition-colors duration-300 group-hover:text-white/80"
          >
            {{ info.text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
