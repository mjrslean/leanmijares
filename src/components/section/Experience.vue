<script setup>
import { BriefcaseBusiness } from 'lucide-vue-next'
import { ref } from 'vue'

const experiences = ref([
  {
    company: 'Freelance Developer',
    positions: [
      {
        title: 'Embedded System',
        hired: 'Year 2022 - 2023',
      },
    ],
  },
  {
    company: 'Tensei Philippines Inc.',
    positions: [
      {
        title: 'Internship & Part-time',
        hired: 'March 2023 - August 2023',
      },
    ],
  },
  {
    company: 'Tensei Philippines Inc.',
    positions: [
      {
        title: 'Junior Software Engineer',
        hired: 'September 2023 - June 2025',
      },
      {
        title: 'Senior Software Engineer',
        hired: 'June 2025 - Present',
      },
    ],
  },
])
</script>

<template>
  <div class="mt-12">
    <h1 class="text-golden-yellow text-2xl-3xl font-bold tracking-tight">Experiences</h1>

    <div class="relative mt-12 sm:flex">
      <!-- Vertical line for mobile - centered on 40px circle (left-5 = 20px = half of 40px) -->
      <div class="absolute top-0 left-5 h-full w-0.5 bg-white/50 sm:hidden" />

      <div
        v-for="(exp, index) in experiences"
        :key="index"
        class="relative mb-10 sm:mb-0 sm:flex-1"
      >
        <div class="flex items-center">
          <div
            class="ring-golden-yellow relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full bg-white shadow-lg ring-2 sm:size-12"
          >
            <BriefcaseBusiness class="text-golden-yellow" />
          </div>
          <!-- Horizontal line for desktop -->
          <div
            v-if="index < experiences.length - 1"
            class="hidden h-0.5 w-full bg-white/50 sm:flex"
          />
        </div>

        <div class="mt-6 ml-8 space-y-2 px-2 sm:ml-0">
          <h3 class="text-base-xl font-semibold text-white/90">{{ exp.company }}</h3>
          <div v-for="(role, idx) in exp.positions" :key="idx" class="my-4">
            <p class="text-golden-yellow fluid-text-sm-base font-medium">{{ role.title }}</p>
            <p class="text-xs-sm text-gray-400">{{ role.hired }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
