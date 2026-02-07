<script setup>
import { Icon } from '@iconify/vue'
import { Badge } from '@/components/ui/badge'
import { computed, ref } from 'vue'

const projects = [
  {
    title: 'iBMS Demosite',
    description: 'A quick walkthrough of iBMS highlighting key features and interface.',
    image: '/images/projects/demo-site.png',
    techStack: [
      { name: 'Laravel', icon: '/images/logo/laravel.svg' },
      { name: 'Vue', icon: '/images/logo/vue.svg' },
      { name: 'Tailwind', icon: '/images/logo/tailwind.svg' },
    ],
    link: 'https://tp-demo.ibms-iot.com/en/login',
    status: 'Completed',
  },
  {
    title: 'RFID, Fingerprint, And Keypad Based Door Lock With Alert System',
    description:
      'Home security system that sends instant SMS alerts to homeowners upon detecting intruders.',
    image: '/images/projects/three-way-security.png',
    techStack: [
      { name: 'C++', icon: '/images/logo/cpp.svg' },
      { name: 'Arduino', icon: '/images/logo/arduino.svg' },
      { name: 'Twilio', icon: '/images/logo/twilio.svg' },
    ],
    github: 'https://github.com/mjrslean/Three-Way-Security',
    status: 'Completed',
  },
  {
    title: 'Smart-Home Automation and Environment Monitoring',
    description:
      'An Android-based home automation app designed to remotely control specific devices and monitor environmental conditions within the home and its surroundings.',
    image: '/images/projects/smart-home.png',
    techStack: [
      { name: 'React Native', icon: '/images/logo/react-native.svg' },
      { name: 'Firebase', icon: '/images/logo/firebase.svg' },
      { name: 'Arduino', icon: '/images/logo/arduino.svg' },
      { name: 'Raspberry Pi', icon: '/images/logo/raspberry-pi.svg' },
      { name: 'Python', icon: '/images/logo/python.svg' },
    ],
    github: 'https://github.com/mjrslean/Smart-Space-Hardware',
    status: 'Completed',
  },
]
</script>

<template>
  <div class="mx-auto px-6 lg:container">
    <div class="mb-12 space-y-2">
      <h1 class="text-golden-yellow text-2xl-3xl font-bold">Projects</h1>
      <p class="text-base-xl max-w-3xl text-gray-400">
        A showcase of projects demonstrating my development skills.
      </p>
    </div>

    <masonry-wall :items="projects" :ssr-columns="1" :column-width="320" :gap="24">
      <template #default="{ item }">
        <div
          class="group relative overflow-hidden rounded-xl bg-gray-800/30 backdrop-blur-sm transition-all duration-300 hover:bg-gray-800/50"
        >
          <!-- Image with overlay -->
          <div class="relative overflow-hidden">
            <img
              :src="item.image"
              :alt="item.title"
              class="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60"
            ></div>

            <!-- Top badges -->
            <div class="absolute top-3 right-3 flex gap-2">
              <Badge v-if="item.status" variant="secondary">
                {{ item.status }}
              </Badge>
            </div>

            <!-- Action buttons -->
            <div class="absolute right-3 bottom-3 flex gap-2">
              <a
                v-if="item.github"
                :href="item.github"
                target="_blank"
                rel="noopener noreferrer"
                class="rounded-full bg-gray-900/80 p-2 opacity-0 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 hover:scale-110 hover:bg-gray-800"
                title="View on GitHub"
              >
                <Icon icon="mdi:github" class="size-4 text-white" />
              </a>
              <a
                v-if="item.link"
                :href="item.link"
                target="_blank"
                rel="noopener noreferrer"
                class="bg-golden-yellow rounded-full p-2 opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100 hover:scale-110"
                title="View Live Demo"
              >
                <Icon icon="lucide:link" class="size-4 text-white" />
              </a>
            </div>
          </div>

          <!-- Content -->
          <div class="space-y-4 p-5">
            <div>
              <h2 class="text-lg font-bold text-white">{{ item.title }}</h2>
              <p class="text-sm leading-relaxed text-gray-400">{{ item.description }}</p>
            </div>

            <!-- Tech Stack -->
            <div>
              <p class="mb-3 text-xs font-semibold tracking-wider text-gray-500 uppercase">
                Tech Stack
              </p>
              <div class="flex flex-wrap gap-3">
                <div
                  v-for="(tech, i) in item.techStack"
                  :key="i"
                  class="group/tech relative flex size-10 items-center justify-center rounded-lg bg-gray-700/50 p-2 transition-all duration-300 hover:bg-gray-600/50"
                  :title="tech.name"
                >
                  <img :src="tech.icon" :alt="tech.name" class="size-full object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </masonry-wall>
  </div>
</template>
