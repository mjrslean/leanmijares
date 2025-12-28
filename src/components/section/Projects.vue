<script setup>
import { Link } from 'lucide-vue-next'

const projects = [
  {
    title: 'iBMS Demosite',
    description: 'A quick walkthrough of iBMS highlighting key features and interface.',
    image: '/images/projects/demo-site.png',
    techStack: ['/images/logo/laravel.svg', '/images/logo/vue.svg', '/images/logo/tailwind.svg'],
    link: 'https://tp-demo.ibms-iot.com/en/login',
  },
  {
    title: 'RFID, Fingerprint, And Keypad Based Door Lock With Alert System',
    description:
      'Home security system that sends instant SMS alerts to homeowners upon detecting intruders.',
    image: '/images/projects/three-way-security.png',
    techStack: ['/images/logo/cpp.svg', '/images/logo/arduino.svg', '/images/logo/twilio.svg'],
    link: 'https://github.com/mjrslean/Three-Way-Security',
  },
  {
    title: 'Online Student Monitoring System with SMS',
    description:
      'Streamlines communication and scheduling between parents, administrators, and faculty to improve student information tracking.',
    image: '/images/projects/student-monitoring.png',
    techStack: [
      '/images/logo/html5.svg',
      '/images/logo/css.svg',
      '/images/logo/bootstrap.svg',
      '/images/logo/java.svg',
      '/images/logo/mysql.svg',
    ],
  },
  {
    title: 'Smart-Home Automation and Environment Monitoring',
    description:
      'An Android-based home automation app designed to remotely control specific devices and monitor environmental conditions within the home and its surroundings.',
    image: '/images/projects/smart-home.png',
    techStack: [
      '/images/logo/react-native.svg',
      '/images/logo/arduino.svg',
      '/images/logo/raspberry-pi.svg',
      '/images/logo/firebase.svg',
    ],
    link: 'https://github.com/mjrslean/Smart-Space-Application',
  },
]
</script>

<template>
  <div class="mx-auto px-6 lg:container">
    <div class="mb-6 space-y-2">
      <h1 class="text-golden-yellow text-2xl-3xl font-bold">Projects</h1>
      <p class="text-base-xl text-white/70">
        These are the personal and professional projects that reflect my growth as a developer.
      </p>
    </div>

    <masonry-wall :items="projects" :ssr-columns="1" :column-width="300" :gap="16" class="mt-24">
      <template #default="{ item }">
        <div class="bg-main-card w-full rounded-lg shadow-lg">
          <div class="relative">
            <img :src="item.image" class="border-b-golden-yellow w-full rounded-t-lg border-b-2" />
            <div class="absolute inset-0 rounded-t-lg bg-black/25"></div>
          </div>
          <div class="space-y-3 p-3">
            <div>
              <h2 class="mb-2 font-bold">{{ item.title }}</h2>
              <p class="text-sm text-gray-400">{{ item.description }}</p>
            </div>
            <div>
              <p class="mb-2 text-sm font-semibold">Tech Stacks</p>
              <div class="flex items-center justify-between gap-2">
                <div class="flex flex-wrap gap-2">
                  <img
                    v-for="(tech, i) in item.techStack"
                    :key="i"
                    :src="tech"
                    class="size-5 object-contain"
                  />
                </div>
                <a
                  :href="item.link"
                  v-if="item.link"
                  target="_blank"
                  class="text-golden-yellow hover:bg-golden-yellow/10 shrink-0 rounded-full p-2 transition-colors duration-200"
                >
                  <Link class="size-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </template>
    </masonry-wall>
  </div>
</template>
