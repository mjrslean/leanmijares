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
  <h1 class="text-golden-yellow text-2xl-3xl font-bold tracking-tight">Experiences</h1>
  <div class="relative sm:flex">
    <div v-for="(exp, index) in experiences" :key="index" class="relative mb-10 sm:mb-0 sm:flex-1">
      <div class="flex items-center">
        <div
          class="ring-golden-yellow z-10 flex size-12 shrink-0 items-center justify-center rounded-full bg-white shadow-lg ring-2"
        >
          <BriefcaseBusiness class="text-golden-yellow" />
        </div>
        <div class="hidden h-0.5 w-full bg-white/50 sm:flex"></div>
      </div>
      <div class="mt-4 px-0">
        <h3 class="text-base-xl font-semibold text-white/90">{{ exp.company }}</h3>
        <div class="space-y-2">
          <template v-for="(role, idx) in exp.positions" :key="idx">
            <p class="text-golden-yellow fluid-text-sm-base font-medium">{{ role.title }}</p>
            <p class="text-xs-sm text-gray-400">{{ role.hired }}</p>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
